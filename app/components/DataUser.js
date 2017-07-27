const React = require("react");

const DataUser = React.createClass({
	render() {
		return this.props.user? (
			<div>
				<h1> {this.props.user.name} </h1>
				<h1> {this.props.user.login} </h1>
			</div>
		) : null;
	}
});

DataUser.PropTypes = {
	user: React.PropTypes.object
}


module.exports = DataUser;