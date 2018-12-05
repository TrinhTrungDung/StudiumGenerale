const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./routes/index');

let port = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
