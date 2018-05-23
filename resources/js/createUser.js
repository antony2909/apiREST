'use strict';

const uuid = require('uuid/v4');

let UserInstance = false;

class createUser {
	constructor (di) {
		this.UserModel = di.db,
		this.uuid = di.uuid || uuid
	}

	/**
	 * 
	 * @param {object} data 
	 * @return object
	 */
	UserDecorator (data) {
		let info  = {
			name:       data.name,
			surname:	data.surname,
			email:      data.email,
			address:    data.address
		};
		return info;
	}

	/**
	 * 
	 * @param {object} info 
	 * @return object
	 */
	UserCreate (info) {
		let _this = this;
		return new Promise ((resp, reject) => {
			let decoratedInfo = _this.UserDecorator(info);
			decoratedInfo.id = _this.uuid();
			_this.UserModel.user.create(decoratedInfo)
				.then((res)=> {
					return resp(res);
				}).catch(() => {
					let msgError = {
						code:    1001,
						message: 'error DB input'
					};
					return reject(msgError);
				});
		});
	}
}

let UserCreateInstance;

function getInstance (di) {
	if(!UserInstance){
		UserCreateInstance = new createUser(di);
	}
	return UserCreateInstance;
}

module.exports = {
	getInstance: (di) => { return getInstance(di);}
};
