const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


const mongoSchema = new Schema({
    picture: {
        type: String,
        // required: true,
    },
    name: {
        type: String,
        required: true,
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
        unique: true
    },
});

class PropertieClass extends DBModel {
    static async list({ offset = 0, limit = 10 } = {}) {
        console.log(offset, limit)
        const Properties = await this.find({})
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit);
        return { Properties };
    }

    /**
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.color
     */
    static async add({
        picture,
        name,
        description,
        dimension,
        address,
        nb_available,
        position,

    }) {
        const propertieDoc = await this.create({
            picture,
            name,
            description,
            dimension,
            address,
            nb_available,
            position
        });

        const propertie = propertieDoc.toObject();
        return { propertie };
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
}
mongoSchema.loadClass(PropertieClass);

const Propertie = mongoose.model('Propertie', mongoSchema);

module.exports = Propertie;