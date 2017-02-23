var React = require("react");

// Sub Components
var Search = require("./children/Search");
var Saved = require("./children/Saved");

// Put Helper AJAX here
// One for Rendering and for Updating (if component changes/Query Entered)


// Create Main Component
var Main = React.createClass({
    getInitialState: function() {
        return {

        }
    },

    // Allows children with setQuery function to update the parent. 
    setQuery: function(query) {
        this.setQuery({ searchTerm: query });
    },

    // Rendering HTML
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
                        <Form setQuery={this.setQuery} />
                    </div>

                    <div className="col-md-8">
                        // Saved
                        <Form setQuery={this.setQuery} />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;