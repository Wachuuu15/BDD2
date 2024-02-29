const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    'Employer Name': String,
    'Address': String,
    'Postcode': String,
    'Percent Difference in Mean Hourly Wage': Number,
    'Percent Difference in Median Hourly Wage': Number,
    'Percent Difference in Mean Bonus Received': Number,
    'Percent Difference in Median Bonus Received': Number,
    'Percentage of Males that Received a Bonus': Number,
    'Percentage of Females that Received a Bonus': Number,
    'Proportion of Males in Lower Quartile': Number,
    'Proportion of Females in Lower Quartile': Number,
    'Proportion of Males in Lower Middle Quartile': Number,
    'Proportion of Females in Lower Middle Quartile': Number,
    'Proportion of Males in Upper Middle Quartile': Number,
    'Proportion of Females in Upper Middle Quartile': Number,
    'Proportion of Males in Top Quartile': Number,
    'Proportion of Females in Top Quartile': Number,
    'Company Link To GPG Info': String,
    'Responsible Person': String,
    'Employer Size': String,
    'Current Name': String,
    'Submitted After The Deadline': Boolean,
    company_id: Number
})

const Employer = mongoose.model('Employer', employerSchema, 'Employer');
module.exports = Employer;


