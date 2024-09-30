const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure this is the correct path to your User model

// Authentication middleware to verify JWT
const authenticate = async (req, res, next) => {
  try {
    // Extract token from the Authorization header and remove 'Bearer ' prefix
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }

    // Verify the token using the secret stored in your environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure JWT_SECRET is set in your .env file
    
    // Find the user associated with the token
    const user = await User.findById(decoded._id);
    
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found.' });
    }

    // Attach the user to the request object for use in subsequent middleware or route handlers
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
  }
};

module.exports = authenticate;
