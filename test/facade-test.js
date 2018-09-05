var expect = require("chai").expect;
var facade = require("../facade");
var nock = require("nock");

describe("Facade Test Suite", function () {
    it("Should get a new promise to post a new tweet to @BInowplaying account", function () {
        //given
        nock("https://api.twitter.com/1.1/")
            .post("/statuses/update.json")
            .reply(200, {
                "created_at": "Wed Sep 05 18:51:09 +0000 2018",
                "text": "test #nowplaying",
                "user": {
                    "id": 2834545563,
                    "id_str": "2834545563",
                    "name": "BI nowplaying",
                    "screen_name": "BInowplaying"
                }
            });

        var result = facade.createTweet("test");

        return result.then(function (data) {
            expect(data.text).to.be.equals("test #nowplaying");
            expect(data.user.name).to.be.equals("BI nowplaying");
        });
    });

    it("Should get a new promise to retrieve tweets with hashtag #nowplaying", function () {
        //given
        nock("https://api.twitter.com/1.1/")
            .post("/statuses/update.json")
            .reply(200, {
                "statuses": [
                    {
                        "created_at": "Wed Sep 05 19:02:41 +0000 2018",
                    },
                    {
                        "created_at": "Wed Sep 09 19:02:41 +0000 2018",
                    }
                ]
            }
        );

        var result = facade.createTweet("test");

        return result.then(function (data) {
            expect(data.statuses).to.have.lengthOf(2);
        });
    });
});