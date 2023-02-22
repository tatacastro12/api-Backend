const mongoose = require('mongoose')

const songsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  interpreter: {
    type: String,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  imgurl:{
  type: String,
  required: false
}

});

module.exports = mongoose.model("songs", songsSchema)
