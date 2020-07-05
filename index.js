const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
// define port
const port = process.env.PORT || 3001;
// use logger
app.use(logger('dev'));
// use cors
app.use(cors());
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// listen to defined port
app.listen(port, function() {
    console.log("Runnning on " + port);
  });
// export app module
module.exports = app;
