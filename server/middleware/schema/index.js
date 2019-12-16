const Joi = require('joi')
const schemas = {
    list: Joi.object().keys({
        offset: Joi.number().min(0).optional(),
        limit: Joi.number().min(0).optional()
    })
};
module.exports = schemas;