const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/norwayplaces', (request, response, next) => {
    pool.query('SELECT * FROM public.norwayplaces ORDER BY name ASC', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports = router;