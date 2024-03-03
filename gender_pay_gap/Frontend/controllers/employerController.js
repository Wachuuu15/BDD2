const path = require('path');
const Employer = require('../model/employer');

const mostrar = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        const sortBy = req.query.sortBy || 'default'; // Por defecto, no se ordena
        const sortOrder = req.query.sortOrder || 'asc'; // Por defecto, orden ascendente

        const limitPerPage = 20;
        const page = parseInt(req.query.page) || 1;

        let employers;
        if (searchTerm) {
            employers = await Employer.find({ 'Employer Name': { $regex: new RegExp(searchTerm, 'i') } })
                                        .sort({ [sortBy]: sortOrder }); // Aplicar ordenamiento si es necesario
        } else {
            const startIndex = (page - 1) * limitPerPage;

            employers = await Employer.find()
                                      .skip(startIndex)
                                      .limit(limitPerPage)
                                      .sort({ [sortBy]: sortOrder }); // Aplicar ordenamiento si es necesario
        }

        const totalEmployers = await Employer.countDocuments();
        const totalPages = Math.ceil(totalEmployers / limitPerPage);

        res.render('info', { employers: employers || [], totalPages: totalPages, currentPage: page });
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
    try {
        const id = req.body.id_editar;
        const updatedData = {         
            'Employer Name': req.body.name_edit,
            'Address': req.body.address_edit,
            'Postcode': req.body.post_edit,
            'Percent Difference in Mean Hourly Wage': req.body.meanh_edit,
            'Percent Difference in Median Hourly Wage': req.body.medianh_edit,
            'Percent Difference in Mean Bonus Received': req.body.meanb_edit,
            'Percent Difference in Median Bonus Received': req.body.medianb_edit,
            'Percentage of Males that Received a Bonus': req.body.malesr_edit,
            'Percentage of Females that Received a Bonus': req.body.femalesr_edit,
            'Proportion of Males in Lower Quartile': req.body.propmalesl_edit,
            'Proportion of Females in Lower Quartile': req.body.propfemalesl_edit,
            'Proportion of Males in Lower Middle Quartile': req.body.propmaleslm_edit,
            'Proportion of Females in Lower Middle Quartile': req.body.propfemaleslm_edit,
            'Proportion of Males in Upper Middle Quartile': req.body.propmalesup_edit,
            'Proportion of Females in Upper Middle Quartile': req.body.propfemalesup_edit,
            'Proportion of Males in Top Quartile': req.body.propmalestop_edit,
            'Proportion of Females in Top Quartile': req.body.propfemalestop_edit,
            'Company Link To GPG Info': req.body.link_edit,
            'Responsible Person':req.body.resp_edit,
            'Employer Size': req.body.size_edit,
            'Current Name': req.body.current_edit,
            'Submitted After The Deadline': req.body.submit_edit,
            company_id: req.body.company_id
 }; 

        //delete updatedData.id_editar;

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

const borrar = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedEmployer = await Employer.findByIdAndDelete(id);

        if (!deletedEmployer) {
            return res.status(404).json({ message: 'No se encontró el empleador para borrar' });
        }

        res.redirect('/');
    } catch (error) {
        console.error('Error eliminando al empleador:', error);
        res.status(500).send('Error eliminando al empleador');
    }
};

const search = async (req, res) => {
    try {
        const nameEmployer = req.query.employerName;
        const searchEmployer = await Employer.find({ 'Employer Name': { $regex: new RegExp(nameEmployer, 'i') } });

        if (!searchEmployer || searchEmployer.length === 0) {
            return res.status(404).json({ message: 'No se encontró ningún empleador' });
        }

        res.render('search_results', { employers: searchEmployer });
    } catch (error) {
        console.error('Error buscando al empleador:', error);
        res.status(500).send('Error buscando al empleador');
    }
};


module.exports = { mostrar, crear, editar, borrar,search };
