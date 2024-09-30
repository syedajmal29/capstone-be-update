const express = require("express");
const Job = require('../models/jobschema'); // Correctly importing the job schema
const router = express.Router();

router.post("/api/jobs", async (req, res) => {
    console.log(req.body); // Log the incoming request body
    try {
        const joblist = req.body; // Destructure joblist from request body

        // Check if joblist exists
        if (!joblist) {
            return res.status(400).json({ message: "joblist is required." });
        }

        // Destructure properties from joblist
        const {
            jobTitle,
            jobDescription,
            skillsRequired,
            experienceRequired,
            salary,
            applicationDeadline,
        } = joblist;

        // Validate required fields
        if (!jobTitle || !skillsRequired) {
            return res.status(400).json({ message: "jobTitle and skillsRequired are required." });
        }

        // Create a new job instance
        const job = new Job({
            jobTitle,
            jobDescription,
            skillsRequired,
            experienceRequired,
            salary,
            applicationDeadline,
        });

        // Save the job to the database
        await job.save();
        res.status(201).json({ message: "Job added successfully", job });
    } catch (error) {
        console.error('Error saving job:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.get("/api/jobslist",async (req,res)=>{
    const joblist = await Job.find({});
    res.json(joblist)
})

module.exports = router;
