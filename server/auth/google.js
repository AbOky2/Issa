const passport = require('passport');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
// const { google } = require('googleapis');

const User = require('../models/User');
const { Student } = require('../utils/user')
// const { redirecAfterAuth } = require('./index');
const { jwtTokenize } = require('../utils/jwt')
const { notFound } = require('../utils/message')

function auth({ ROOT_URL, app }) {
    const verify = async (accessToken, refreshToken, profile, verified) => {
        let email;
        let avatarUrl;
        let firstName;
        let lastName;

        if (profile.emails) {
            email = profile.emails[0].value;
        }

        if (profile.photos && profile.photos.length > 0) {
            avatarUrl = profile.photos[0].value.replace('sz=50', 'sz=128');
        }
        if (profile.name && profile.name.familyName) {
            lastName = profile.name.familyName;
        } else {
            lastName = profile.displayName;
        }
        if (profile.name && profile.name.givenName) {
            firstName = profile.name.givenName;
        } else {
            firstName = profile.displayName;
        }
        try {
            const user = await User.signInOrSignUp({
                provider: profile.provider,
                socialUserId: profile.id,
                role: Student,
                email,
                token: accessToken,
                firstName,
                lastName,
                avatarUrl,
            });
            verified(null, user);
        } catch (err) {
            verified(err);
        }
    };
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    passport.use(
        new Strategy(
            {
                clientID: process.env.Google_clientId,
                clientSecret: process.env.Google_clientSecret,
                callbackURL: `${ROOT_URL}/oauth2callback`,
            },
            verify,
        ),
    );

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
            prompt: 'select_account',
        }),
    );

    app.get(
        '/oauth2callback',
        passport.authenticate('google', {
            failureRedirect: '/login',
        }),
        (req, res, next) => {
            if (req.user) {
                const user = req.user;
                const token = jwtTokenize(user);
                return res.redirect(`http://localhost:3000/login?token=${token}&user=${user}`)
            }
            return res.status(401).json({ authenticate: false, message: notFound('user') });
        },
    );
}

module.exports = auth;