const mongoose = require('mongoose');
const DBModel = require('./index')
const { Schema } = mongoose;
const modelName = 'Zone';
const AgencySchema = require('./Agency')

const mongoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    agencies: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Agency' }],
        // required: true,
    }
});

class ZoneClass extends DBModel {
    static name = modelName;

    static async addAgency(id, agencyId) {
        try {
            if (!id || !agencyId)
                throw 'Error';

            const elementDoc = await this.findById(id);
            elementDoc.agencies.push(agencyId);
            elementDoc.save();
            return (this.list());
        } catch (error) {
            throw 'Error white updating'
        }
    }

    static async list(where = {}, { offset = 0, limit = 10 } = {}) {
        try {
            const list = await this.find(where)
                .sort({ createdAt: -1 })
                .skip(offset)
                .limit(limit)
                .select(this.publicFields())
                .populate('agencies')
                .lean();
            return { list };
        } catch (error) {
            throw 'Error retrieving list'
        }
    }
    static async delete(_id) {
        try {
            const elementDoc = await this.findById(_id);
            elementDoc.agencies.forEach(_id => {
                AgencySchema.delete(_id);
            });
            (await this.deleteOne({ _id }));
            return (await this.list());
        } catch (error) {
            throw 'Error white delete'
        }
    }
}
mongoSchema.pre('remove', function (next) {
    console.log(this)
    next();
});
mongoSchema.loadClass(ZoneClass);

const Zone = mongoose.model(modelName, mongoSchema);

module.exports = Zone;