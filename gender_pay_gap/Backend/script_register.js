db.Profile.find()

var usersData = [
    {
        username: 'usuario1',
        password: 'contraseña1',
        confirmPassword: 'contraseña1',
        profile: {
            name: 'Nombre1',
            age: 25,
            email: 'correo1@example.com',
            dir: 'Dirección 1'
        }
    },
    {
        username: 'usuario2',
        password: 'contraseña2',
        confirmPassword: 'contraseña2',
        profile: {
            name: 'Nombre2',
            age: 30,
            email: 'correo2@example.com',
            dir: 'Dirección 2'
        }
    }
];

db.User.insertMany(usersData);

var profilesData = [
    {
        name: 'Nombre1',
        age: 25,
        email: 'correo1@example.com',
        dir: 'Dirección 1'
    },
    {
        name: 'Nombre2',
        age: 30,
        email: 'correo2@example.com',
        dir: 'Dirección 2'
    }
];

db.Profile.insertMany(profilesData);
