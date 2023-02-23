const express = require ('express')
const router = express.Router();
const {getSongs, getSong, postSongs, putSongs, deleteSongs } = require('../controlles/controlles')

router.get('/', getSongs)
 router.get('/:id', getSong)
 router.post('/', postSongs)
 router.put('/:id', putSongs)
 router.delete('/:id', deleteSongs)

module.exports = router;

//create;

// router.post("/songs", (req, res) => {
//   const songs = songsSchema(req.body);
//   songs
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // get all songs

// router.get("/songs", (req, res) => {
//   songsSchema
//     .find()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // get a songs

// router.get("/:id", (req, res) => {
//   const {id} = req.params;
//   songsSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // update a songs

// router.put("/songs/:id", (req, res) => {
//   const { id} = req.params;
//   const {title, interpreter, year, imgurl } = req.body
//   songsSchema
//     .updateOne({_id: id}, {$set:{title, interpreter, year, imgurl}})
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// // delete a songs

// router.delete("/songs/:id", (req, res) => {
//   const { id} = req.params;
//   songsSchema
//     .remove({_id: id})
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// module.exports = router
