'use strict';


let UserInstance = false;

class deleteUsers {
	constructor (di) {
		this.model = di.model;
	}

	deleteUserbyId (UserId) { 
		let _this = this;
		return new Promise ((resp, reject) => {
			return _this.model.deleteUser(UserId)
				.then((result) => {    
					resp(result);
				})
				.catch((err) => {
					reject(err);
				});
		});  
	}
}


let newDeleteUserInstance;

function getInstance (di) {
	if(!UserInstance){
		newDeleteUserInstance = new deleteUsers(di);
	}
	return newDeleteUserInstance;
}


module.exports = {
	getInstance: (di) => { 
		return getInstance(di);
	}
};