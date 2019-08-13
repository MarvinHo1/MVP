const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  country: String,
  destination: String,
  journalNotes: String,
});

const travel = mongoose.model('travel', travelSchema);

module.exports = travel;
