'use strict'

const multer = require('multer');
const fs = require('fs')
require('dotenv').config();

const restrictedPath = ['default-picture.png']


const fileFilter = (req, file, cb) => {
    if (!file.fieldname || !req.user || !req.user.slug)
        return cb(null, false)
    return cb(null, true)
}
const unlinkFile = (filePath) => {
    const rootPath = `${process.env.ROOT_URL}/`;

    if (restrictedPath.find(e => filePath.includes(e)))
        return;
    if (!filePath)
        return;
    if (filePath.includes(rootPath))
        filePath = filePath.replace(rootPath, '');
    fs.unlinkSync(filePath);
}

module.exports = {
    upload: (folderName = '') => multer({ dest: `public/img/${folderName}`, fileFilter }),
    removeFiles: (files) => {
        if (!files)
            return;
        try {
            if (Array.isArray(files))
                return files.forEach(e => unlinkFile(e))

            unlinkFile(files);
        } catch (err) {
            throw err
        }
    },
    createImagePath: (e) => `${process.env.ROOT_URL}/${e}`
}