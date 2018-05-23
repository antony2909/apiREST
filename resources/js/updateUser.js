'use strict';

let UserInstance = false;

class updateUser {
	constructor (di) {
		this.UserModel = di.db;
	}

	UserDecorator (data) {   
		let info  = {
			name:       data.name,
			surname:	data.surname,
			email:      data.email,
			address:    data.address
		};
		return info;
	}

	updateUser (UserInfo) {
		let _this = this;
		let UserData = UserInfo.info;
		return new Promise ((resp, reject) => {
			let data = _this.UserDecorator(UserData);
			return _this.UserModel.user.update(
				data,
				{where:{id: UserInfo.UserId}})
				.then(() => {    
					let UserUpdated = {
						UserId: UserInfo.UserId,
						res: UserData
					};
					resp(UserUpdated);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

let UserUpdateInstance;

function getInstance (di) {
	if(!UserInstance){
		UserUpdateInstance = new updateUser(di);
	}
	return UserUpdateInstance;
}
module.exports = {
	getInstance: (di) => { return getInstance(di);}
};