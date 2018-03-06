const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../public'));
app.use('/rooms/:roomid/', express.static(__dirname + '/../public'));

app.get('/rooms/:roomid/ratings', (req, res) => {
  res.redirect('http://localhost:3004/rooms/' + req.params.roomid + '/ratings');
});

app.get('/rooms/:roomid/reviews', (req, res) => {
  res.redirect('http://localhost:3004/rooms/' + req.params.roomid + '/reviews');
});

app.get('/api/rooms/:roomid/description', (req, res) => {
  res.redirect('http://localhost:3002/rooms/' + req.params.roomid + '/description');
});

module.exports = app;
