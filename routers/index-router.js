var express = require("express");
var irouter = express.Router();

irouter.get("/", function (req, res) {
    res.redirect("/index");
});

irouter.get("/index", function (req, res) {
    res.render("index");
});

irouter.post("/index/tweet", function (req, res) {
    console.log(req.body);
    res.render("index");
});

module.exports = irouter;