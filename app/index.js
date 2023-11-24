const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const fs = require('fs')
const path = require("path")
const cors = require('cors');
const controller = require("./controllers");

const app = express();

app.use(cors({
    origin: '*'
}));

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan("dev"))

/** Install JSON request parser */
app.use(express.json());

app.use(controller.api.main.onParseError)
app.use(controller.api.main.onError)

/** Install Router */
app.use(router);

module.exports = app;
