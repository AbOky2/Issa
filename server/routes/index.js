const studentApi = require('./students')
const adminApi = require('./admin')
const { authCheck } = require('../utils/express');
const { Admin, Student } = require('../utils/user');

function api(app) {
    // app.use('/api/v1/public', publicApi);
    app.use('/api/v1/students', authCheck(Student), studentApi);
    app.use('/api/v1/admin', authCheck(Admin), adminApi);
}

module.exports = api;