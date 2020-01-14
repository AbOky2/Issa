const jwt = require('jsonwebtoken');
require('dotenv').config();
const { invalidToken } = require('../utils/message')
const User = require('../models/User');


const jwtMiddleware = (req, res, next) => {
    // check header or url parameters or post parameters for token
    const not_loged_user_acess_page = ['/auth/signin', '/auth/signup'];
    const publicApiV1 = '/api/v1/publicsss';
    const originalUrl = req.originalUrl;
    let token = req.headers['authorization'];

    if (not_loged_user_acess_page.includes(originalUrl))
        return next();

    if (!token)
        return next(); //if no token, continue

    token = token.replace('Bearer ', '');

    jwtVerify(token, async (err, user) => {
        if (err) {
            if (originalUrl.substring(0, publicApiV1.length) === publicApiV1)
                return next();
            return res.status(401).json({ success: false, message: invalidToken });
        }
        else {
            if (user) {
                try {
                    user = await User.getById(user._id);
                    req.user = user; //set the user to req so other routes can use it
                } catch (err) {
                    req.logout();
                    req.session.destroy();
                }
            }
            next();
        }
    });
}
const jwtVerify = (token, calb) => jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'RS256' }, calb);
const jwtTokenize = (data) => (jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '24h' }));

module.exports = {
    jwtMiddleware,
    jwtVerify,
    jwtTokenize
}