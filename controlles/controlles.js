const songsSchema = require("../models/songs")
const musicCtrl ={}

musicCtrl.postSongs = (req, res) => {
  const songs = songsSchema(req.body);
  songs
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all songs

musicCtrl.getSongs= (req, res) => {
  songsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a songs

musicCtrl.getSong= (req, res) => {
  const {id} = req.params;
  songsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update a songs

musicCtrl.putSongs= (req, res) => {
  const { id} = req.params;
  const {title, interpreter, year, imgurl } = req.body
  songsSchema
    .updateOne({_id: id}, {$set:{title, interpreter, year, imgurl}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a songs

musicCtrl.deleteSongs= (req, res) => {
  const { id} = req.params;
  songsSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

 module.exports = musicCtrl
