const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    username: {
    type: String,
    required: true,
    trim: true
    },
    cartoonTitle: {
    type: String,
    required: true,
    trim: true
    },
    rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
    },
    review: {
    type: String,
    required: true,
    trim: true
    },
    date: {
    type: Date,
        default: Date.now // Automatically sets to the current date/time when created
    }
},
{versionKey:false});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;