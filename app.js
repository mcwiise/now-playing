const express = require("express");
const app = express();
const router = require("./router");

router(app);
app.set('view engine', 'ejs');
app.use(express.static('public'));

const server = app.listen(3000, function () {
    console.log("Welcome to now playing!: ", server.address().port);
});