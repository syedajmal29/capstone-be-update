const express = require("express");
const Job = require('../models/jobschema'); // Correctly importing the job schema
const router = express.Router();



router.post("/api/jobs",  async (req,res)=>{
   try {
        // Destructure passengers and flightDetails from the request body
        const { joblist } = req.body;
console.log(joblist)
        // Create a new booking instance with userId, passengers, and flightDetails
        const job = new Job({
          company: req.user._id, // Use the authenticated company's ID
          jobTitle, // Ensure this matches the schema
          jobDescription, // Ensure this matches the schema
          skillsRequired: skillsRequired.split(','), // Split skills into an array of strings
          experienceRequired,
          salary,
          applicationDeadline,
        });
        
       
       
       

        // Save the booking to the database
        await job.save();
        res.status(201).json({ message: "User booking added successfully", booking });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }})

module.exports = router;























// // Create a new job
// exports.createJob = async (req, res) => {
//   try {
//     // Ensure that the user is authenticated and that req.user is set
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: 'Unauthorized: No user logged in.' });
//     }

//     const { jobTitle, jobDescription, skillsRequired, experienceRequired, salary, applicationDeadline } = req.body;

//     // Validate incoming data
//     if (!jobTitle || !jobDescription || !skillsRequired || !applicationDeadline) {
//       return res.status(400).json({ message: 'All fields are required: jobTitle, jobDescription, skillsRequired, applicationDeadline.' });
//     }

//     // Automatically associate the job with the authenticated company
//     const job = new Job({
//       jobTitle,
//       description: jobDescription, // Ensure you're using the correct field name from the schema
//       skillsRequired: skillsRequired.split(','), // Assuming skills are sent as a comma-separated string
//       experienceRequired,
//       salary,
//       applicationDeadline,
//       company: req.user._id, // Use the authenticated company's ID
//     });

//     await job.save();
//     res.status(201).json({ message: 'Job created successfully!', job });
//   } catch (error) {
//     console.error('Error creating job:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Error creating job', error });
//   }
// };

// // Get all jobs
// exports.getAllJobs = async (req, res) => {
//   try {
//     // Retrieve all jobs and optionally populate the company details
//     const jobs = await Job.find()
//       .populate('company', 'name email') // Adjust fields based on your Company schema
//       .exec(); // Use exec() for clarity and to avoid any potential issues

//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error('Error retrieving jobs:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Error retrieving jobs', error });
//   }
// };
