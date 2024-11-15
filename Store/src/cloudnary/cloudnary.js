const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRIT_KEY
  });


module.exports = {cloudinary}
 