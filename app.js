// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
     res.sendFile('home.html');
});

app.listen(8080);
module.exports.getApp = app;