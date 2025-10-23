const multer = require('multer');
const { uploadFile } = require('../utils/cloudinary');
const Media = require('../models/Media');
const logger = require('../utils/logger');

const upload = multer({ dest: 'uploads/' });

const uploadMedia = async (req, res) => {
  try {
    const url = await uploadFile(req.file);
    const media = new Media({ url, postId: req.body.postId, type: req.file.mimetype.split('/')[0] });
    await media.save();
    res.json({ url });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ msg: 'Upload failed' });
  }
};

module.exports = { uploadMedia, upload };