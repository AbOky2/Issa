const studentApi = require('./students')
const adminApi = require('./admin')
const { authCheck } = require('../utils/express');
const { Admin, Student } = require('../utils/user');

function api(app) {
    // app.use('/api/v1/public', publicApi);
    app.use(`/api/v1/${Student}`, authCheck(Student), studentApi);
    app.use(`/api/v1/${Admin}`, authCheck(Admin), adminApi);
    app.use('/api/v1/currentUser', authCheck('*'), (req, res, next) => {
        res.json({ user: req.user })
        next()
    });
}

module.exports = api;