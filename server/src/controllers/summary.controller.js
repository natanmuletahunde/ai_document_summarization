const Summary = require('../models/Summary.model');
const { extractTextFromFile } = require('../services/fileParser.service');
const { generateSummary } = require('../services/summarizer.service');
const { analyzeSentiment } = require('../services/sentiment.service');
const { generatePDF } = require('../utils/pdfGenerator');

const uploadAndSummarize = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { summaryLength = 'medium' } = req.body;
    
    const originalText = await extractTextFromFile(req.file);
    
    if (!originalText || originalText.trim().length === 0) {
      return res.status(400).json({ error: 'Unable to extract text from file' });
    }

    const summaryText = generateSummary(originalText, summaryLength);
    const sentiment = analyzeSentiment(originalText);
    
    const summary = new Summary({
      title: req.file.originalname,
      originalText,
      summaryText,
      sentiment
    });

    await summary.save();

    res.status(201).json({
      _id: summary._id,
      title: summary.title,
      summaryText: summary.summaryText,
      sentiment: summary.sentiment,
      createdAt: summary.createdAt
    });
  } catch (error) {
    console.error('Error in uploadAndSummarize:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find()
      .select('title summaryText sentiment createdAt')
      .sort({ createdAt: -1 });
    
    res.json(summaries);
  } catch (error) {
    console.error('Error in getAllSummaries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getSummaryById = async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    
    if (!summary) {
      return res.status(404).json({ error: 'Summary not found' });
    }

    res.json(summary);
  } catch (error) {
    console.error('Error in getSummaryById:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteSummary = async (req, res) => {
  try {
    const summary = await Summary.findByIdAndDelete(req.params.id);
    
    if (!summary) {
      return res.status(404).json({ error: 'Summary not found' });
    }

    res.json({ message: 'Summary deleted successfully' });
  } catch (error) {
    console.error('Error in deleteSummary:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const exportSummary = async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    
    if (!summary) {
      return res.status(404).json({ error: 'Summary not found' });
    }

    const pdfBuffer = await generatePDF(summary.summaryText, `Summary of ${summary.title}`);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${summary.title}_summary.pdf"`);
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error in exportSummary:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  uploadAndSummarize,
  getAllSummaries,
  getSummaryById,
  deleteSummary,
  exportSummary
};