const express = require('express');
const path = require('path');
const app = express();
const html = require('./html.js');
import React from 'react';
import { renderToString } from 'react-dom/server';
import HackBnB from './hackbnb.jsx';

//app.use(express.static(__dirname + '/../public'));
//app.use('/rooms/:roomid/', express.static(__dirname + '/../public'));
app.get('/rooms/:roomid', (req, res) => {
  const body = renderToString(<HackBnB />);

  res.send(html(body));
});

app.get('/rooms/:roomid/ratings', (req, res) => {
  res.redirect('http://18.219.35.229:80/rooms/' + req.params.roomid + '/ratings');
});

app.get('/rooms/:roomid/reviews', (req, res) => {
  res.redirect('http://18.219.35.229:80/rooms/' + req.params.roomid + '/reviews');
});

app.get('/api/rooms/:roomid/description', (req, res) => {
  res.redirect('http://18.222.4.195:80/rooms/' + req.params.roomid + '/description');
});

module.exports = app;