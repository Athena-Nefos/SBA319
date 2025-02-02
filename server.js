const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/users');
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');
const cartoonRoute = require('./routes/cartoonRoute');
const port = 3000;

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the SBA319");
});

app.use('/', userRoute);

app.use('/', reviewRoute);

app.use('/', cartoonRoute);




app.listen(port, () => {
    console.log('Server is listening on port 3000');
});


