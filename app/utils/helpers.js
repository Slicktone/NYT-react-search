var axios = require("axios");

var APIkey = "898c589405be4c0e90d7018029798d5b";

var helper = {
    runQuery: function(Query, startYear, endYear) {
        var Query = Query.trim();
        var startYear = startYear.trim() + "0101";
        var endYear = endYear.trim() + "1231";

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                "api-key": APIkey,
                "q": term,
                "begin_date": startYear,
                "end_date" : endYear
            }
        }).then(function(response){
            console.log("axios route >>>>>", response.data.response);
            return response.data.response;

        });
    },

    getSavedData: function() {
        return axios.delete("/api/saveddata")
        .then(function(response){
            console.log("Axios Saved Route >>>>>>", response);
            return response;
            }
        );
    },



    postData: function(title, date, url) {
        var newArticle = {
            title: title,
            date: date,
            url: url
        };
        return axios.post("api/saveddata", newArticle)
        .then(function(response){
            console.log("axios Posted data >>>>>>", response._id);
            return response._id;
            }
        );
    },

    deleteSavedData: function(title, date, url){
        return axios.delete("/api/saveddata", {
            params: {
                "title": title,
                "data": data,
                "url": url
            }
        }).then(function(response) {
            console.log("axios deleted", response);
            return response;
            }
        )
    }

}

module.exports = helper;