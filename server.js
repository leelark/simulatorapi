var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
let fs = require('fs');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
         // get an instance of the express
											// Router






var http = require('http');

//Node function called each time our event loop receives a new HTTP request
function onRequest(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    
	res.end('student'); 
	
    
    /* Write the IP addresses of our connecting client to console */
    console.log('Incoming connection from ' + req.connection.remoteAddress);
}

//Listen for connections on the port provided to us by the host process
var server = http.createServer(onRequest).listen(process.env.PORT);







