'use strict';

const Sequelize = require('sequelize');
const config = require('../../config/config')();
const db        = {};

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//Models/tables
db.user = require('./user.js')(sequelize, Sequelize);

 
module.exports = db;  