const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const account = new Schema({
    user : {type : Schema.Types.ObjectId , ref : 'registers' , required: true},
    accountName : {type : String , required : true},
    accountType : {type: String , required : true},
    date : {type : Date , default : Date.now()}
});

module.exports = model('account' , account);