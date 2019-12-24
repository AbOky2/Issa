const express = require('express');
const router = express.Router();
const { handleErrors, listCollection, deleteCollection, updateCollection } = require('../utils/express');
const { upload, createImagePath, removeFiles } = require('../utils/upload');
const Propertie = require('../models/Propertie')
const Partner = require('../models/Partner')
const User = require('../models/User')
const propertieSchema = require('../middleware/schema/propertie')
const partnerSchema = require('../middleware/schema/partner')
const userSchema = require('../middleware/schema/user')
const requestMiddleware = require('../middleware/request')

const queries = [{
    name: { singular: 'propertie', plural: 'properties' },
    model: Propertie,
    schema: propertieSchema.admin.propertie
},
{
    name: { singular: 'partner', plural: 'partners' },
    model: Partner,
    schema: partnerSchema.admin.partner
}]

router.get('/', handleErrors((req, res) => {
    res.send('Admin Api route');
}));

router.get('/users/:role?', requestMiddleware(userSchema.admin.user.listByRole, 'params'), handleErrors(async (req, res) => {
    const role = req.params.role ? { role: req.params.role } : {};
    const { list } = await User.list(role);
    res.json({ list });
}));

queries.forEach(({ name: { singular, plural }, model, schema }) => {
    router.get(`/${plural}`, listCollection(async ({ offset, limit }) => {
        let { list } = await model.list({ offset, limit });
        list.sort((a, b) => a.position - b.position);
        return { list }
    }));

    router.put(`/${plural}/swapPosition`, requestMiddleware(schema.swapPosition), handleErrors(async (req, res) => {
        const { first, second } = req.body;

        if (first._id == second._id || first.position == second.position)
            throw 'Values must be unique';
        const data = await model.swapPosition(Object.keys(req.body).map(e => req.body[e]));
        res.json(data)
    }));

    router.post(`/${singular}`, upload(plural).any('pictures'), requestMiddleware(schema.post), handleErrors(async (req, res) => {
        let newData = req.body;
        const files = req.files || [];
        const filesPath = files.map(e => createImagePath(e.path));

        delete newData.pictures;

        newData.picture = filesPath;

        const data = await model.add(newData)
        res.json(data);
    }));

    router.put(`/${singular}/:id`, updateCollection(requestMiddleware(schema.update),
        async ({ id, data }) => await model.update(id, data))
    );

    router.delete(`/${singular}/:id`, deleteCollection(async ({ id }) => {
        const elem = await Partner.get(id);
        removeFiles(elem.picture);

        await model.delete(id);
    }));
})




module.exports = router;