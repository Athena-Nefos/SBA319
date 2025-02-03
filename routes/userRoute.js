const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users);
});

router.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ message: "Validation error", error: error.message });
    }
    });

router.get('/users/:username', async (req, res) => {
    let users = await User.findOne({username: req.params.username});
    res.status(200).send(users);
});

router.patch('/users/:username', async (req, res) => {
    let result = await User.findOne({username: req.params.username});
    if (result) {
        await User.findOneAndUpdate({username: req.params.username}, req.body);
        res.status(200).send("User Updated");
    } else {
        res.status(404).send("User not found");
    }
});

router.delete('/users/:username', async (req, res) => {
    let result = await User.findOne({username: req.params.username});
    if (result) {
        await User.findOneAndDelete({username: req.params.username});
        res.status(200).send("User Deleted");
    }
});



module.exports = router;
