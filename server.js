const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models");
const axios = require("axios");
const cheerio = require("cheerio");
const routes = require("./routes")
const PORT = process.env.PORT || 3001;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/index.html"));
  });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  