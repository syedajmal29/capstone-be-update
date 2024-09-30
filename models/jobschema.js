const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  
  
  
  
  
  jobTitle: { 
    type: String, 
    required: true 
  },
  
  jobDescription: { 
    type: String 
  },
  skillsRequired: { 
    type: Array, 
    required: true 
  },
  experienceRequired: { 
    type: Number,

  },
  salary: { 
    type: Number 
  },
  applicationDeadline: { 
    type: Date 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Job', jobSchema);
