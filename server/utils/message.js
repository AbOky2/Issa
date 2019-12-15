const { ucfirst } = require('./common')

const invalidToken = 'Invalid token provided';
const notAuthorized = "User has not authorized"

const notFound = (name) => `${ucfirst(name)} not Found`;
const wrongInfo = (name) => `Wrong ${name}`;


module.exports = {
    // vars
    invalidToken,
    notAuthorized,

    // methods
    notFound,
    wrongInfo,
}