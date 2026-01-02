const preprocessText = (text) => {
  const stopWords = new Set([
    'the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'as', 'are', 'was', 'were',
    'been', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'shall', 'to', 'of', 'in', 'for', 'with',
    'by', 'from', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
    'between', 'among', 'under', 'over', 'again', 'further', 'then', 'once'
  ]);

  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => !stopWords.has(word))
    .join(' ');
};

const calculateSentenceScores = (sentences, preprocessedText) => {
  const words = preprocessedText.split(' ');
  const wordFrequencies = {};
  
  words.forEach(word => {
    wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
  });

  const maxFrequency = Math.max(...Object.values(wordFrequencies));
  
  Object.keys(wordFrequencies).forEach(word => {
    wordFrequencies[word] = wordFrequencies[word] / maxFrequency;
  });

  const sentenceScores = sentences.map(sentence => {
    const wordsInSentence = sentence.toLowerCase().split(/\s+/);
    let score = 0;
    let wordCount = 0;

    wordsInSentence.forEach(word => {
      if (wordFrequencies[word]) {
        score += wordFrequencies[word];
        wordCount++;
      }
    });

    return {
      sentence: sentence.trim(),
      score: wordCount > 0 ? score / wordCount : 0,
      wordCount
    };
  });

  return sentenceScores;
};

const generateSummary = (text, summaryLength = 'medium') => {
  if (!text || text.trim().length === 0) {
    return '';
  }

  const preprocessedText = preprocessText(text);
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  if (sentences.length <= 3) {
    return text;
  }

  const sentenceScores = calculateSentenceScores(sentences, preprocessedText);
  
  sentenceScores.sort((a, b) => b.score - a.score);

  let sentenceCount;
  switch (summaryLength) {
    case 'short':
      sentenceCount = Math.max(1, Math.ceil(sentences.length * 0.1));
      break;
    case 'medium':
      sentenceCount = Math.max(2, Math.ceil(sentences.length * 0.2));
      break;
    case 'detailed':
      sentenceCount = Math.max(3, Math.ceil(sentences.length * 0.3));
      break;
    default:
      sentenceCount = Math.max(2, Math.ceil(sentences.length * 0.2));
  }

  const topSentences = sentenceScores.slice(0, sentenceCount);
  
  topSentences.sort((a, b) => {
    const indexA = sentences.indexOf(a.sentence);
    const indexB = sentences.indexOf(b.sentence);
    return indexA - indexB;
  });

  return topSentences.map(item => item.sentence).join(' ');
};

module.exports = {
  generateSummary
};