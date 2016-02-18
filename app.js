// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set("view options", {layout: false});

app.get('/', function(req, res) {
    res.sendfile('/home.html');
  });

app.listen(8080);
module.exports.getApp = app;