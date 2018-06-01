var path = require('path');
// var server = require("/server.js");

module.exports = function(app){

    //html links
    
    //homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html")); 
    });
    //survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
     //default
    //  app.use( function(req, res) {
    //     res.sendFile(path.join(__dirname, "/../public/home.html")); 
    // });
}

// var app = express();
// var PORT = process.env.PORT || 3000;
// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
















// //server listening
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  
