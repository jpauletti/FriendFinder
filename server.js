// dependencies
var express = require("express");
var path = require("path");

// set port
var PORT = process.env.PORT || 8080;

var app = express();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// pull in routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// start server
app.listen(PORT, function () {
    console.log("Now listening on: http://localhost:" + PORT);
})