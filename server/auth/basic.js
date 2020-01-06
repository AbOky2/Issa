const passport = require('passport');
const { Strategy } = require('passport-local');
const UserModel = require('../models/User');
const { jwtTokenize } = require('../utils/jwt')


const auth = ({ app }) => {
    const verify = async (req, email, password, cb) => {
        const {
            body: { firstName, lastName, role, budget, housing_type, housing_objective, school, studiesLevel },
        } = req;

        try {
            const user = await UserModel.signInOrSignUp({
                firstName,
                lastName,
                email,
                password,
                role,
                budget,
                housing_type,
                housing_objective,
                school,
                studiesLevel
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
    });

    app.get('/auth/logout', (req, res, next) => {
        req.logout();
        req.session.destroy(function (err) {
            if (err) { return next(err); }
            return res.send({ authenticated: false });
        });
    });
};
module.exports = auth;