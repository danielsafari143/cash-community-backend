const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const signupSchema = new Schema({
    name : {type : String , required:true},
    email : {type : String , required:true},
    password : {type : String , required:true},
});

module.exports = model('register' , signupSchema);