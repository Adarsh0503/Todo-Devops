const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

// Define routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
