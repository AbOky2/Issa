const express = require('express');
const router = express.Router();
const { listCollection } = require('../utils/express');
const { invalidToken } = require('../utils/message')
const Zone = require('../models/Zone')
const { sendMail } = require('../services/mail')


// User
router.get('/currentUser', ({ user }, res) => {
    if (!user)
        return res.status(401).json({ success: false, message: invalidToken });

    res.json({ user });
});


// Zone
router.get('/sendMail', async (req, res) => {
    try {
        const msg = await sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "nesafin663@clsn.top, rarob48539@mailon.ws", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        })
        res.json({ sucess: 'sucess', msg })
    } catch (err) {
        console.log('err', err)
        res.send(err)
    }

});


// Zone
router.get('/agency-zone', listCollection(async ({ offset, limit }) => {
    let { list } = await Zone.list({ offset, limit });
    list.sort((a, b) => a.position - b.position);
    return { list }
}));


module.exports = router;