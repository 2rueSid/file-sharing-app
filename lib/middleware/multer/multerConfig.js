const path = require('path');
const multer = require('multer');

const limits = {
  fileSize: 51200000,
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../frontend/public/uploads'));
  },
  filename: (req, file, cb) => {
    const fileGeneratedName = `${Date.now()}_${file.originalname}`;
    req.fileGeneratedName = fileGeneratedName;
    cb(null, fileGeneratedName);
  },
});

module.exports = multer({ storage, limits });
