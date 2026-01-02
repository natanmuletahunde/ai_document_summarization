const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  originalText: {
    type: String,
    required: true
  },
  summaryText: {
    type: String,
    required: true
  },
  sentiment: {
    type: String,
    enum: ["Positive", "Neutral", "Negative"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Summary', summarySchema);