const express = require("express");
const app = express();
const irouter = require("./routers/index-router");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", irouter);

const server = app.listen(3000, function () {
    console.log("Welcome to now playing!: ", server.address().port);
});