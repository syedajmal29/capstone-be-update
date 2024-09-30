const Interview = require('../models/interviewschema'); // Import the Interview model

// Controller to handle creating a new interview
const createInterview = async (req, res) => {
  try {
    const { jobTitle, date, format, studentId, companyId } = req.body;

    // Validate required fields
    if (!jobTitle || !date || !format || !studentId || !companyId) {
      return res.status(400).json({ message: 'All fields are required: jobTitle, date, format, studentId, companyId' });
    }

    // Create a new interview document
    const interview = new Interview({
      jobTitle,
      date,
      format,
      studentId,
      companyId,
    });

    // Save the interview to the database
    await interview.save();
    res.status(201).json({ message: 'Interview scheduled successfully', interview });
  } catch (error) {
    console.error('Error scheduling interview:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Controller to handle fetching all interviews
const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().populate('studentId', 'name').populate('companyId', 'name'); // Populate student and company details if necessary
    res.status(200).json(interviews);
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Controller to handle fetching a specific interview by ID
const getInterviewById = async (req, res) => {
  try {
    const interviewId = req.params.id;
    const interview = await Interview.findById(interviewId).populate('studentId', 'name').populate('companyId', 'name');
    
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json(interview);
  } catch (error) {
    console.error('Error fetching interview by ID:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Controller to handle updating an interview
const updateInterview = async (req, res) => {
  try {
    const interviewId = req.params.id;
    const { jobTitle, date, format } = req.body;

    // Find the interview by ID and update its details
    const updatedInterview = await Interview.findByIdAndUpdate(
      interviewId,
      { jobTitle, date, format },
      { new: true } // Return the updated document
    );

    if (!updatedInterview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json({ message: 'Interview updated successfully', updatedInterview });
  } catch (error) {
    console.error('Error updating interview:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Controller to handle deleting an interview
const deleteInterview = async (req, res) => {
  try {
    const interviewId = req.params.id;

    // Find the interview by ID and delete it
    const deletedInterview = await Interview.findByIdAndDelete(interviewId);

    if (!deletedInterview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json({ message: 'Interview deleted successfully' });
  } catch (error) {
    console.error('Error deleting interview:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = {
  createInterview,
  getInterviews,
  getInterviewById,
  updateInterview,
  deleteInterview,
};
