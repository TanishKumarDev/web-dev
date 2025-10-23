const User = require('../models/User');
const RefreshToken = require('../models/RefreshToken');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
const { registerSchema } = require('../utils/validation');
const logger = require('../utils/logger');

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User exists' });

    user = new User({ username, password });
    await user.save();

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const refreshDoc = new RefreshToken({ token: refreshToken, userId: user._id, expires: new Date(Date.now() + 7*24*60*60*1000) });
    await refreshDoc.save();

    res.json({ accessToken, refreshToken });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const login = async (req, res) => {
  // Similar to register, but find user and comparePassword
  // Generate tokens if valid
};

module.exports = { register, login /* add refresh endpoint */ };