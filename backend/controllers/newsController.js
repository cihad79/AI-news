const News = require('../models/News');

// GET /api/news
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news' });
  }
};

module.exports = { getAllNews };
