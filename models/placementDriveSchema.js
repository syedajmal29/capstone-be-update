const mongoose = require('mongoose');

const placementDriveSchema = new mongoose.Schema({
  driveName: { type: String, required: true },
  companyName: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  positionsAvailable: { type: Number, required: true },
  eligibilityCriteria: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('PlacementDrive', placementDriveSchema);
