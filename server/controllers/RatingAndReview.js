const RatingAndReviews = require("../models/RatingAndReviews");
const Course = require("../models/Course");
const mongoose = require("mongoose");


//Creating Rating and reviews
exports.createRating = async (req, res) => {
    try {
      const userId = req.user.id
      const { rating, review, courseId } = req.body
  
      // Check if the user is enrolled in the course
  
      const courseDetails = await Course.findOne({
        _id: courseId,
        studentEnrolled: { $elemMatch: { $eq: userId } },
      })
  
      if (!courseDetails) {
        return res.status(404).json({
          success: false,
          message: "Student is not enrolled in this course",
        })
      }
  
      // Check if the user has already reviewed the course
      const alreadyReviewed = await RatingAndReviews.findOne({
        user: userId,
        course: courseId,
      })
  
      if (alreadyReviewed) {
        return res.status(403).json({
          success: false,
          message: "Course already reviewed by user",
        })
      }
  
      // Create a new rating and review
      const ratingReview = await RatingAndReviews.create({
        rating,
        review,
        course: courseId,
        user: userId,
      })
  
      // Add the rating and review to the course
      await Course.findByIdAndUpdate(courseId, {
        $push: {
          ratingAndReviews: ratingReview,
        },
      })
      await courseDetails.save()
  
      return res.status(201).json({
        success: true,
        message: "Rating and review created successfully",
        ratingReview,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }

//getAverageRating
exports.getAverageRating = async (req, res) => {
    try{
         //get course ID
         const courseId = req.body.courseId;

         //calculate avg rating
         const result = await RatingAndReviews.aggregate([
            {
                $match: {
                    course: new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group: {
                    _id: null,
                    averageRating: {$avg: "$rating"},
                }
            }
         ]);

          //return rating
          if(result.length>0){
            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
            });
          }

          //if no rating/Review exist
          return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
          })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};


//getAllRatingAndReviews
exports.getAllRatingReview = async (req, res) => {
    try {
        const allReviews = await RatingAndReviews.find({}).sort({rating: "desc"})
                                                        .populate({
                                                            path: "user",
                                                            select: "firstName lastName email image",
                                                        })
                                                        .populate({
                                                            path: "course",
                                                            select: "courseName",
                                                        })
                                                        .exec();
        return res.status(200).json({
            success:true,
            message:"All reviews fetched successfully",
            data:allReviews,
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}