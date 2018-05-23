'use strict';

let UserInstance = false;

class updateUsers {
	constructor (di) {
		this.model = di.model;
	}
	updateUser (UserInfo) {
		let _this = this;
		return new Promise ((resp, reject) => {
			return _this.model.updateUser(UserInfo)
				.then((result) => {
					resp(result);
				})
				.catch((err) => {
					reject(err);
				});
		});  
	}
}


let newUpdateUserInstance;

function getInstance (di) {
	if(!UserInstance){
		newUpdateUserInstance = new updateUsers(di);
	}
	return newUpdateUserInstance;
}


module.exports = {
	getInstance: (di) => { return getInstance(di)}
}