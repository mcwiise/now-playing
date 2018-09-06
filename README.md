
## Scope

This is a single page application that shows the tweets under #nowplaying hashtag. The application allows to post a new tweet which consists of youtube video link with some comments, which will be posted to @BInowplaying account.

## Tech Stack

This is a nodejs application splits in 3 modules: a router which will attend any request from the browser, a facade implementing the bussines logic, and a service which sets comunication with twitter API. The following are the npm packages used across the application:

- express: this is a web application framework written in javascript. This allows to intercept and route any request comming from the browser and delegate a new task to the facade module (facade.js).

- bluebird: everything in javascript is asycn, so bluebird is a future/promise framework used to handle asyncronous computations between nodejs modules. So, the facade will provide any response from the service module (callback), in form of a new promise to the router.

- twitter: The service layer uses this package to interact with the Twitter API. All responses are wraped and propagated in callbacks to the facade module.

- get-urls: this allows to look for urls in a given string, thus retrieving an array of urls if they are present. This package is used to analyze the tweet text, and extract youtube videos urls.

- get-video-id: this package is able to extract a youtube video identifier from a URL.

- ejs: This is a framework to do templating, and building static content from the server side. This package is used to write the html pages as response to request coming from the browser using scriptlets.

- mocha: This is a testing framework, this allows to write unit tests using BDD practices.

- chai: This is an assertion library. This is used in combination with mocha to write unit tests.

Additionaly, it was necessary to use a framework to speed up the css development. So the application uses [bulma](https://bulma.io/) which is a pure CSS framework with a set of classes to build user interface components.

## Get Started

- Please configure the following env variables providing the proper authentication values, in your local machine

```
TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
```

## Contribute

- Install nvm following instructions on: https://github.com/creationix/nvm

- Install nodejs and set the default and stable versions. (the stable version is v10.0.9 when writing this readme)

```
$ nvm install node
$ nvm alias stable v10.0.9
$ nvm use stable
```

- Install modules by: `npm install`

- Run app by: `node app.js`

- Once there you can access the application on http://localhost:3000

## Unit Tests

We are using mocha and chai to build unit test suite. To run test suite:

```
$ nvm use stable
$ npm test
```
