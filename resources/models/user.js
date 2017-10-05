'use strict';

module.exports = function(sequelize, DataTypes) {

	const Users = sequelize.define('user', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			required: true
		},
		name: {
			type: DataTypes.STRING,
			primaryKey: true,
			required: true
		},		
		surname: {
			type: DataTypes.TEXT,
			required: true
		},
		email: {
			type: DataTypes.TEXT,
			required: true
		},
		created:  DataTypes.DATE,
		modified: DataTypes.DATE
	}, {   
		freezeTableName: true,
		createdAt: 'created',
		updatedAt: 'modified',
		paranoid:  false,
		timestamps: true
	});
	return Users;
};