const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'publics/');
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname + '-' + Date.now())
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    
    if (mimetype && extname) {
        return cb(null, true);
      }


    cb('Error: File upload only supports the following filetypes - ' + filetypes);
}
// 5MB max file size
const limits = {
    fileSize: 1024 * 1024 * 5
};

const uploadHandler = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
});

module.exports = uploadHandler