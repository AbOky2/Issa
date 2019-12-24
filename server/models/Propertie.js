const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const { removeFiles } = require('../utils/upload');


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
    /**
     * Update a propertie
     * @param {Object} options
     * @param {ObjectId} options.propertieId
     * @param {String} options.name
     * @param {String} options.contact
     * @param {String} options.picture
     * @param {String} options.description
     */
    static async updateById({ propertieId, ...updates }) {
        const propertieDoc = await this.findById(propertieId);
        if (!propertieDoc) {
            throw new Error('propertie not found');
        }
        Object.entries(updates)
            .filter(([_, value]) => value !== undefined)
            .forEach(([key, value]) => {
                propertieDoc[key] = value;
            });
        await propertieDoc.save();
        const propertie = propertieDoc.toObject();
        return { propertie };
    }

    static async swapPosition(data) {
        let first = await this.findById(data[0]._id);
        let second = await this.findById(data[1]._id);

        first.position = data[0].position;
        second.position = data[1].position;

        first.markModified('position');
        second.markModified('position');
        await first.save();
        await second.save();

        return { first, second };
    }
}
mongoSchema.loadClass(PropertieClass);

const Propertie = mongoose.model('Propertie', mongoSchema);

module.exports = Propertie;