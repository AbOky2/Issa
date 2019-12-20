const express = require('express');
const router = express.Router();
const { handleErrors, listCollection, deleteCollection, updateCollection } = require('../utils/express');
const { upload, createImagePath } = require('../utils/upload');
const Propertie = require('../models/Propertie')
const User = require('../models/User')
const propertieSchema = require('../middleware/schema/propertie')
const userSchema = require('../middleware/schema/user')
const requestMiddleware = require('../middleware/request')

router.get('/', handleErrors((req, res) => {
    res.send('Admin Api route');
}));

router.get('/users/:role?', requestMiddleware(userSchema.admin.user.listByRole, 'params'), handleErrors(async (req, res) => {
    const role = req.params.role ? { role: req.params.role } : {};
    const { list } = await User.list(role);
    res.json({ list });
}));

router.put('/properties/swapPosition',
    requestMiddleware(propertieSchema.admin.propertie.swapPosition),
    handleErrors(async (req, res) => {
        const { first, second } = req.body;

        if (first._id == second._id || first.position == second.position)
            throw 'Values must be unique';
        const data = await Propertie.swapPosition(Object.keys(req.body).map(e => req.body[e]));
        res.json(data)
    }));

router.get('/properties', listCollection(async ({ offset, limit }) => {
    let { list } = await Propertie.list({ offset, limit });
    list.sort((a, b) => a.position - b.position);
    return { list }
}));

router.post('/propertie', upload('properties').any('pictures'), requestMiddleware(propertieSchema.admin.propertie.post), handleErrors(async (req, res) => {
    let newData = req.body;
    let filesPath = req.files.map(e => createImagePath(e.path));

    delete newData.pictures;

    newData.picture = filesPath;

    const propertie = await Propertie.add(newData)
    res.json(propertie);
}));

router.put('/propertie/:id', updateCollection(requestMiddleware(propertieSchema.admin.propertie.update),
    async ({ id, data }) => await Propertie.update(id, data))
);

router.delete('/propertie/:id', deleteCollection(async ({ id }) => await Propertie.delete(id)));


module.exports = router;