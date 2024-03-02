const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    password: String,
    confirmPassword: String,
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

const User = mongoose.model('User', userSchema, 'User');
module.exports = User;
