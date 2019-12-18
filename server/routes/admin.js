const express = require('express');
const router = express.Router();
const { handleErrors, listCollection, deleteCollection } = require('../utils/express');
const { upload, removeFiles } = require('../utils/upload');
const Propertie = require('../models/Propertie')
const propertieSchema = require('../middleware/schema/propertie')
const requestMiddleware = require('../middleware/request')
router.get('/', handleErrors((req, res) => {

    res.send('Admin Api route');
}));

router.get('/properties', listCollection(async ({ offset, limit }) => {
    const properties = await Propertie.list({ offset, limit })
    return properties
}));

router.post('/properties', requestMiddleware(propertieSchema.admin.propertie.post), upload('properties').any('pictures'), handleErrors(async (req, res) => {
    let newData = req.body;

    delete newData.pictures;

    if (req.files)
        newData.pictures = req.files.map(e => e.path);


    const propertie = await Propertie.add(newData)
    res.json(propertie);
}));

router.delete('/propertie/:id', deleteCollection(async ({ id }) => {
    // console.log('(' + id + ')');
    const list = await Propertie.delete(id);
    console.log(list)
    // const properties = await Propertie.list({ offset, limit })
    return
}));


module.exports = router;