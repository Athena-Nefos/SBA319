const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users);
});

router.post('/users', async (req, res) => {
    // let result = await User.findOne().sort({u_id: -1});
    // req.body.u_id = result.u_id + 1;
    await User.create(req.body);
    res.send("User created");
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
