var React = require("react");

var router = require("react-router");

// Including the Route component for individual routes
var Route = router.Route;

// DONT GET THESE MIXED UP
// Including the Router component for all Routes
var Router = router.Router;

// Including the hashHistory prop for client side routing
var hashHistory = router.hashHistory;

// catch-all route(Index)
var IndexRoute = router.IndexRoute;

// Include for component paths
var Main = require("../Components/Main");
var Search = require("../Components/Search");
var Saved = require("../Components/Saved");
// Result Component??

module.exports = (
	<Router history={hashHistory}>
		<Router path="/" component={Main}/>

		<Router path="Search" component={Search}/>
		<Router path="Result" component={Result}/>
		<Router path="Saved" component={Saved}/>

		<IndexRoute component={Search}/>

	</Router>
	);


