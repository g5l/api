'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const db = require("./models");
const apiProduct = require("./api/product");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

apiProduct(app, db);

const port = process.env.PORT || 3000;
app.listen(port);

console.log('API server started on: ' + port);