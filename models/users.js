const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    u_id: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;