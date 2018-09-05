const config = require("./config");
const Twitter = require("twitter");

let client = new Twitter({
    consumer_key: config.ENV.CONSUMER_KEY,
    consumer_secret: config.ENV.CONSUMER_SECRET,
    access_token_key: config.ENV.ACCESS_TOKEN,
    access_token_secret: config.ENV.ACCESS_TOKEN_SECRET
});

exports.postTweet = function(message, callback){
    let tweet = message;
    client.post(config.SIGNATURE.STATUSES_UPDATE, {status: tweet}, function(error, tweet, response){
        if(error){
            return callback(undefined, error);
        } else {
            return callback(tweet, undefined);
        }
    });
}

exports.getByHashtag = function(hashtag, callback){
    client.get(config.SIGNATURE.SEARCH, {q: hashtag, count: 5, result_type: "recent"}, function(error, tweets, response){
        if(error){
            return callback(undefined, error);
        } else {
            return callback(tweets, undefined);
        }
    });
}

exports.getUserByScreenName = function(sname, callback){
    client.get(config.SIGNATURE.USERS, {screen_name: sname}, function(error, user, response){
        if(error){
            return callback(undefined, error);
        } else {
            return callback(user, undefined);
        }
    });
}