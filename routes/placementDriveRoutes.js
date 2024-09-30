const express = require('express');
const { 
  createPlacementDrive, 
  getPlacementDrives, 
  getPlacementDriveById 
} = require('../controllers/placementDriveController');

const router = express.Router();

// POST route for creating a new placement drive
router.post('/admin/placement-drives', createPlacementDrive);

// GET route for fetching all placement drives
router.get('/admin/placement-drives', getPlacementDrives);

// GET route for fetching a single placement drive by ID
router.get('/admin/placement-drives/:id', getPlacementDriveById);

module.exports = router;
