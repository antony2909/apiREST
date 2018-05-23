'use strict';



let UserInstance = false;
class getUsers {
	constructor (di) {
		this.model = di.model;
	}

	getUsers () {
		let _this = this;
		return new Promise ((resp, reject) => {
			_this.model.listAllUsers()
				.then((result) => {
					return resp(result);
				})
				.catch((err) => {
					return reject(err);
				});
		});  
	}

	getUsersbyId (UserId) {
		let _this = this;
		return new Promise ((resp, reject) => {
			return _this.model.listUsersbyId(UserId)
				.then((result) => {
					resp(result);
				})
				.catch((err) => {
					reject(err);
				});
		});  
	}
}


let newUserInstance;

function getInstance (di) {
	if(!UserInstance){
		newUserInstance = new getUsers(di);
	}
	return newUserInstance;
}


module.exports = {
	getInstance: (di) => { 
		return getInstance(di);
	}
};