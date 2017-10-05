'use strict';


const updateUser = require('../../resources/js/').updateUser;
let UserInstance = false;
let di = {};

class updateUsers {
    constructor (di) {
        this.model = di.model || updateUser
    };
    
    updateUser (UserInfo) {  
        return new Promise ((resp, reject) => {            
            return updateUser.updateUser(UserInfo)
            .then((result) => {    
                resp(result)
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