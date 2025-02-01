const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/users');
const port = 3000;

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the SBA319");
});

app.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users);
});

app.post('/users', async (req, res) => {
    let result = await User.findOne().sort({u_id: -1});
    req.body.u_id = result.u_id + 1;
    await User.create(req.body);
    res.send("User created");
});


app.listen(port, () => {
    console.log('Server is listening on port 3000');
});


