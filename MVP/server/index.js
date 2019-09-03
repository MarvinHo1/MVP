const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const controller = require('../database/controllers/travel.js');

const app = express();
const PORTNUM = 8888;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/Photos', (req, res) => {
  controller.travelPhotos(req, res);
});

app.get('/travelNotes', (req, res) => {
  controller.travelNotes(req, res);
});

app.put('/journalInformation', (req, res) => {
  controller.findJournalNoteAndUpdate(req, res);
});

app.delete('/deleteNote', (req, res) => {
  controller.deleteNotes(req, res);
});

app.listen(process.env.PORT || PORTNUM, () => {
  console.log(`listening on port ${PORTNUM}`);
});
