const express = require('express');
const { register, login } = require('../controllers/identity-controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// Add /refresh for token refresh

module.exports = router;