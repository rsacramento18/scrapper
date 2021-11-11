const express = require('express');
const bodyParser = require('body-parser');

const app = express();
 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.port || '3030';

require('./prices.routes')(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
