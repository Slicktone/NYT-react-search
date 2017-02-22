// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Requiring the Schema
var Articles = require("./models/Articles");
// Inital Port
var PORT = process.env.PORT || 3000;

var app = express();
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MongoDB Config
mongoose.connect("mongodb://localhost/NYT-react-search");
var db = mongoose.connection;

// Error Handling
db.on("error", function(error) {
    console.log("Mongoose Error on ", error);
});

// On Success
db.once("open", function() {
    console.log("Connection to Mongoose Successful.");
});




// Main Route to send to React Homepage
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

