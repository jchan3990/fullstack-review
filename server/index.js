const github = require('../helpers/github.js');
const db = require('../database/index.js');
const Parser = require('body-parser');
const express = require('express');
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
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

