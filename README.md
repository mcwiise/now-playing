
# Scope

In progress.....

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

## Unit Tests

We are using mocha and chai to build unit test suite. To run test suite:

```
$ nvm use stable
$ npm test
```