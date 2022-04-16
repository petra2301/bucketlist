
const pool = require('./db');
const express = require('express');


const app = express();

app.get('/norwayplaces', (request, response) => {
    pool.query('SELECT * FROM public.norwayplaces ORDER BY name ASC', (err, res) => {
        if (err) return console.log(err);
        response.json(res.rows);
    });
});

module.exports = app;