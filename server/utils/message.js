const { ucfirst } = require('./common')

const invalidToken = 'Invalid token provided';
const notAuthorized = "User has not authorized"

const variabless = {
    wrong: 'Wrong',
    invalid: 'Invalid',
    wrong: 'Wrong',
    notFound: 'not found',
    alreadyExist: 'already exist'
}
const formatNameValue = (name, value) => `${name} ${value}`;

const notFound = (value) => formatNameValue(ucfirst(value), variabless.notFound);
const wrongInfo = (value) => formatNameValue(variabless.wrong, value);
const invalidInfo = (value) => formatNameValue(variabless.invalid, value);
const alreadyExist = (value) => formatNameValue(variabless.alreadyExist, value);


module.exports = {
    // vars
    invalidToken,
    notAuthorized,

    // methods
    notFound,
    wrongInfo,
    invalidInfo,
    alreadyExist,
}