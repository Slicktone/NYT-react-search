// React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("react-router").Router;

var routes = require("./components/config/routes");

// Render the Main component
ReactDOM.render(
	<Router>{routes}</Router>,document.getElementById("app")
	);