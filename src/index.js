const express = require('express');
const bodyParser = require("body-parser");

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

const {PORT} = require('./config/ServerConfig');

const setupAndStartServer = async() => {

    // create the express object
    const app = express();
    // const PORT = 3000;
    app.listen(PORT, ()=>{
        console.log(`The Server started at port ${PORT}`);
    })
};

setupAndStartServer();