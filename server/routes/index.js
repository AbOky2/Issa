const studentApi = require('./students')
const adminApi = require('./admin')
const publicApi = require('./public')
const { authCheck } = require('../utils/express');
const { Admin, Student } = require('../utils/user');

function api(app) {
    app.use('/api/v1/public', publicApi);
    // app.use('/api/v1/public/', authCheck('*'), publicApi);

    // Role Routes
    app.use(`/api/v1/${Student}`, authCheck(Student), studentApi);
    app.use(`/api/v1/${Admin}`, authCheck(Admin), adminApi);
}

module.exports = api;