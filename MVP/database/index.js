const mongoose = require('mongoose');
const secret = require('./secret.js');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
});

// const MONGODB_URI = mongolab-animated-60210

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = db;
