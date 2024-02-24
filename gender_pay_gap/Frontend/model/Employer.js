const mongoose = require('mongoose');
const newObjectId = new mongoose.ObjectId();

const employerSchema = new mongoose.Schema({
    _id: newObjectId,
    employerName: String,
    address: String,
    postcode: String,
    percentDifferenceInMeanHourlyWage: Number,
    percentDifferenceInMedianHourlyWage: Number,
    percentDifferenceInMeanBonusReceived: Number,
    percentDifferenceInMedianBonusReceived: Number,
    percentageOfMalesThatReceivedABonus: Number,
    percentageOfFemalesThatReceivedABonus: Number,
    proportionOfMalesInLowerQuartile: Number,
    proportionOfFemalesInLowerQuartile: Number,
    proportionOfMalesInLowerMiddleQuartile: Number,
    proportionOfFemalesInLowerMiddleQuartile: Number,
    proportionOfMalesInUpperMiddleQuartile: Number,
    proportionOfFemalesInUpperMiddleQuartile: Number,
    proportionOfMalesInTopQuartile: Number,
    proportionOfFemalesInTopQuartile: Number,
    companyLinkToGPGInfo: String,
    responsiblePerson: String,
    employerSize: String,
    currentName: String,
    submittedAfterTheDeadline: Boolean,
    company_id: Number
})

const Employer = mongoose.model('Employer', employerSchema, 'Employer');
module.exports = Employer;


