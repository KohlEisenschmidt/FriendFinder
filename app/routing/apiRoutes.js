var friends = require('../data/friends.js');
// friends=JSON.parse(friends);
// console.log(friends);

var path = require('path');
// var server = require("/server.js");

module.exports = function(app){
   
    //api links

    //friends list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //friends post
    app.post("/api/friends", function(req, res) {
        // console.log(req);

            var newfriend = req.body;
            console.log(newfriend);
            var lowestdiff = 41;//set to 41 because 40 is the maximum diff possible
            var bestmatch;

            //forloop through friendslist
            for(var i=0; i<friends.length; i++){
                console.log(friends[i]);
                var difference = 0;
                //second forloop through scores array
                for(var j=0; j<friends[i].scores.length; j++){
                    console.log(friends[i].scores[j]);
                    //find difference of scores array
                    difference += Math.abs(friends[i].scores[j]-newfriend.scores[j]);
                    console.log(difference);
                    //update best matches once better match is found
                }
                console.log("total difference " + difference);
                if (difference < lowestdiff){
                    lowestdiff = difference;
                    bestmatch = friends[i];
                    console.log("new best match " );
                    console.log(bestmatch);
                }
            }
            friends.push(newfriend);
            res.json(bestmatch);
    });
}