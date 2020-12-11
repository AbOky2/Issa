const express = require('express');
const { listCollection, profileCollection, handleErrors } = require('../utils/express');
const requestMiddleware = require('../middleware/request');
const User = require('../models/User');
const sameQueries = require('./utils')
const { jwtTokenize } = require('../utils/jwt')
const { upload, removeFiles, createImagePath } = require('../utils/upload');

const userSchema = require('../middleware/schema/user')
const router = express.Router();


// Zone
router.get('/agency-zone', handleErrors(async ({ user }, res) => {
    const { list } = await User.getUserZones(user._id);
    res.json({ list: list.zones });
}));

router.put('/user', upload('users').any('picture'), profileCollection(requestMiddleware(userSchema.all.user.update),
    async ({ user, body, files } = {}) => {
        const file = files[0];

        if (file) {
            removeFiles(user.picture);
            body.picture = createImagePath(file.path)
        }

        const { element } = await User.updateById(user._id, body)
        const token = jwtTokenize(element);

        return { user: element, token }
    })
);

sameQueries.forEach(({ name: { plural }, model }) => {
    router.get(`/${plural}`, listCollection(async ({ offset, limit }) => {
        let { list } = await model.list({ offset, limit });
        list.sort((a, b) => a.position - b.position);
        return { list }
    }));
})
module.exports = router;