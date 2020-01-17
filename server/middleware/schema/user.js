const Joi = require('joi')
const { studentRoleList, housing_type_List, housing_objectiveList, StudentStatusList, studiesLevelList, StatusList } = require('../../utils/user')

const update = {
    picture: Joi.any().optional(),
    firstName: Joi.string().min(1).optional(),
    lastName: Joi.string().min(1).optional(),
    slug: Joi.string().optional(),
    age: Joi.date().optional(),
    city: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(4).optional(),
    phone: Joi.string().min(5).optional(),
    role: Joi.string().valid(...studentRoleList),
    status: Joi.string().valid(...StatusList),

    // Housing
    zones: Joi.array().items(
        Joi.object().keys({
            zoneName: Joi.string().required(),
            zoneValue: Joi.string().required(),
        }).optional()
    ),
    budget: Joi.number().min(0).optional(),
    studiesLevel: Joi.string().valid(...studiesLevelList),
    housing_type: Joi.string().valid(...housing_type_List),
    housing_objective: Joi.string().valid(...housing_objectiveList),
    student_status: Joi.string().valid(...StudentStatusList),
    school: Joi.string().optional(),
}

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
                    Joi.object().keys({
                        zoneName: Joi.string().required(),
                        zoneValue: Joi.string().required(),
                    }).optional()
                ),
                budget: Joi.number().min(0).optional(),
                studiesLevel: Joi.string().valid(...studiesLevelList),
                housing_type: Joi.string().valid(...housing_type_List),
                housing_objective: Joi.string().valid(...housing_objectiveList),
                student_status: Joi.string().valid(...StudentStatusList),
                school: Joi.string().optional(),
            },
            signIn: {
                // user info
                email: Joi.string().email().required(),
                password: Joi.string().min(4).required(),
            },
        }
    },
    all: {
        user: {
            reqUser: {
                _id: Joi.any().required(),
                ...update
            },
            update: update
        }
    }
};
module.exports = schemas;