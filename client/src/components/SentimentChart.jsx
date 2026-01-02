import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = ({ sentiment }) => {
  const getChartData = (sentiment) => {
    const data = {
      Positive: 75,
      Neutral: 50,
      Negative: 25
    };

    const colors = {
      Positive: '#4ADE80',
      Neutral: '#6b7280',
      Negative: '#F87171'
    };

    const selectedSentiment = sentiment || 'Neutral';
    const value = data[selectedSentiment];
    const remainingValue = 100 - value;

    return {
      labels: [selectedSentiment, 'Other'],
      datasets: [
        {
          data: [value, remainingValue],
          backgroundColor: [colors[selectedSentiment], 'rgba(255,255,255,0.05)'],
          borderColor: [colors[selectedSentiment], 'rgba(255,255,255,0.1)'],
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed}%`;
          },
        },
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
      },
    },
    cutout: '70%',
  };

  const getSentimentStyle = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return { bg: 'bg-success/10', text: 'text-success', emoji: '😊' };
      case 'Negative':
        return { bg: 'bg-error/10', text: 'text-error', emoji: '😔' };
      default:
        return { bg: 'bg-glass', text: 'text-gray-300', emoji: '😐' };
    }
  };

  const sentimentStyle = getSentimentStyle(sentiment);

  return (
    <div className="bg-glass border border-glassBorder rounded-3xl p-6 shadow-soft">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Sentiment Analysis
      </h3>
      
      <div className="flex flex-col items-center">
        <div className="w-48 h-48">
          <Doughnut data={getChartData(sentiment)} options={options} />
        </div>
        
        <div className="mt-6 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${sentimentStyle.bg} ${sentimentStyle.text} border border-white/10`}>
            <span className="text-2xl">{sentimentStyle.emoji}</span>
            <span className="font-semibold">{sentiment} Tone</span>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Document Tone Analysis
          </p>
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;