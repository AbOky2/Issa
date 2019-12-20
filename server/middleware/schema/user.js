const Joi = require('joi')
const { studentRoleList } = require('../../utils/user')

const schemas = {
    admin: {
        user: {
            listByRole: Joi.object().keys({
                role: Joi.string().valid(...studentRoleList)
            }),
        }
    },
};
module.exports = schemas;