const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.port || '3030';

require('./prices.routes')(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
