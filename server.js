'use strict';

const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const router     = require('./api/router');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:1024102420, type:'application/json'}));

app.use(cookieParser());

app.use('/api', router);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
	
	// intercept OPTIONS method
    if ('OPTIONS' == req.method) {
			res.send(200);
	  }
	  else {
			next();
	  }
});

module.exports = app;

