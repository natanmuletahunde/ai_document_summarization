const PDFDocument = require('pdfkit');

const generatePDF = (summary, title) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const chunks = [];

      doc.on('data', chunk => chunks.push(chunk));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        resolve(pdfBuffer);
      });

      doc.fontSize(20).text(title || 'Document Summary', { align: 'center' });
      doc.moveDown();
      
      doc.fontSize(12).text(summary, { align: 'left' });
      
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generatePDF
};