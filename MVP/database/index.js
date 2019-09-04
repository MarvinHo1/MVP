const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
});


mongoose.connect('mongodb://heroku_17g8nrzz:o0admc79undoo7cls9ui2gotpd@ds217438.mlab.com:17438/heroku_17g8nrzz', { useNewUrlParser: true });

module.exports = db;
