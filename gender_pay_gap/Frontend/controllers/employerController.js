const Employer = require('../model/Employer')

//show
const mostrar = async (req, res) => {
    try {
        // Utiliza await para esperar a que se resuelva la promesa
        const employers = await Employer.find();
        console.log('Empleadores encontrados:', employers);

        res.json(employers);
    } catch (error) {
        console.error('Error al obtener los empleadores:', error);
        res.status(500).json({ message: 'Error al obtener los empleadores' });
    }
};

module.exports = { mostrar };
