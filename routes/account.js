const express = require('express');
const accountControllers = require('../controllers/accountControllers')
const router = express.Router();

router.get('/user/accounts/all/:id' , accountControllers.getAccount );

router.get('/user/accounts/:userId' , accountControllers.getAllAccounts);

router.post('/user/account/:userId' ,accountControllers.postAccount);

module.exports = router;