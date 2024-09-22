// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllerlogic/usercontroller');
const userMiddleware = require('../middleware/usermiddleware'); // Import user middleware

// Route for user signup
router.post('/signup', userMiddleware.validateSignUp, userController.signUp);

// Route for user login
router.post('/login', userMiddleware.validateLogin, userMiddleware.checkUserExists, userController.login);

module.exports = router;
