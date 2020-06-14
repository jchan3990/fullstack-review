const github = require('../helpers/github.js');
const db = require('../database/index.js');
const Parser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let app = express();

app.use(Parser.json())
app.use(Parser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
  github.getReposByUsername(req.body.name)
    .then(data => {db.save(data)})
    .then(result => {res.status(201).send('Post Success!')})
    .catch(err => {res.status(400).send('You Suck')})
});

app.get('/repos', function (req, res) {
  db.get25()
    .then(results => {res.status(200).send(results)})
    .catch(err => {res.status(400).send('Cannot get 25 repos')})
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

