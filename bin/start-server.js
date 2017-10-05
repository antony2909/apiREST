'use strict';
const dotenv = require('dotenv').config({silent: true });
const server = require ('../app').app;

server.listen(process.env.PORT);
console.log('Server started at port ', process.env.PORT);

