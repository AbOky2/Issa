const express = require('express');
const router = express.Router();
const { listCollection } = require('../utils/express');
const { invalidToken } = require('../utils/message')
const Zone = require('../models/Zone')

// User
router.get('/currentUser', ({ user }, res) => {
    if (!user)
        return res.status(401).json({ success: false, message: invalidToken });

    res.json({ user });
});


// Zone
router.get('/agency-zone', listCollection(async ({ offset, limit }) => {
    let { list } = await Zone.list({ offset, limit });
    list.sort((a, b) => a.position - b.position);
    return { list }
}));


module.exports = router;