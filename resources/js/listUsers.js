'use strict';

//const db = require('../models');

let di = {};
let UserInstance = false;

class listUsers {
	constructor (di) {
		this.UserModel = di.db;
	}

	listUsersbyId (UserId) {
		let _this = this;
		return new Promise ((resp, reject) => {
			return _this.UserModel.user.findOne({
					where: {
						id: UserId
					},
				})
				.then((res) => {  
					if(null === res) {
						resp({code:1002, message: 'User does not exist!'})
					} else {
						resp(res);
					}
				})
				.catch((err) => {
					reject(err);
				}); 
		});
	}

	listAllUsers () {
		let _this = this;
		return new Promise ((resp, reject) => {            
			_this.UserModel.user.findAndCountAll({
				raw:   true,
				order: [['created', 'DESC']]
			})
				.then((result) => {
					resp(result);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}		

}

let UserListInstance;

function getInstance (di) {
	if(!UserInstance){
		UserListInstance = new listUsers(di);
	}
	return UserListInstance;
}
module.exports = {
	getInstance: (di) => { return getInstance(di)}
}