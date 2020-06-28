const express = require('express');
const cors = require('express');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParse: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Backend server is running on port: ${port}`);
});