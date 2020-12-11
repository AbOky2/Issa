const Joi = require('joi')
const swithContent = Joi.object({
    _id: Joi.string().required(),
    position: Joi.number(),
}).required()

const schemas = {
    admin: {
        partner: {
            post: Joi.object().keys({
                name: Joi.string().min(3).max(20).required(),
                description: Joi.string().required(),
                link: Joi.string().uri().required(),
                position: Joi.number().min(0).required(),
            }),
            update: Joi.object().keys({
                picture: Joi.string().optional().allow(''),
                name: Joi.string().min(3).max(20).optional(),
                description: Joi.string().optional(),
                link: Joi.string().uri().optional(),
                position: Joi.number().min(0).required(),
            }),
            swapPosition: Joi.object().keys({
                first: swithContent,
                second: swithContent
            }),
        }
    },
};
module.exports = schemas;