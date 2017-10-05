'use strict';

const deleteUser = require('../../resources/js/').deleteUser;
let UserInstance = false;
let di = {};

class deleteUsers {
    constructor (di) {
        this.model = di.model || deleteUser
    };

    deleteUserbyId (UserId) { 
        let _this = this;        
        return new Promise ((resp, reject) => {            
            return _this.model.deleteUserTransaction(UserId)
            .then((result) => {    
                resp(result)
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
    getInstance: (di) => { return getInstance(di)}
}