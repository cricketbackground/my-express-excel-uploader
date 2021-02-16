var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/data/uploads/' })
const readXlsxFile = require('read-excel-file/node');
var fs = require('fs');

// The uploading will be completed once the middleware returns, i.e. once this route is hit.
router.post('/', upload.single('orders_request'), function (req, res) {
    // req.file is the name of your file in the form above, here 'orders_request'
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body);

    // Read excel file as a readable stream.
    // https://www.npmjs.com/package/read-excel-file
    readXlsxFile(fs.createReadStream(req.file.path)).then((rows) => {
        // `rows` is an array of rows
        console.log(rows);
    }).catch(reason => {
        console.error("Reading XSLX File Failed", reason)
    });

    //
    return res.status(200).json({
        message: 'file submitted successfully',
        fieldName: req.file.fieldname,
        originalName: req.file.originalName,
        mimeType: req.file.mimeType,
        destination: req.file.destination,
        fileName: req.file.fileName,
        path: req.file.path,
        size: req.file.size
    });

});

module.exports = router;
