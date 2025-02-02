const mongoose = require("mongoose");

const cartoonSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    unique: true,
    trim: true
    },
    genre: {
    type: [String], // Array to hold multiple genres (e.g., ["Action", "Comedy", "Fantasy"])
    required: true
    },
    creator: {
    type: String,
    required: true,
    trim: true
    },
    releaseYear: {
    type: Number,
    required: false,
    min: 1900 // Ensures a valid release year
    },
    episodes: {
    type: Number,
    required: true,
    min: 1
    },
        description: {
    type: String,
    required: false,
    trim: true
    },
    rating: {
    type: Number,
    min: 0,
    max: 10,
    default: null // Can be null if there are no ratings yet
    },
    imageUrl: {
    type: String,
    required: false // Optional: Stores an image URL of the cartoon/anime
    },
    isOngoing: {
    type: Boolean,
    default: false // True if still airing, false if completed
    }
},
{
    versionKey: false
});

const Cartoon = mongoose.model("Cartoon", cartoonSchema);

module.exports = Cartoon;