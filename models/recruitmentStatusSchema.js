const mongoose = require('mongoose');

const recruitmentStatusSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicationStatus: { 
    type: String, 
    enum: ['Applied', 'Shortlisted', 'Interview Scheduled', 'Hired', 'Rejected'], 
    default: 'Applied' 
  },
  interviewDate: { type: Date },
  hiredDate: { type: Date },
  rejectionReason: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('RecruitmentStatus', recruitmentStatusSchema);
