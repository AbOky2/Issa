class DBModel {
    /**
 * List a limited amount of Users
 * @param {Object} [where] - Filtering criterias
 * @param {Object} [options]
 * @param {Number} [options.offset] - Amount of Users to skip
 * @param {Number} [options.limit] - Amount of Users to return
 */
    static async list(where = {}, { offset = 0, limit = 10 } = {}) {
        const listStudents = await this.find(where)
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit)
            .select(this.publicFields())
            .lean();
        return { listStudents };
    }
    static async delete(_id) {
        try {

            (await this.deleteOne({ _id }));
            return (await this.list());
        } catch (error) {
            throw 'Error white delete'
        }

    }
}

module.exports = DBModel