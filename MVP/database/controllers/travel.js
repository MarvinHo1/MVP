const request = require('request');
const travel = require('../models/travel.js');
const db = require('../index.js');
const flickrPhotos = require('../apiKey/api.js');

const findJournalNoteAndUpdate = (req, res) => {
  travel.update({
    country: req.body.journalNotes.country,
    destination: req.body.journalNotes.destination,
    journalNotes: req.body.journalNotes.journalNotes,
  },
  {
    $set: {
      country: req.body.journalNotes.country,
      destination: req.body.journalNotes.destination,
      journalNotes: req.body.journalNotes.journalNote,
    },
  }, { upsert: true }).exec((err, notes) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(notes);
    }
  });
};

const travelPhotos = (req, res) => {
  request(flickrPhotos, (error, response, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      const flickrPhotoInfo = JSON.parse(body);
      res.send(flickrPhotoInfo.photos.photo);
    }
  });
};

const travelNotes = (req, res) => {
  travel.find({ country: req.query.ID }).exec((err, notes) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(notes);
    }
  });
};

module.exports = {
  findJournalNoteAndUpdate,
  travelPhotos,
  travelNotes,
};
