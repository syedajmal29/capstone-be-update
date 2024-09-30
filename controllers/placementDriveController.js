const PlacementDrive = require('../models/placementDriveSchema');

// Create a new placement drive
const createPlacementDrive = async (req, res) => {
  try {
    const driveData = req.body;

    const placementDrive = new PlacementDrive(driveData);
    await placementDrive.save();
    res.status(201).json({ message: "Placement drive created successfully", placementDrive });
  } catch (error) {
    console.error('Error creating placement drive:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get all placement drives
const getPlacementDrives = async (req, res) => {
  try {
    const placementDrives = await PlacementDrive.find({});
    res.status(200).json(placementDrives);
  } catch (error) {
    console.error('Error fetching placement drives:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get a single placement drive by ID
const getPlacementDriveById = async (req, res) => {
  try {
    const driveId = req.params.id;
    const placementDrive = await PlacementDrive.findById(driveId);

    if (!placementDrive) {
      return res.status(404).json({ message: 'Placement drive not found' });
    }

    res.status(200).json(placementDrive);
  } catch (error) {
    console.error('Error fetching placement drive by ID:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  createPlacementDrive,
  getPlacementDrives,
  getPlacementDriveById,
};
