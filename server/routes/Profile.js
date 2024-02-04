// Import the required modules  
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    updateProfile,
    updateDisplayPicture,
    getAllUserDetails,
    getEnrolledCourses,
    deleteAccount,
    instructorDashboard,
} = require("../controllers/Profile");

const {auth, isInstructor} = require("../middlewares/auth");


// Routes for Login, Signup, and Authentication
//*****************************Profile  routes***************************************//

// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)

router.put("/updateProfile", auth, updateProfile)

router.get("/getUserDetails", auth, getAllUserDetails)

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)

router.put("/updateDisplayPicture", auth, updateDisplayPicture)

router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router;