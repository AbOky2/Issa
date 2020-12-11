const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const modelName = 'Agency'

const mongoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

class AgencyClass extends DBModel { static name = modelName; }

mongoSchema.loadClass(AgencyClass);

const Agency = mongoose.model(modelName, mongoSchema);

module.exports = Agency;