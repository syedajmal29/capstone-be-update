const express = require('express');
const router = express.Router();
const StudentProfile = require('../models/student');


router.get('/api/student/profile/:userId', async (req, res) => {
  try {
    console.log('User ID:', req.params.userId); // Log the userId to check if it's coming through correctly

    const profile = await StudentProfile.findOne({ userId: req.params.userId });

    if (!profile) {
      console.log('Profile not found for userId:', req.params.userId); // Log if the profile isn't found
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile', error });
  }
});


// Create student profile
router.post('/api/student/profile', async (req, res) => {
  try {
    const { userId, fullName, email, dob, percentage10th, percentage12th, collegeGPA, resume, academicRecords } = req.body;

    const existingProfile = await StudentProfile.findOne({ userId });

    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' });
    }

    const newProfile = new StudentProfile({
      userId,
      fullName,
      email,
      dob,
      percentage10th,
      percentage12th,
      collegeGPA,
      resume,
      academicRecords,
    });

    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile', error });
  }
});

// Update student profile
router.put('/api/student/profile', async (req, res) => {
  try {
    const { userId, fullName, email, dob, percentage10th, percentage12th, collegeGPA, resume, academicRecords } = req.body;

    // Check if profile exists
    const profile = await StudentProfile.findOneAndUpdate(
      { userId },
      { fullName, email, dob, percentage10th, percentage12th, collegeGPA, resume, academicRecords },
      { new: true, runValidators: true } // Return the updated document
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    console.error('error updating profile:', error);
    res.status(400).json({ message: 'Error updating profile', error });
  }
});

module.exports = router;
