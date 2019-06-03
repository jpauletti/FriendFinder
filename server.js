// dependencies
var express = require("express");
var path = require("path");

// set port
var PORT = process.env.PORT || 8080;
var app = express();

// data parsing handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

// pull in routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// start server
app.listen(PORT, function () {
    console.log("Now listening on: http://localhost:" + PORT);
})