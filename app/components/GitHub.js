const React = require("react");

const InputSearch = require("./InputSearch");
const DataUser = require("./DataUser");
const ListRepos = require("./ListRepos");

const GitHub = React.createClass({
	getInitialState() {
		return {
			user: null,
			repos: []
		};
	},

	updateUser(user) {
		this.setState({user});
	},

	updateRepos(repos) {
		this.setState({repos});
	},

	render: function() {
		return (<div>
					<form>
						<InputSearch
							updateUser={this.updateUser}
							updateRepos={this.updateRepos}
						/>
					</form>

					<DataUser
						user={this.state.user}
					/>

					<ListRepos
						repos={this.state.repos}
					/>
				</div>
		);	
	}
});



module.exports = GitHub;