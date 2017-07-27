const axios = require("axios");

const GitHubService = {
	getUser: (username) => axios.get('https://api.github.com/users/' + username),
	getRepos: (username) => axios.get('https://api.github.com/users/' + username + '/repos')
}

module.exports = GitHubService;