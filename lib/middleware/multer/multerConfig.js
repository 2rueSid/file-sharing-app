const path = require('path');
const multer = require('multer');

const limits = {
  fileSize: 51200000,
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

module.exports = multer({ storage, limits });
