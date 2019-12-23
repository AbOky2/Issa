const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
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
    static async add({ picture, name, description, position, link }) {

        try {
            if (!picture || picture.length < 1)
                throw `Picture must be set`;

            const partnerDoc = await this.create({
                picture,
                name,
                description,
                position,
                link
            });

            const partner = partnerDoc.toObject();
            return { partner };
        } catch (error) {
            removeFiles(picture);
            throw error
        }
    }
    /**
     * Update a partner
     * @param {Object} options
     * @param {ObjectId} options.partnerId
     * @param {String} options.name
     * @param {String} options.contact
     * @param {String} options.picture
     * @param {String} options.description
     */
    static async updateById({ partnerId, ...updates }) {
        const partnerDoc = await this.findById(partnerId);
        if (!partnerDoc) {
            throw new Error(`${this.name} not found`);
        }
        Object.entries(updates)
            .filter(([_, value]) => value !== undefined)
            .forEach(([key, value]) => {
                partnerDoc[key] = value;
            });
        await partnerDoc.save();
        const partner = partnerDoc.toObject();
        return { partner };
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
mongoSchema.loadClass(PartnerClass);

const Partner = mongoose.model(modelName, mongoSchema);

module.exports = Partner;