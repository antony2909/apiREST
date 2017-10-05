'use strict';
//const db = require('../models');

let di = {};
let UserInstance = false;

class deleteUsers {
	constructor (di) {
		this.UserModel = di.db;
	}

	findUserbyId (UserId) {
		let _this = this;		
		return new Promise ((resp, reject) => {			
			return _this.UserModel.user.findOne({where:{id: UserId}, raw:true})				
				.then((res) => {
					if (null === res) {						
						return reject({code:3002, message: 'User does not exist!'});
					}					
					resp({info: res, _this:_this});
				})
				.catch((err) => {					
					reject(err);
				}); 
		});
	}
		
	deleteUsers (user) {		
		let _this = user._this;
		return new Promise ((resp, reject) => {
			return _this.UserModel.user.destroy({where: {id: user.info.id}})
				.then((res) => {
					resp(user);
				})
				.catch((err) => {				
					reject(err);
				});
		});
	}

	deleteUserTransaction (UserInfo) {
		let _this = this; 
		return new Promise ((resp, error) => {
			return _this.UserModel.sequelize.transaction(function (trans) {
				let info = {
					UserId: UserInfo,
					t: trans
				};
				return _this.findUserbyId(UserInfo)
					.then(_this.deleteUsers);  
			}).then(function (result) { 
				resp(UserInfo);
			}).catch(function (err) {
				error(err);
			});
		});    
	}

}




let UserdeleteInstance;

function getInstance (di) {
	if(!UserInstance){
		UserdeleteInstance = new deleteUsers(di);
	}
	return UserdeleteInstance;
}
module.exports = {
	getInstance: (di) => { return getInstance(di);}
};