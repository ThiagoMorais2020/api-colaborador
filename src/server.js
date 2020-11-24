const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
require('./database');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,PATH,POST,DELETE');
  app.use(cors());
  app.use(routes);
  next();
});

app.use(express.json());


app.listen(3000);
