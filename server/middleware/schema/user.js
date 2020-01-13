const Joi = require('joi')
const { studentRoleList, housing_type_List } = require('../../utils/user')

const schemas = {
    admin: {
        user: {
            listByRole: Joi.object().keys({
                role: Joi.string().valid(...studentRoleList)
            }),
        }
    },
    public: {
        user: {
            signUp: {
                // user info
                firstName: Joi.string().min(1).required(),
                lastName: Joi.string().min(1).required(),
                age: Joi.number().min(18).required(),
                city: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(5).required(),
                phone: Joi.string().min(5).required(),
                role: Joi.string().valid(...studentRoleList),

                // Housing
                zones: Joi.array().items(Joi.string().required()).required(),
                budget: Joi.number().min(0).required(),
                housing_type: Joi.string().valid(...housing_type_List),
            },
            signIn: {
                // user info
                email: Joi.string().email().required(),
                password: Joi.string().min(5).required(),
            },
        }
    }
};
module.exports = schemas;