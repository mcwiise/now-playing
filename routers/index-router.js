const express = require("express");
const irouter = express.Router();
const service = require(".././service");

irouter.get("/", function (req, res) {
    res.redirect("/index");
});

irouter.get("/index", function (req, res) {
    service.getNowPlaying().then(response => {
        let results = [];
        response.statuses.forEach(status => {
            results.push({text: status.text, user: {name: status.user.name, account: status.user.screen_name}})
        });
        res.render("index", {tweets:results});
    }).catch(error => {
        console.log("error");
    });
});

irouter.post("/index/tweet", function (req, res) {
    let message = req.body.videourl + " " + req.body.comments;
    service.postTweet(message)
        .then(response => {
            res.redirect("/");
        }).catch(error => {
            console.log(error);
        });
});

module.exports = irouter;