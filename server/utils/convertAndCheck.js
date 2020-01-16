const moment = require('moment')

const isMajor = (age) => moment().diff(age, 'years') >= 18;


module.exports = {
    isMajor
}