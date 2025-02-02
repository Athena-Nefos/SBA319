const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true,
      min: 13 // Ensures users are at least 13 years old
    },
    location: {
        type: String,
        required: false,
        default: "Location not Provided"
    },
    preferences: {
        type: [String], // Array of preferences (e.g., ["coding", "anime", "business"])
        default: []
        },
    joinedDate: {
        type: Date,
      default: Date.now // Automatically set to current date/time on creation
    }
    },
{
    versionKey: false
});

userSchema.index({username: 1, email: 1}, {unique: true});

const User = mongoose.model('User', userSchema);

module.exports = User;