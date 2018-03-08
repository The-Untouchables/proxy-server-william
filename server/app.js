const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

app.use(express.static(__dirname + '/../public'));
app.use('/rooms/:roomid/', express.static(__dirname + '/../public'));

app.get('/rooms/:roomid/review', (req, res) => {
  
});

app.get('/api/rooms/:roomid/description', (req, res) => {
  res.redirect('http://18.222.4.195:80/api/rooms/' + req.params.roomid + '/description');
});

module.exports = app;
