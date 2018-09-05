var service = require("./service");
var Promise = require("bluebird");
const nowplaying = "#nowplaying";

exports.createTweet = function (message) {
    return new Promise(function (resolve, reject) {
        service.postTweet(message + " " + nowplaying, function (tweet, error) {
            if (error) {
                reject(error);
            } else {
                resolve(tweet);
            }
        });
    });
}

exports.retrieveNowPlayingTweets = function () {
    return new Promise(function (resolve, reject) {
        service.getByHashtag(nowplaying, function (tweets, error) {
            if (error) {
                reject(error);
            } else {
                resolve(tweets);
            }
        });
    });
}

exports.retrieveTweetsWithUser = function (statuses) {
    let promises = [];
    statuses.forEach(status => {
        let promise = new Promise(function(resolve, reject){
            service.getUserByScreenName(status.user.screen_name, function(user, error){
                if (error) {
                    reject(error);
                } else {
                    let tweet = { 
                        text: status.text, 
                        user: { 
                            name: user.name, 
                            account: user.screen_name,
                            iprofile: user.profile_image_url
                        }
                    };
                    resolve(tweet);
                }
            });
        });
        promises.push(promise);
    });
    return promises;
}