const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  format: {
    type: String,
    enum: ['Virtual', 'In-Person'], // Limiting the format to specific values
    required: true,
  },
  // Optionally, you can include references to other models, like student or company
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
