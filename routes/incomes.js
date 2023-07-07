const express = require('express');
const incomes = require('../controllers/income');
const routes = express.Router();

routes.get('/user/account/incomes/:id' , incomes.createIncomes);

module.exports = routes;