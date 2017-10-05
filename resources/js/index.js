'use strict';

const db = require('../models');
const createUser = require('./createUser').getInstance({db:db});
const listUsers = require('./listUsers').getInstance({db:db});
const deleteUser = require('./deleteUser').getInstance({db:db});
const updateUser = require('./updateUser').getInstance({db:db});

module.exports = {
	createUser: createUser,
	listUsers: listUsers,
	deleteUser: deleteUser,
	updateUser: updateUser    
};