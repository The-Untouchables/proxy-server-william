const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../public'));
app.use('/rooms/:roomid/', express.static(__dirname + '/../public'));

app.get('/rooms/:roomid/ratings', (req, res) => {
  res.redirect('http://18.219.35.229:80/rooms/' + req.params.roomid + '/ratings');
});

app.get('/rooms/:roomid/reviews', (req, res) => {
  res.redirect('http://18.219.35.229:80/rooms/' + req.params.roomid + '/reviews');
});

app.get('/api/rooms/:roomid/description', (req, res) => {
  res.redirect('http://18.222.4.195:80/api/rooms/' + req.params.roomid + '/description');
});

app.get('/api/rooms/:roomid/carousel', (req, res) => {
  res.redirect('http://18.222.4.195:3001/api/rooms/' + req.params.roomid + '/carousel');
});

module.exports = app;
