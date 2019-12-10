const express = require('express');
const { handleErrors, listCollection, authCheck } = require('../utils/express');
const router = express.Router();

router.get('/', authCheck, (async (req, res) => {
    res.send('User Api route');
}));

module.exports = router;