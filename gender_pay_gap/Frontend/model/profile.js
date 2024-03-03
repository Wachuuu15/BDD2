const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    dir: String,
});

const Profile = mongoose.model('Profile', profileSchema,'Profile');
module.exports = Profile;
