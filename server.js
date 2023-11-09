const host = "localhost"
const port = 2908;

const fs = require('fs')
const path = require("path")
const cors = require('cors');
const morgan = require('morgan')
const express = require("express"),
    app = express();

app.use(cors({
    origin: '*'
}));

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan("dev"))

app.use(express.json());

const router = require("./src/routes");

// ROUTERS
app.use("/api", router);

// static file serving
app.use(express.static(path.join(__dirname, 'public')));
//setting view engine to ejs
app.set("view engine", "ejs");

// ROUTERS FRONTEND
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/add", function (req, res) {
    res.render("add");
});
app.get("/edit", function (req, res) {
    res.render("edit");
});
app.use('/edit', (req, res) => {
    res.status(404);
    res.send('<h1>404 NOT FOUND</h1>');
});

// START
app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});