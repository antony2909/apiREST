'use strict';
const router = require('express').Router();
const listUsers = require('../controllers').listUsers.getInstance({});
const deleteUser = require('../controllers').deleteUser.getInstance({});
const updateUser = require('../controllers').updateUser.getInstance({});
const createUser = require('../controllers').createUser.getInstance({});

/**
 *  create user - POST 
 */
router.post('/', (req, res) => {
	return createUser.newInfo(req, res)
		.then((response) => {        
			res.status(200).json(response);
		})
		.catch(function(err) {
			res.status(400).send(err);
		});
});

/**
 * list user - GET
 */
router.get('/:Userid', (req, res) => {   
	listUsers.getUsersbyId(req.params.Userid)
		.then((resp) => {        
			res.status(200).send(resp);
		})
		.catch((err) => {    
			res.status(500).send(err);
		});    
});

/**
 * delete user - DELETE
 */
router.delete('/:Userid', (req, res) => {
	deleteUser.deleteUserbyId(req.params.Userid)
		.then((resp) => {
			res.status(200).send(resp);
		})
		.catch((err) => {        
			res.status(404).send(err);
		});
});

/**
 * update user - PUT
 */
router.put('/:userId', (req, res) => {
	let update = {
		UserId: req.params.userId,
		info: req.body
	}
	updateUser.updateUser(update)
	.then((resp) => {
		res.status(200).send(resp);
	})
	.catch((err) => {    
		res.status(500).send('Database error');
	});
});

/**
 * list all users  - GET
 */
router.get('/', (req, res) => {   
	listUsers.getUsers(req.params.Userid)
		.then((resp) => {        
			res.status(200).send(resp);
		})
		.catch((err) => {    
			res.status(500).send(err);
		});    
});

module.exports = router;
