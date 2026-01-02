const analyzeSentiment = (text) => {
  const positiveWords = [
    'good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'awesome',
    'positive', 'best', 'love', 'perfect', 'brilliant', 'outstanding', 'superb',
    'magnificent', 'delightful', 'impressive', 'remarkable', 'exceptional', 'favorable'
  ];

  const negativeWords = [
    'bad', 'terrible', 'awful', 'horrible', 'worst', 'hate', 'disgusting', 'disappointing',
    'negative', 'poor', 'inadequate', 'unsatisfactory', 'substandard', 'mediocre',
    'unacceptable', 'dreadful', 'lousy', 'appalling', 'disastrous', 'unpleasant'
  ];

  if (!text || text.trim().length === 0) {
    return 'Neutral';
  }

  const words = text.toLowerCase().split(/\s+/);
  let positiveCount = 0;
  let negativeCount = 0;

  words.forEach(word => {
    const cleanWord = word.replace(/[^\w]/g, '');
    if (positiveWords.includes(cleanWord)) {
      positiveCount++;
    } else if (negativeWords.includes(cleanWord)) {
      negativeCount++;
    }
  });

  const totalSentimentWords = positiveCount + negativeCount;
  
  if (totalSentimentWords === 0) {
    return 'Neutral';
  }

  const positiveRatio = positiveCount / totalSentimentWords;
  
  if (positiveRatio >= 0.6) {
    return 'Positive';
  } else if (positiveRatio <= 0.4) {
    return 'Negative';
  } else {
    return 'Neutral';
  }
};

module.exports = {
  analyzeSentiment
};