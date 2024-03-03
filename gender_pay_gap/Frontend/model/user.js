const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username:{
        type:String, 
        require:true},
    password: {
        type:String, 
        require:true},
    confirmPassword: {
        type:String, 
        require:true},
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

const User = mongoose.model('User', userSchema, 'User');
module.exports = User;
