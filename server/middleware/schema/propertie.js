const Joi = require('joi')
const schemas = {
    admin: {
        propertie: {
            post: Joi.object().keys({
                picture: Joi.string().optional().allow(''),
                name: Joi.string().min(3).max(20).required(),
                description: Joi.string().required(),
                dimension: Joi.string().required(),
                address: Joi.string().required(),
                nb_available: Joi.number().required(),
                position: Joi.number().min(0).optional(),
            }),
        }
    },
};
module.exports = schemas;