const express = require('express');
const sign = require('./routes/signup');
const account = require('./routes/account')
const mongoose = require('mongoose');
const app = express();
const port = 9100;

mongoose.connect('mongodb://localhost:27017/cashcommunity')

app.use(express.json());
app.use('/' , sign);
app.use('/' , account);


app.listen(port , () => {
    console.log(`The server is running on port ${port}`);
});