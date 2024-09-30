const express = require('express');
const router = express.Router();
const StudentProfile = require('../models/student'); // Adjust the path as needed
// Authentication middleware if needed

// Middleware to authenticate requests


// Get student profile
router.get('/api/student/profile', async (req, res) => {
  try {
    const profile = await StudentProfile.find({});
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Create or update student profile
router.post('/api/student/profile', async (req, res) => {
  try {
    const { fullName, email, dob, percentage10th, percentage12th, collegeGPA, resume, academicRecords } = req.body;
    
    const newProfile = new StudentProfile({
      
      fullName,
      email,
      dob,
      percentage10th,
      percentage12th,
      collegeGPA,
      resume,
      academicRecords,
    });
    console.log(newProfile)
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile', error });
  }
});

// Update student profile
router.put('/api/student/profile', async (req, res) => {
  try {
    const profile = await StudentProfile.findOneAndUpdate(
      { userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: 'Error updating profile', error });
  }
});

module.exports = router;
