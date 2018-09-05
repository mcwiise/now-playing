exports.ENV = Object.freeze({
    CONSUMER_KEY: process.env["TWITTER_CONSUMER_KEY"],
    CONSUMER_SECRET: process.env["TWITTER_CONSUMER_SECRET"],
    ACCESS_TOKEN: process.env["TWITTER_ACCESS_TOKEN"],
    ACCESS_TOKEN_SECRET: process.env["TWITTER_ACCESS_TOKEN_SECRET"]
});

exports.SIGNATURE = Object.freeze({
    STATUSES_UPDATE: "statuses/update",
    SEARCH: "search/tweets",
    USERS: "users/show"
});