const express = require('express');
const places = require('./routes/places');

const app = express();

app.use('/places', places);

app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app;