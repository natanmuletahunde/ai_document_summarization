const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const parsePDF = async (buffer) => {
  try {
    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    throw new Error('Error parsing PDF file');
  }
};

const parseDOCX = async (buffer) => {
  try {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    throw new Error('Error parsing DOCX file');
  }
};

const parseTXT = (buffer) => {
  return buffer.toString('utf8');
};

const extractTextFromFile = async (file) => {
  const { mimetype, buffer } = file;
  
  if (mimetype === 'application/pdf') {
    return await parsePDF(buffer);
  } else if (mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    return await parseDOCX(buffer);
  } else if (mimetype === 'text/plain') {
    return parseTXT(buffer);
  } else {
    throw new Error('Unsupported file type');
  }
};

module.exports = {
  extractTextFromFile
};