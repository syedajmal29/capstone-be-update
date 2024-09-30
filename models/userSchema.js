const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'company', 'admin'], required: true },
    
    // For students
    resume: { type: String },
    academicRecords: {
        gpa: { type: Number },
        tenthPercentage: { type: Number },
        twelfthPercentage: { type: Number }
    },

    // For company
    companyName: { type: String },
    companyDetails: { type: String },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
