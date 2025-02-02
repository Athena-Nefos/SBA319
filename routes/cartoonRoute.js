const express = require('express');
const router = express.Router();
const Cartoon = require('../models/cartoon');


router.get('/cartoon', async (req, res) => {
    let cartoon = await Cartoon.find();
    res.send(cartoon);
});

router.post('/cartoon', async (req, res) => {
    await Cartoon.create(req.body);
    res.send("Cartoon index created");
});

router.get('/cartoon/:title', async (req, res) => {
    let cartoon = await Cartoon.findOne({title: req.params.title});
    res.status(200).send(cartoon);
});

router.patch('/cartoon/:title', async (req, res) => {
    let result = await Cartoon.findOne({title: req.params.title});
    if (result) {
        await Cartoon.findOneAndUpdate({title: req.params.title}, req.body);
        res.status(200).send("Cartoon Updated");
    } else {
        res.status(404).send("Cartoon not found");
    }
});

router.delete('/cartoon/:title', async (req, res) => {
    let result = await Cartoon.findOne({title: req.params.title});
    if (result) {
        await Cartoon.findOneAndDelete({title: req.params.title});
        res.status(200).send("Cartoon Deleted");
    }
});

module.exports = router;