var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/data/uploads/' })

// The uploading will be completed once the middleware returns, i.e. once this route is hit.
router.post('/', upload.single('orders_request'), function (req, res) {
    // req.file is the name of your file in the form above, here 'orders_request'
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body);
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
