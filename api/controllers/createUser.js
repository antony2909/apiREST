'use strict';


let UserInstance = false;

class createUsers {
	constructor (di) {
		this.model = di.model;
	}
	
	validateInput (input) {		
		let body = input.body;
		
		return new Promise((response, reject) => {
			if(0 === Object.keys(body).length && Object === body.constructor) {
				return reject('Invalid JSON');
			} 
			if (!body.name || ('' === body.name) || ('string' !== typeof body.name)) {
				return reject('Invalid name');
			}
			if (!body.surname || ('' === body.surname) || ('string' !== typeof body.surname)) {
				return reject('Invalid surname');
			}
			if (!body.email || ('' === body.email) || ('string' !== typeof body.email)) {
				return reject('Invalid email');
			}
			if (!body.address || ('' === body.address) || ('string' !== typeof body.address)) {
				return reject('Invalid address');
			}

			let validatedInfo = {
				body:  input.body
			};
			return response({validated: validatedInfo});
		
		}); 
	}
	
	saveInput (info) {
		let _this = this;
		let infoUser = info.validated.body; 
		return new Promise((response, reject) => {
			return _this.model.UserCreate(infoUser)
				.then((res) => {
					response(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	
	newInfo (req) { 
		let _this = this;
		return new Promise((response, reject) => {
			return _this.validateInput(req)
				.then((validatedBody)=>{
					return _this.saveInput(validatedBody);
				})
				.then((resp) => {
					response(resp);
				})
				.catch((err) => { 
					reject(err);
				});
		});
	}
}




let newcreateUserInstance;

function getInstance (di) {
	if(!UserInstance){
		newcreateUserInstance = new createUsers(di);
	}
	return newcreateUserInstance;
}


module.exports = {
	getInstance: (di) => { 
		return getInstance(di);
	}
};