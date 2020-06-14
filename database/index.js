const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
mongoose.Promise = require('bluebird');

let repoSchema = mongoose.Schema({
  repoId: {type: Number, unique: true},
  repoName: String,
  repoOwner: String,
  repoDescription: String,
  stargazersCount: Number,
  forksCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  repo.forEach(r => {
    //console.log(repo[i].id)
    let newRepo = new Repo({
      repoId: r.id,
      repoName: r.name,
      repoOwner: r.owner.login,
      repoDescription: r.description,
      stargazersCount: r.stargazers_count,
      forksCount: r.forks_count
    })
    newRepo.save((err, data) => {
      if (err) {
        console.log('Save ERROR: DUPLICATE')
      } else {
        console.log('Save SUCCESS');
      }
    })
  })
};

let get25 = () => {
  return Repo.find().sort({"created_at":1}).limit(25).exec();
};
module.exports.save = save;
module.exports.get25 = get25;