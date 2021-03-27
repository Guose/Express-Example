const express = require('express');
const app = express();
const data = require('./class.json');

app.get("/", function(req, res) {
    console.log("REQUEST ", req);
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html');
})

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/data', function(req, res) {
    res.sendFile(__dirname + '/class.json');
    console.log(data);
})

app.listen("3001", function() {
    console.log("Port Running on 3001");
})