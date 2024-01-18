const express = require('express');
const router = express.Router();
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');

router.post('/register', registController.registUsers);
router.post('/login', loginController.loginUser);
router.post('/logout', logoutController.logoutUser);

module.exports = router;
