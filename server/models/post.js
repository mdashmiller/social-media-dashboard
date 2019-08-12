const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)
