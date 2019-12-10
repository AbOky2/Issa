const passport = require('passport');
const { Strategy } = require('passport-local');
const UserModel = require('../models/User');
const { Admin } = require('../utils/user')


const auth = ({ app }) => {
    const verify = async (req, email, password, cb) => {
        const {
            body: { firstName, lastName, role },
        } = req;

        try {
            const user = await UserModel.signInOrSignUp({
                firstName,
                lastName,
                email,
                password,
                role: Admin,
            });
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

    app.post('/auth/basic', (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) return next(err);
            if (!user) return res.json({ message: info.message });

            req.login(user, (err) => {
                if (err) return next(err);

                return res.json({ login: true });
            });
        })(req, res, next);
    });
};
module.exports = auth;