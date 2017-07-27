const React = require("react");

const ListRepos = React.createClass({
	render() {

		const itens = [];

		this.props.repos.map(function(item, key) {
			itens.push(
				<div key={key}>
					<h5>{item.name}</h5>
				</div>
			);
		});

		return (
			<div> {itens} </div>
		);

	}
});

module.exports = ListRepos;