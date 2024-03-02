const User = require('../model/user');

const user = await User.findById(userId);
user.profile = adminProfile._id;
await user.save();
