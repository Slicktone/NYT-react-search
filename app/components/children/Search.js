// ------------This is the Search Form ---------------

var React = require("react");

var Search = React.createClass({

	// Query is the generic state of what is being searched.
	getInitialState: function() {
		return { query: "" };
	},

	// Controlled Component for Handling User Input
		// More info on Controlled Components here:
		// (https://facebook.github.io/react/docs/forms.html)
	// Consider moving to grandchildren? (Query.js)

	handleChange: function(event) {
		this.setState({ query: event.target.value });
	},

	handleSubmit: function(event) {
		// Logging the query
		console.log("Query submitted: " + this.state.value);
		// Requiring HTML to only submit if button is clicked
		event.preventDefault();

		// **********TODO***********
		// Set Parent to have search term
		this.props...(this.state.query);
		this.setState({ query: "" });
	},

	// Rendering the actual component
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text center"> Article Search </h3>
				</div>
				<div className="panel-body text center">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<h4 className=""> Topic </h4>

							<input value={this.state.query} type="text" 
								className="form-control text-center" id="query"
								onchange={this.handleChange} required/>
							<br />

							<button className="btn btn-primary" type="submit"> Go! </button>

						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Search;