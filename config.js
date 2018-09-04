module.exports.ENV = Object.freeze({
    HOST: process.env["TWITTER_HOST"],
    CONSUMER_KEY: process.env["TWITTER_CONSUMER_KEY"],
    CONSUMER_SECRET: process.env["TWITTER_CONSUMER_SECRET"],
    ACCESS_TOKEN: process.env["TWITTER_ACCESS_TOKEN"],
    ACCESS_TOKEN_SECRET: process.env["TWITTER_ACCESS_TOKEN_SECRET"]
});