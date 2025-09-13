const express = require('express');
const app = express();
const { seedElements } = require('./utils');

// Serves Express Yourself website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  //console.log(req);
  res.send(expressions)
  //oppure
  res.json(expressions)
});

// export app for use in main.js and for testing
module.exports = { app };
