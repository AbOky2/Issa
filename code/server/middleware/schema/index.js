const Joi = require('joi')

const idParams = Joi.object().keys({
    id: Joi.string()
});

const schemas = {
    list: Joi.object().keys({
        offset: Joi.number().min(0).optional(),
        limit: Joi.number().min(0).optional()
    }),
    get: idParams,
    update: idParams,
    delete: idParams,
};
module.exports = schemas;