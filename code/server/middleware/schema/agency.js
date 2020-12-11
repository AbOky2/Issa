const Joi = require('joi');

const schemas = {
    admin: {
        post: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().min(3).max(20).required(),
            email: Joi.string().email().required(),
            address: Joi.string().min(3).max(20).required(),
        }),
        update: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().min(3).max(20).optional(),
            email: Joi.string().email().optional(),
            address: Joi.string().min(3).max(20).optional(),
        }),
    },
};
module.exports = schemas;