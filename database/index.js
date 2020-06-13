const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoId: Number,
  repoName: String,
  repoOwner: String,
  repoDescription: String,
  stargazersCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  let newRepo = new Repo({
    repoId: repo.repoId,
    repoName: repo.repoName,
    repoOwner: repo.repoOwner,
    repoDescription: repo.repoDescription,
    stargazersCount: repo.stargazersCount
  })

  newRepo.save((err, data) => {
    if (err) {
      console.log('Save ERROR', err)
    } else {
      console.log('Save SUCCESS');
    }
  })
}

module.exports.save = save;