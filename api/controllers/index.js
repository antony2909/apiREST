'use strict';

const createUser = require('./createUser');
const listUsers = require('./listUsers');
const deleteUser = require('./deleteUser');
const updateUser = require('./updateUser');
const resources = require('../../resources/js/');

module.exports = {
	createUser:  createUser.getInstance({model:resources.createUser}),
	listUsers:   listUsers.getInstance({model:resources.listUsers}),
	deleteUser:  deleteUser.getInstance({model:resources.deleteUser}),
	updateUser:  updateUser.getInstance({model:resources.updateUser})
};