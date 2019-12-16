var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
let fs = require('fs');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080      // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express
											// Router

// test route to make sure everything is working (accessed at GET
// http://localhost:8000/api)
router.get('/stations/data/:station_id', function(req, res) {
	const id = req.params.station_id;
	fs.readFile('./stations.json', (err, data) => {
    if (err) throw err;
	let sensors = JSON.parse(data);
	var station_sensor = sensors[id];
	if(station_sensor != null || station_sensor!=undefined){
		res.json(station_sensor); 
	}
	else{
		res.json({"No data for station" : id})
	}	
	});
	
});

router.get('/stations/data/', function(req, res) {
	const id = req.params.id;
	fs.readFile('./stations.json', (err, data) => {
    if (err) throw err;
	let student = JSON.parse(data);
	res.json(student); 
	});
	
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port , '0.0.0.0');
console.log('Server running on port ' + port);

