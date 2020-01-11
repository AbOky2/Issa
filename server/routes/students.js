const express = require('express');
const { listCollection } = require('../utils/express');
const router = express.Router();
const sameQueries = require('./utils')


sameQueries.forEach(({ name: { plural }, model }) => {
    router.get(`/${plural}`, listCollection(async ({ offset, limit }) => {
        let { list } = await model.list({ offset, limit });
        list.sort((a, b) => a.position - b.position);
        return { list }
    }));
})
module.exports = router;