const Joi = require('joi');

const schemas = {
    admin: {
        post: Joi.object().keys({
            name: Joi.string().min(3).max(20).required(),
        }),
        update: Joi.object().keys({
            name: Joi.string().min(3).max(20).required(),
        }),
    },
};
module.exports = schemas;