const mongoose = requires('mongoose');

const EstimateSchema = new mongoose.Schema({
    serviceDescription: String,
    price: String,
    extimatedTime: Date
})

module.exports = mongoose.model('Estimate', EstimateSchema);