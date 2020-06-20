import multer from 'multer';
import cloudinaryStorage from 'multer-storage-cloudinary'

import cloudinaryConfig from '../config/cloudinary.config'

const storage = cloudinaryStorage({
    cloudinary: cloudinaryConfig,
    folder: 'illeryPics',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 960, height: 960, crop: 'limit' }]
});

const cloudStorage = multer({ storage: storage });


export default cloudStorage
