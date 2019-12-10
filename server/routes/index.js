const studentApi = require('./students')
const adminApi = require('./admin')

function api(app) {
    // app.use('/api/v1/public', publicApi);
    app.use('/api/v1/students', studentApi);
    app.use('/api/v1/admin', adminApi);
}

module.exports = api;