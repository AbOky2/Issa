const express = require('express');
const { listCollection, handleErrors } = require('../utils/express');
const router = express.Router();
const Zone = require('../models/Zone');
const User = require('../models/User');
const sameQueries = require('./utils')


// Zone
router.get('/agency-zone', handleErrors(async ({ user }, res) => {
    const { list } = await User.getUserZones(user._id);
    res.json({ list: list.zones });
}));

sameQueries.forEach(({ name: { plural }, model }) => {
    router.get(`/${plural}`, listCollection(async ({ offset, limit }) => {
        let { list } = await model.list({ offset, limit });
        list.sort((a, b) => a.position - b.position);
        return { list }
    }));
})
module.exports = router;