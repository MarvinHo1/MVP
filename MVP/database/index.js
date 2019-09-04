const mongoose = require('mongoose');
// const secret = require('./secret.js');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
});


mongoose.connect('mongodb://heroku_17g8nrzz:Test!123@ds217438.mlab.com:17438/heroku_17g8nrzz', { useNewUrlParser: true });

module.exports = db;
