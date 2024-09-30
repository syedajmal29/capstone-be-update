const express = require('express');
const { 
  createRecruitmentStatus, 
  getRecruitmentStatuses, 
  getRecruitmentStatusById 
} = require('../controllers/recruitmentStatusController');

const router = express.Router();

// POST route for creating a new recruitment status entry
router.post('/admin/recruitment-status', createRecruitmentStatus);

// GET route for fetching all recruitment statuses
router.get('/admin/recruitment-status', getRecruitmentStatuses);

// GET route for fetching a specific recruitment status by ID
router.get('/admin/recruitment-status/:id', getRecruitmentStatusById);

module.exports = router;
