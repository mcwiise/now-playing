const config = require("./config");
const Twitter = require("twitter");

let client = new Twitter({
    consumer_key: config.ENV.CONSUMER_KEY,
    consumer_secret: config.ENV.CONSUMER_SECRET,
    access_token_key: config.ENV.ACCESS_TOKEN,
    access_token_secret: config.ENV.ACCESS_TOKEN_SECRET
});

exports.postTweet = function(message){
    let tweet = message + " " + config.SIGNATURE.HASHTAG;
    return client.post(config.SIGNATURE.STATUSES_UPDATE, {status: tweet});
}

exports.getNowPlaying = function(){
    return client.get(config.SIGNATURE.SEARCH, {q: config.SIGNATURE.HASHTAG, count: 5, result_type: "recent"});
}