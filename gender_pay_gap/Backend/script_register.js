db.Employer.find().sort({_id:-1})
db.Profile.find({'_id':ObjectId('65e503f5ecf77b9485b2c168')})
db.Employer.find({'Employer Name': 'Empresa ABC'});

db.Employer.findOne({ 'Employer Name': 'COMPANY' });

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


db.Employer.insertOne({
    'Employer Name': 'Empresa ABC',
    'Address': 'Dirección de la empresa',
    'Postcode': '12345',
    'Percent Difference in Mean Hourly Wage': 10,
    'Percent Difference in Median Hourly Wage': 15,
    'Percent Difference in Mean Bonus Received': 5,
    'Percent Difference in Median Bonus Received': 8,
    'Percentage of Males that Received a Bonus': 60,
    'Percentage of Females that Received a Bonus': 70,
    'Proportion of Males in Lower Quartile': 40,
    'Proportion of Females in Lower Quartile': 60,
    'Proportion of Males in Lower Middle Quartile': 45,
    'Proportion of Females in Lower Middle Quartile': 55,
    'Proportion of Males in Upper Middle Quartile': 50,
    'Proportion of Females in Upper Middle Quartile': 50,
    'Proportion of Males in Top Quartile': 60,
    'Proportion of Females in Top Quartile': 40,
    'Company Link To GPG Info': 'https://example.com/gpg-info',
    'Responsible Person': 'Persona responsable',
    'Employer Size': 'Mediana',
    'Current Name': 'Empresa actual',
    'Submitted After The Deadline': false,
    company_id: 10040,
    employees: [
        { name: 'Empleado 1', position: 'Cargo 1', salary: 50000 },
        { name: 'Empleado 2', position: 'Cargo 2', salary: 60000 }
    ]
})

