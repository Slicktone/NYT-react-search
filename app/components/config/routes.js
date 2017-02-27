var React = require("react");

var router = require("react-router");

// Including the Route component for individual routes
var Route = router.Route;

// DONT GET THESE MIXED UP
// Including the Router component for all Routes
var Router = router.Router;

// Including the hashHistory prop for client side routing
var browserHistory = Router.browserHistory;

// catch-all route(Index)
var IndexRoute = router.IndexRoute;

// Include for component paths
var Main = require("../Main.jsx");
var Search = require("../children/Search.jsx");
var Saved = require("../children/Saved.jsx");
var Results = require("../children/Results.jsx");


module.exports = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>

		<Route path="Search" component={Search}/>
		<Route path="Results" component={Results}/>
		<Route path="Saved" component={Saved}/>

		<IndexRoute component={Search}/>
		
	</Router>
	);


