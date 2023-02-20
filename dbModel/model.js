const mongoose = require('mongoose')

const FeatureScema = mongoose.Schema({
  title: String,
  discription: String,
  fullDiscription: String,
  imageUrl: String,
  date: {
    type: Date,
    default: Date.now
  }
})





const FeatureBlog = mongoose.model('featureBlog',FeatureScema)

module.exports = FeatureBlog;