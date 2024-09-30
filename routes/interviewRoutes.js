const express = require('express');
const router = express.Router();
const { 
  createInterview, 
  getInterviews, 
  getInterviewById, 
  updateInterview, 
  deleteInterview 
} = require('../controllers/interviewController');

// POST: Create a new interview
router.post('/api/student/interviews', createInterview);

// GET: Fetch all interviews
router.get('/api/student/interviews', getInterviews);

// GET: Fetch a specific interview by ID
router.get('/api/student/interviews/:id', getInterviewById);

// PUT: Update a specific interview by ID
router.put('/api/student/interviews/:id', updateInterview);

// DELETE: Delete a specific interview by ID
router.delete('/api/student/interviews/:id', deleteInterview);

module.exports = router;
