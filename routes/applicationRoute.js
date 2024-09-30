const express = require("express");
const Application = require('../models/applicationSchema'); // Import the Application model
const multer = require('multer'); // Import multer for file handling
const path = require('path');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Store files in the "uploads" folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with date
    }
});
const upload = multer({ storage });

// POST route for creating a new application
router.post("/api/student/applications", upload.single('resume'), async (req, res) => {
    console.log(req.body); // Log the incoming request body

    try {
        // Destructure properties from the request body
        const {
            jobTitle,
            fullName,
            contactAddress,
            phoneNumber,
            emailAddress,
            dateOfBirth,
            highestEducation,
            schoolsAttended,
            majorFieldOfStudy,
            skills, // Expected as comma-separated string from the form
            
        } = req.body;

        // Validate required fields
        if (!jobTitle || !fullName || !contactAddress || !phoneNumber || !emailAddress || !dateOfBirth || !highestEducation || !schoolsAttended || !majorFieldOfStudy || !skills  || !req.file) {
            return res.status(400).json({ message: "All fields including resume upload are required." });
        }

        // Create a new application instance
        const application = new Application({
            jobTitle,
            fullName,
            contactAddress,
            phoneNumber,
            emailAddress,
            dateOfBirth,
            highestEducation,
            schoolsAttended,
            majorFieldOfStudy,
            skills: skills.split(","), // Convert comma-separated string to an array of skills
            
            resume: req.file.filename, // Save the resume file name
        });

        // Save the application to the database
        await application.save();
        res.status(201).json({ message: "Application submitted successfully", application });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// GET route for retrieving all applications
router.get("/api/student/applications_list", async (req, res) => {
    try {
        const applications = await Application.find({});
        res.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});



module.exports = router;
