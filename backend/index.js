const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');

app.use(cors());
app.use(express.json());


const run = async () => {
    await mongoose.connect(config.database, config.options);
    app.listen(port)
};

run().catch(e => {
    console.error(e)
});