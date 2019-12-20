'use strict'

const multer = require('multer');
const fs = require('fs')
require('dotenv').config();

const fileFilter = (req, file, cb) => {
    if (!file.fieldname || !req.user || !req.user.slug)
        return cb(null, false)
    return cb(null, true)
}
const unlinkFile = (filePath) => {
    const rootPath = `${process.env.ROOT_URL}/`;
    if (!filePath)
        return;
    if (filePath.includes(rootPath))
        filePath = filePath.replace(rootPath, '');
    fs.unlinkSync(filePath);
}

module.exports = {
    upload: (folderName = '') => multer({ dest: `public/img/${folderName}`, fileFilter }),
    removeFiles: (files) => {
        try {
            if (Array.isArray(files))
                return files.map(e => unlinkFile(e))

            unlinkFile(files);
        } catch (err) {
            // handle the error
            console.log(err)
        }
    },
    createImagePath: (e) => `${process.env.ROOT_URL}/${e}`
}