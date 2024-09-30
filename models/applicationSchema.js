const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  contactAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  highestEducation: {
    type: String,
    required: true,
  },
  schoolsAttended: {
    type: String,
    required: true,
  },
  majorFieldOfStudy: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], // Array of strings for skills
    required: true,
  },
  status:{
    type: String,
  },
  resume: {
    type: String, // Path to uploaded resume file
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now, // Automatically add application date
  },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
