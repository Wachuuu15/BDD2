const User = require('../model/user');

const crear = async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        const newUser = new User({
            username: username,
            password: password,
            confirmPassword: confirmPassword
        });

        await newUser.save();

        res.redirect('/index');
    } catch (error) {
        console.error('Error al guardar el nuevo usuario:', error);
        res.status(500).send('Error al guardar el nuevo usuario');
    }
};

module.exports = { crear };

