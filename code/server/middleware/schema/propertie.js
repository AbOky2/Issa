const Joi = require('joi')
const swithContent = Joi.object({
    _id: Joi.string().required(),
    position: Joi.number(),
}).required()

const schemas = {
    admin: {
        propertie: {
            post: Joi.object().keys({
                name: Joi.string().min(3).max(20).required(),
                description: Joi.string().required(),
                dimension: Joi.string().required(),
                address: Joi.string().required(),
                nb_available: Joi.number().required(),
                location_date: Joi.strict().required(),
                position: Joi.number().min(0).optional(),
            }),
            update: Joi.object().keys({
                picture: Joi.string().optional().allow(''),
                name: Joi.string().min(3).max(20).optional(),
                description: Joi.string().optional(),
                dimension: Joi.string().optional(),
                address: Joi.string().optional(),
                nb_available: Joi.number().optional(),
                location_date: Joi.strict().optional(),
                position: Joi.number().min(0).optional(),
            }),
            swapPosition: Joi.object().keys({
                first: swithContent,
                second: swithContent
            }),
        }
    },
};
module.exports = schemas;