const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	helmet = require('helmet'),
	cookieParser = require('cookie-parser'),
	routers = require('./api/routers');




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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:1024102420, type:'application/json'}));

app.use(cookieParser());


app.use((err, req, res, next) => {
	if (err) {
		res.status(400).send('Invalid Request data'); 
	} else {
		next();
	}
});


app.use(helmet());

app.use('/api', routers);


module.exports = {
	app: app
};
