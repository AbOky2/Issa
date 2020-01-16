const Joi = require('joi')
const { studentRoleList, housing_type_List, StudentStatusList } = require('../../utils/user')

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
                age: Joi.date().required(),
                city: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(4).required(),
                phone: Joi.string().min(5).required(),
                role: Joi.string().valid(...studentRoleList),

                // Housing
                zones: Joi.array().items(
                    Joi.object().keys({ zone: Joi.string().required() }).optional()
                ),
                budget: Joi.number().min(0).optional(),
                housing_type: Joi.string().valid(...housing_type_List),
                student_status: Joi.string().valid(...StudentStatusList),
                school: Joi.string().optional(),
            },
            signIn: {
                // user info
                email: Joi.string().email().required(),
                password: Joi.string().min(4).required(),
            },
        }
    }
};
module.exports = schemas;