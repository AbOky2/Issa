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
const alreadyExist = (name) => formatNameValue(name, variabless.alreadyExist);

const httpVariabless = {
    phone: 'Téléphone',
    invalid: 'Invalid',
    wrong: 'Wrong',
    notFound: 'not found',
    alreadyExist: 'already exist'
}

const convertHttpErrors = (err) => {
    let error = err;

    if (error.name === 'MongoError' && error.code === 11000)
        error.message = alreadyExist(Object.keys(error.keyPattern).map(e => httpVariabless[e]).join(', '));

    return error;
}

module.exports = {
    // vars
    invalidToken,
    notAuthorized,
    convertHttpErrors,

    // methods
    notFound,
    wrongInfo,
    invalidInfo,
    alreadyExist,
}