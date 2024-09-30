const express = require('express');
const { getProfile, updateProfile } = require('../controllers/studentController');
const router = express.Router();

// Middleware to authenticate the user and attach user ID to req
const authenticateUser = (req, res, next) => {
  // Implement your authentication logic here
  req.user = { id: 'studentId' }; // Replace with actual user ID from authentication
  next();
};

// Apply the authentication middleware
router.use(authenticateUser);

// Get student profile
router.get('/profile', getProfile);

// Update student profile
router.post('/profile', updateProfile);

module.exports = router;
