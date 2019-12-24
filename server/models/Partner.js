const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const { removeFiles } = require('../utils/upload');
const modelName = 'Partner'

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
    link: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
        // unique: true,
        min: 1
    },
});

class PartnerClass extends DBModel {
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
mongoSchema.loadClass(PartnerClass);

const Partner = mongoose.model(modelName, mongoSchema);

module.exports = Partner;