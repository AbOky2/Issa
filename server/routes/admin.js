const express = require('express');
const router = express.Router();

router.get('/', (async (req, res) => {
    res.send('Admin Api route');
}));

module.exports = router;