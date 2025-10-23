const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadFile(file) {
  const result = await cloudinary.uploader.upload(file.path);
  return result.secure_url;
}

module.exports = { uploadFile };