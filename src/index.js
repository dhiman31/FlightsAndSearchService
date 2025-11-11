const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");

const setupAndStartServer = async () => {
  // create the express object
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.listen(PORT, async () => {
    console.log(`The Server started at port ${PORT}`);
  });
};

setupAndStartServer();
