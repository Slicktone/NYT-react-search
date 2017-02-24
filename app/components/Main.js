var React = require("react");

// Sub Components
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Result = require("./children/Results");

// Including the helper file for AJAX requests
var helpers = require("./utils/helpers");


// Create Main Component
var Main = React.createClass({
    getInitialState: function() {
        return { query: "", results: "", saved: [] };
    },
// Put Helper AJAX here
// One for Rendering and for Updating (if component changes/Query Entered)
    componentDidMount: function() {
        helper.getSavedData().then(function(response){
            console.log(response);
            if(response !== this.state.saved) {
                console.log("Saved Data", response.data);
                this.setState({ saved: response.data });
            }
        }.bind(this));
    },

    componentDidUpdate: function() {
        helper.runQuery(this.state.searchTerm).then(function(data) {
            if(data !== this.state.results) {
                console.log("Articles", data);
                this.setState({ results: data });

                // After result post to saved
                helper.postData(this.state.searchTerm).then(function() {
                    console.log("Updated");

                // After post, get updated saved
                    helper.getSavedData().then(function(response) {
                        console.log("Currently Saved", response.data);
                        console.log("Saved", response.data);
                        this.setState({ saved: response.data });
                        
                    }.bind(this));
                }.bind(this));
            }
        }.bind(this));
    },


    // Allows children with setQuery function to update the parent. 
    setQuery: function(query) {
        this.setQuery({ searchTerm: query });
    },

    // Rendering
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h2 className=" text-center"> New York Times Article Scrubber! </h2>
                        <h6 className="text-center">
                            Search for and annotate articles of interest.
                        </h6>
                    </div>

                    <div className="col-md-8">
                        <Form setQuery={this.setQuery} />
                    </div>

                    <div className="col-md-8">
                        // Results
                        <Results articles={this.state.results} />
                    </div>

                    <div className="col-md-8">
                        // Saved
                        <Saved saved={this.state.saved} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;