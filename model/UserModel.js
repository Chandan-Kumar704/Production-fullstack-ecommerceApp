const mongoose = require('mongoose');

const UserSchma = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    domain:String,
    available:Boolean
})
const UserModel = mongoose.model('users',UserSchma) // first is 'Table name',UserSchma Name


module.exports= UserModel;