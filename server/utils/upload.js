'use strict'

const multer = require('multer');
const fs = require('fs')

const fileFilter = (req, file, cb) => {
    if (!file.fieldname || !req.user || !req.user.slug)
        return cb(null, false)
    return cb(null, true)
}


module.exports = {
    upload: (folderName = '') => multer({ dest: `uploads/${folderName}`, fileFilter }),
    removeFiles: (files) => {
        try {
            if (Array.isArray(files))
                return files.map(e => fs.unlinkSync(e))

            fs.unlinkSync(files);
        } catch (err) {
            // handle the error
            console.log(err)
        }
    }
}