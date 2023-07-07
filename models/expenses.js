const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const expensesSchema = new Schema({
    motif : {type : String , required:true},
    amount : {type : String , required:true},
    date : {type : Date , default : Date.now()},
});

module.exports = model('expenses' , expensesSchema);