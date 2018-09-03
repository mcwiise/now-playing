var express = require("express");
var app = express();
var router = require("./router");

router(app);

var server = app.listen(3000, function () {
    console.log("Welcome to now playing!: ", server.address().port);
});