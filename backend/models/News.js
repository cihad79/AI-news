const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  summary: String,
  source: String,
  url: String,
  publishedAt: Date
});

module.exports = mongoose.model('News', newsSchema);