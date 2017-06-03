var React = require('react');

var Header = React.createClass({

	render(){

		return (
			<header class="navbar">
				<div class="navbar-header">
					<a class="navbar-brand" href="#/app/dashboard">
						<h2>CoreID</h2>
					</a>
				</div>
			</header>
		);
	}

});

module.exports = Header;