// routes/authroutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllerlogic/authcontroller');
const { validateLogin } = require('../middleware/usermiddleware');

// Sign-up route
router.post('/signup', authController.signup);

// Login route
router.post('/login', validateLogin, authController.login);

module.exports = router;
