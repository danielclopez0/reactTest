var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function() {
		return (
			<div> 
				<Link to='/'>
					<button type="button" className='btn'>Go Home!</button>
				</Link>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;