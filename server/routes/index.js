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

/* The following calls handle GET (when /things is hit) and POST (when /add is hit): */
//This GET call is where we return the results of querying the DB for everything
router.get('/things',function(req,res,next){
  return Thing.find({}).exec(function(err,cats){
    if(err){
      throw err;
    } else {
      res.send(JSON.stringify(things)); // (response is to send JSON verson of the things db)
      next();
    }
  });
});

router.post('/add',function(req,res,next){
  console.log('/add');
  //new instance of Thing object created here (name is set in the angular input field):
  var thingy = new Thing({name:req.body.name}); //req.body.name is where new name is gathered from user input at client leve.
  thingy.save(function(err){ //.save is a mongoose functionality. Here is where we call it in order to send the name info back to db.
    if(err){
      console.log('meow%',err);
    } else {
      console.log('Sending:' + thingy.toJSON);
      res.send(thing.toJSON());
      next();
    }
  });
});

module.exports = router; //export order: this is now a module that available for use throughout entire app.
