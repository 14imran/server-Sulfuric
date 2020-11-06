const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Please add your details here
cloudinary.config({
  cloud_name: 'defifcvem',
  api_key: '434646166476621',
  api_secret: 'c3b8HfElX7SC5f6FUUIhjHZgVlw'
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'todo-gallery', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

module.exports = multer({ storage })