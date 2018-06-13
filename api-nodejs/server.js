const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose')

app.use('/api', require('./routes/api'))
app.use(bodyParse.json())

app.listen(3001);
console.log("API is working on post 3001");