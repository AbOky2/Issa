const googleAuth = require('./google');
const basicAuth = require('./basic');

module.exports = ({ app, ROOT_URL }) => {
    basicAuth({ app, ROOT_URL });
    googleAuth({ app, ROOT_URL });
}