const path = require('path');
const Employer = require('../model/employer');

const mostrar = async (req, res) => {
    try {
        await Employer.init();
        console.log('Iniciando consulta de empleadores...');
        const limitPerPage = 1;
        const page = parseInt(req.query.page) || 1;
        const startIndex = (page - 1) * limitPerPage;

        const employers = await Employer.find({})
                                        .skip(startIndex)
                                        .limit(limitPerPage)
                                        .exec();
        
        
        //console.log('Consulta finalizada. Empleadores encontrados:', employers);

        if (employers === null || employers.length === 0) {
            res.status(404).json({ message: 'No se encontraron empleadores' });
        } else {
            const infoPath = path.join(__dirname, '../views/info.ejs');
            res.render(infoPath, { employers: employers });
        }
    } catch (error) {
        console.error('Error al obtener los empleadores:', error);
        res.status(500).json({ message: 'Error al obtener los empleadores' });
    }
};

const crear = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'No se proporcionaron datos para crear un nuevo empleador.' });
    }

    // Crear un nuevo objeto Employer
    const newEmployer = new Employer({
        'Employer Name': req.body.employerName,
        'Address': req.body.address,
        'Postcode': req.body.postcode,
        'Percent Difference in Mean Hourly Wage': req.body.percentDifferenceInMeanHourlyWage,
        'Percent Difference in Median Hourly Wage': req.body.percentDifferenceInMedianHourlyWage,
        'Percent Difference in Mean Bonus Received': req.body.percentDifferenceInMeanBonusReceived,
        'Percent Difference in Median Bonus Received': req.body.percentDifferenceInMedianBonusReceived,
        'Percentage of Males that Received a Bonus': req.body.percentageOfMalesThatReceivedABonus,
        'Percentage of Females that Received a Bonus': req.body.percentageOfFemalesThatReceivedABonus,
        'Proportion of Males in Lower Quartile': req.body.proportionOfMalesInLowerQuartile,
        'Proportion of Females in Lower Quartile': req.body.proportionOfFemalesInLowerQuartile,
        'Proportion of Males in Lower Middle Quartile': req.body.proportionOfMalesInLowerMiddleQuartile,
        'Proportion of Females in Lower Middle Quartile': req.body.proportionOfFemalesInLowerMiddleQuartile,
        'Proportion of Males in Upper Middle Quartile': req.body.proportionOfMalesInUpperMiddleQuartile,
        'Proportion of Females in Upper Middle Quartile': req.body.proportionOfFemalesInUpperMiddleQuartile,
        'Proportion of Males in Top Quartile': req.body.proportionOfMalesInTopQuartile,
        'Proportion of Females in Top Quartile': req.body.proportionOfFemalesInTopQuartile,
        'Company Link To GPG Info': req.body.companyLinkToGPGInfo,
        'Responsible Person':req.body.responsiblePerson,
        'Employer Size': req.body.employerSize,
        'Current Name': req.body.currentName,
        'Submitted After The Deadline': req.body.submittedAfterTheDeadline,
        company_id: req.body.company_id
    })
    try {
        const savedEmployer = await newEmployer.save();
        res.redirect('/info');

    } catch (error) {
        console.error('Error al guardar el nuevo empleador:', error);
        res.status(500).json({ message: 'Error al guardar el nuevo empleador' });
    }
};

const editar = async (req, res) => {
    console.log('Empezando a editar');

    try {
        const id = req.body.id_editar;
        const updatedData = { ...req.body }; 

        delete updatedData.id_editar;

        const updatedEmployer = await Employer.findByIdAndUpdate(id, updatedData);

        if (!updatedEmployer) {
            return res.status(404).json({ message: 'No se encontró el empleador para editar' });
        }

        console.log('Se hizo update');

        res.redirect('/info?edit_success=true');
    } catch (error) {
        console.error('Error al actualizar el empleador:', error);
        res.status(500).send('Error al actualizar el empleador');
    }
};

module.exports = { mostrar, crear, editar};