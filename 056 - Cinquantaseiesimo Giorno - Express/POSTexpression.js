const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res) => {
  const objectToCreate = createElement('expressions', req.query);
  if (objectToCreate) {
    res.status(201);
    expressions.push(objectToCreate);
  } else {
    res.status(400);
  }
  res.send(objectToCreate)
})



// export app for use in main.js and for testing
module.exports = { app };
