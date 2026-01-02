const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  uploadAndSummarize,
  getAllSummaries,
  getSummaryById,
  deleteSummary,
  exportSummary
} = require('../controllers/summary.controller');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOCX, and TXT files are allowed.'));
    }
  }
});

router.post('/summarize', upload.single('document'), uploadAndSummarize);
router.get('/summaries', getAllSummaries);
router.get('/summaries/:id', getSummaryById);
router.delete('/summaries/:id', deleteSummary);
router.get('/export/:id', exportSummary);

module.exports = router;