const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  return axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  })
    .then(res => {
      console.log('GET user repos SUCCESS');
      return res;
    })
    .catch(err => {console.log('User repos FAIL')})
}

module.exports.getReposByUsername = getReposByUsername;