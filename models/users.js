const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [30, "Username cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [13, "User must be at least 13 years old"],
        max: [120, "Age cannot exceed 120"]
    },
    location: {
        type: String,
        trim: true
    },
    preferences: {
        type: [String],
        default: [],
        validate: {
        validator: function (arr) {
            return arr.every((item) => typeof item === "string");
        },
        message: "All preferences must be strings"
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    }
    });

userSchema.index({username: 1, email: 1}, {unique: true});

const User = mongoose.model('User', userSchema);

module.exports = User;