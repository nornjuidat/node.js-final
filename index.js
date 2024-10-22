const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

let points = [];
let visits = [];

app.post('/points', (req, res) => {
    let point = { name: req.body.name };
    points.push(point);
    res.status(200).json(point);
});

app.get('/points', (req, res) => {
    res.status(200).json(points);
});

app.put('/points/:id', (req, res) => {
    let idx = req.params.id;
    points[idx].name = req.body.name;
    res.status(200).json(points[idx]);
});

app.delete('/points/:id', (req, res) => {
    let idx = req.params.id;
    points.splice(idx, 1);
    res.status(200).json("Point deleted");
});

app.post('/visits', (req, res) => {
    let visit = {
        pointId: req.body.pointId,
        timestamp: new Date().toISOString()
    };
    visits.push(visit);
    res.status(200).json(visit);
});
