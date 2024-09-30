const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
  
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  percentage10th: {
    type: Number,
    required: true,
  },
  percentage12th: {
    type: Number,
    required: true,
  },
  collegeGPA: {
    type: Number,
    required: true,
  },
  resume: {
    type: String, // Path to the stored file
  },
  academicRecords: {
    type: String, // Path to the stored file
  },
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
