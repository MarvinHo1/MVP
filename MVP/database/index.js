const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
});

mongoose.connect('mongodb://localhost/MVP', { useNewUrlParser: true });

module.exports = db;
