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

    //


}