const express = require('express');
const router = express.Router();
const Review = require('../models/reviews');


router.get('/reviews', async (req, res) => {
    let review = await Review.find();
    res.send(review);
});

router.post('/reviews', async (req, res) => {
    await Review.create(req.body);
    res.send("Review created");
});

router.get('/reviews/:username', async (req, res) => {
    let review = await Review.findOne({username: req.params.username});
    res.status(200).send(reviews);
});

router.patch('/reviews/:username', async (req, res) => {
    let result = await Review.findOne({username: req.params.username});
    if (result) {
        await Review.findOneAndUpdate({username: req.params.username}, req.body);
        res.status(200).send("Reviews Updated");
    } else {
        res.status(404).send("Reviews not found");
    }
});

router.delete('/reviews/:username', async (req, res) => {
    let result = await Review.findOne({username: req.params.username});
    if (result) {
        await Review.findOneAndDelete({username: req.params.username});
        res.status(200).send("Reviews Deleted");
    }
});

module.exports = router;