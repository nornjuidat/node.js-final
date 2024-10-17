const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

let points = [];
let visits = [];
