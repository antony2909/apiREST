'use strict';

const createUser = require('./createUser');
const listUsers = require('./listUsers');
const deleteUser = require('./deleteUser');
const updateUser = require('./updateUser');

module.exports = {
    createUser:  createUser,
    listUsers:   listUsers,
    deleteUser:  deleteUser,
    updateUser:  updateUser
    
}