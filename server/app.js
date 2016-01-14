var express = require('express'); //requiring express tells app to go ahead and use installed copy.
var app = express(); //app is an instance of express.
var index = require('./routes/index'); //index variable is holding the index.js module.
var path = require('path');

app.use(express.static(path.join(__dirname,'./public'))); //this serves the static content.

app.use('/', index); //when a request comes in at the root path, use the index variable (which is, actually, the index.js module, to handle it)
//(index.js module contains a handler for processing requests at the root path)

var server = app.listen(3000, function(){ //callback function.
  var port = server.address().port; // port is where app should 'listen'.
  console.log('Listening on port: ', port);
});