const express = require("express");
const irouter = express.Router();
const facade = require(".././facade");
const Promise = require("bluebird");

irouter.get("/", function (req, res) {
    res.redirect("/index");
});

irouter.get("/index", function (req, res) {
    facade.retrieveNowPlayingTweets().then(response => {
        return Promise.all(facade.retrieveTweetsWithUser(response.statuses));
    }).then(resolves => {
        res.render("index", { tweets: resolves });
    }).catch(error => {
        console.log("error");
    });
});

irouter.post("/index/tweet", function (req, res) {
    let message = req.body.videourl + " " + req.body.comments;
    facade.createTweet(message)
        .then(response => {
            res.redirect("/");
        }).catch(error => {
            console.log(error);
        });
});

module.exports = irouter;