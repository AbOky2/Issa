const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const { removeFiles } = require('../utils/upload');
const modelName = 'Propertie'

const mongoSchema = new Schema({
    picture: {
        type: [String],
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    dimension: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    nb_available: {
        type: Number,
        required: true,
    },
    position: {
        type: Number,
        required: true,
        // unique: true,
        min: 1
    },
});

class PropertieClass extends DBModel {
    static name = modelName;

    /**
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.color
     */
    static async add(args) {
        try {
            if (!args.picture || args.picture.length < 1)
                throw 'Picture must be set';

            return super.add(args);
        } catch (error) {
            removeFiles(args.picture);
            throw error
        }
    }
}
mongoSchema.loadClass(PropertieClass);

const Propertie = mongoose.model(modelName, mongoSchema);

module.exports = Propertie;