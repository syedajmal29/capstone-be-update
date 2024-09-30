const RecruitmentStatus = require('../models/recruitmentStatusSchema');

// Create a new recruitment status entry
const createRecruitmentStatus = async (req, res) => {
  try {
    const statusData = req.body;

    const recruitmentStatus = new RecruitmentStatus(statusData);
    await recruitmentStatus.save();
    res.status(201).json({ message: "Recruitment status created successfully", recruitmentStatus });
  } catch (error) {
    console.error('Error creating recruitment status:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get all recruitment statuses
const getRecruitmentStatuses = async (req, res) => {
  try {
    const recruitmentStatuses = await RecruitmentStatus.find({})
      .populate('studentId', 'name')
      .populate('jobId', 'jobTitle');
    res.status(200).json(recruitmentStatuses);
  } catch (error) {
    console.error('Error fetching recruitment statuses:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get recruitment status by ID
const getRecruitmentStatusById = async (req, res) => {
  try {
    const statusId = req.params.id;
    const recruitmentStatus = await RecruitmentStatus.findById(statusId)
      .populate('studentId', 'name')
      .populate('jobId', 'jobTitle');

    if (!recruitmentStatus) {
      return res.status(404).json({ message: 'Recruitment status not found' });
    }

    res.status(200).json(recruitmentStatus);
  } catch (error) {
    console.error('Error fetching recruitment status by ID:', error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  createRecruitmentStatus,
  getRecruitmentStatuses,
  getRecruitmentStatusById,
};
