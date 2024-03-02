const Profile = require('../model/profile');


const adminProfile = new Profile({
    name: 'Admin',
    isAdmin: true
});

await adminProfile.save();
