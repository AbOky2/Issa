const passport = require('passport');
const { Strategy } = require('passport-local');
const UserModel = require('../models/User');
const { jwtTokenize } = require('../utils/jwt')
const userSchema = require('../middleware/schema/user')
const requestMiddleware = require('../middleware/request');

const signUpPath = '/auth/signup'
const signInPath = '/auth/signin'

const SignRequsts = [
    { path: signUpPath, schema: userSchema.public.user.signUp },
    { path: signInPath, schema: userSchema.public.user.signIn },
]

const auth = ({ app }) => {
    const verify = async (req, email, password, cb) => {
        const reqPath = req.path;
        const data = { ...req.body, email, password }
        let user = null;

        try {
            if (reqPath === signInPath)
                user = await UserModel.signIn(data);
            else if (reqPath === signUpPath)
                user = await UserModel.signUp(data);
            else
                throw 'wrong path';

            cb(null, user);
        } catch (err) {
            if (err.message)
                return cb(null, null, err);
            cb(err, null);
        }
    };

    passport.use(
        new Strategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true,
            },
            verify,
        ),
    );


    SignRequsts.forEach(({ path, schema }) => (
        app.post(path, requestMiddleware(schema), (req, res, next) => {
            passport.authenticate('local', function (err, user, info) {
                if (err)
                    return next(err);
                if (!user)
                    return res.status(401).json({ message: info.message });

                req.login(user, (err) => {
                    if (err) return next(err);
                    const user = req.user;
                    const token = jwtTokenize(req.user);

                    return res.json({ authenticate: true, user, token });
                });
            })(req, res, next);
        })
    ))


    app.get('/auth/logout', (req, res, next) => {
        req.logout();
        req.session.destroy(function (err) {
            if (err) { return next(err); }
            return res.send({ authenticated: false });
        });
    });
};
module.exports = auth;