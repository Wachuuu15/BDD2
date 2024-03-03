const mongoose = require('mongoose');
const User = require('../model/user');
const Profile = require('../model/profile');

const crear = async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).send('El nombre de usuario ya está en uso');
        }

        const newProfile = new Profile({
            name: 'Maria',
            age: 18,
            email: 'example@example.com',
            dir: 'Dirección predeterminada',
            isAdmin: false
        });

        await newProfile.save();

        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            profile: newProfile._id 
        });

        await newUser.save();

        res.redirect('/index');
    } catch (error) {
        console.error('Error al guardar el nuevo usuario:', error);
        res.status(500).send('Error al guardar el nuevo usuario');
    }
};

module.exports = { crear };
