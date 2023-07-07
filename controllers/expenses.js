const Account = require('../models/accountInfo');
const { v4: uuidv4 } = require('uuid');

exports.createExpenses = async (req , res , next) => {
   try {
        const {id} = req.params;
        const {motif , amount} = req.body;
        const data = await Account.findById(id);
        data.expenses.push(({id : uuidv4() , motif , amount , date : Date.now()}));
        await data.save()
        return res.status(200).json({data});
   } catch (error) {
        return res.json({error});
   }
};