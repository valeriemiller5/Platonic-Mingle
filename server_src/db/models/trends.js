const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define favTrendSchema
const favTrendSchema = new Schema({
  name: { type: String, unique: false },
  url: { type: String, unique: false }
});

// Create reference to User & export
const Trend = mongoose.model('Trend', favTrendSchema);
module.exports = Trend;