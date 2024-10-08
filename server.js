const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoute = require('./routes/applicationRoute');
const placementDriveRoutes = require('./routes/placementDriveRoutes'); // Import placement drive routes
const recruitmentStatusRoutes = require('./routes/recruitmentStatusRoutes'); // Import recruitment status routes
// const studentRoutes = require('./routes/studentRoutes'); // Import student routes
const studentcontrol = require("./controllers/studentController");
const adminstudentapplication = require("./routes/admin");

require('dotenv').config(); 

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// MongoDB Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

// Define your routes
app.use('/api/users', userRoutes);
app.use('/', jobRoutes); // Updated to '/api/jobs' for clarity
app.use('/', applicationRoute); // Updated to '/api/applications' for clarity
app.use('/api/placement-drives', placementDriveRoutes); // Added placement drive routes
app.use('/api/recruitment-status', recruitmentStatusRoutes); // Added recruitment status routes
app.use("/",adminstudentapplication)

// app.use('/api/students', studentRoutes); // Add student routes
app.use("/",studentcontrol)
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
