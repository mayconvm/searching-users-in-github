const React = require("react");
const GitHubService = require("../services/GitHubService");

const InputSearch = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
	
		GitHubService.getUser(this.refs.username.value)
		.then((response) => {
			this.props.updateUser(response.data);
		});

		GitHubService.getRepos(this.refs.username.value)
		.then((response) => {
			this.props.updateRepos(response.data);
		});
	},
	render: function () {
		return (<div>	
					<label>Usuário</label>
					<input type="text" ref="username" />
					<button onClick={this.handleSubmit}>Enviar</button>
				</div>
			)
	}
});

InputSearch.PropTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired
}


module.exports = InputSearch;