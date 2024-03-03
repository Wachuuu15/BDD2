const mongoose = require('mongoose');
const User = require('../model/user');
const Profile = require('../model/profile');

const crear = async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        // Verificar si el nombre de usuario ya existe en la base de datos
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).send('El nombre de usuario ya está en uso');
        }

        // Si el nombre de usuario no existe, crear un nuevo usuario
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(), // Genera un nuevo ObjectId
            username: username,
            password: password,
            confirmPassword: confirmPassword
        });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        // Crear un perfil asociado al usuario
        const newProfile = new Profile({
            name: 'Nombre predeterminado', // Puedes cambiar esto según tus necesidades
            age: 18, // Edad predeterminada, puedes cambiarla según tus necesidades
            email: 'example@example.com', // Correo electrónico predeterminado, puedes cambiarlo según tus necesidades
            dir: 'Dirección predeterminada', // Dirección predeterminada, puedes cambiarla según tus necesidades
            isAdmin: false // Por defecto, el nuevo usuario no es un administrador, puedes cambiarlo según tus necesidades
        });

        newUser.profile = newProfile;

        await newProfile.save();

        res.redirect('/index');
    } catch (error) {
        console.error('Error al guardar el nuevo usuario:', error);
        res.status(500).send('Error al guardar el nuevo usuario');
    }
};

module.exports = { crear };
