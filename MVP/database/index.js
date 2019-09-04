const mongoose = require('mongoose');
const secret = require('./secret.js');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
});

console.log(secret)

mongoose.connect(`mongodb://heroku_h1cvmhbb:${secret}@ds217438.mlab.com:17438/heroku_h1cvmhbb`, { useNewUrlParser: true });

module.exports = db;
