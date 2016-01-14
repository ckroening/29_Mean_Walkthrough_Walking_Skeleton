var express = require('express'); //need express here, too.
var router = express.Router(); //router variable holds a return of the router method of the express object.
var path = require('path'); //helps serve files from server to client.
var mongoose = require('mongoose'); //this is a package.json dependency needed to communicate with mongo db.

mongoose.connect('mongodb://localhost/basic_walking_skeleton'); //cmd that connects to a database, (here, named "basic_walking_skeleton")
/* Routers manage how incoming requests are handled. */

var Thing = mongoose.model('Thing', {name: String}); //declares a basic model for your data that will be brought to the db.

//This is setting up the get method on the router object with 3 arguments (formerly from 'app.js')
router.get('/', function(req,res,next){ //next is how Express handles middleware.
  //var file = req.params[0] || 'views/index.html'; // //This line is now commented out because static files are served from server/public folder.
  res.sendFile(path.join(__dirname, '../public/views/index.html'/*, file */)); //no longer need 'file' here.
  //next();
});

module.exports = router; //export order: this is now a module that available for use throughout entire app.
