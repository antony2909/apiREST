'use strict';
const createUser = require('../../resources/js/').createUser;


let UserInstance = false;
let di = {};

class createUsers {
    constructor (di) {
        this.model = di.model || createUser
	};
	
	validateInput (input) {
		let _this = this;
		let header = input.headers.token;
		let body = input.body;
		
		return new Promise((response, reject) => {   
			// myLogger('adfada');  
					  
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
				token: input.headers.token,
				body:  input.body
			}
			return response({validated: validatedInfo, _this: this});
		
		}); 
	}
	
	saveInput (info) {
		let _this = info._this;
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
	
	newInfo (req, res) { 
		return new Promise((response, reject) => {   
			let _this = this;
			this.validateInput(req)
				.then(_this.saveInput)
				.then((resp) => {
					return response(resp);
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
    getInstance: (di) => { return getInstance(di)}
}