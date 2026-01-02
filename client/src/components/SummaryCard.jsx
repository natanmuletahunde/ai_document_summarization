import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiCalendar, FiTrash2, FiDownload, FiEye } from 'react-icons/fi';

const SummaryCard = ({ summary, onDelete }) => {
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return 'bg-success/10 text-success border border-success/20';
      case 'Negative':
        return 'bg-error/10 text-error border border-error/20';
      default:
        return 'bg-glass text-gray-300 border border-glassBorder';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-glass border border-glassBorder rounded-2xl p-6 hover:-translate-y-1 transition-all hover:shadow-glow group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-white truncate flex-1">
          {summary.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(summary.sentiment)}`}>
          {summary.sentiment}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {summary.summaryText}
        </p>
      </div>

      <div className="flex items-center text-xs text-gray-400 mb-6">
        <FiCalendar className="mr-1" />
        {formatDate(summary.createdAt)}
      </div>

      <div className="flex justify-between items-center gap-2">
        <Link
          to={`/summary/${summary._id}`}
          className="flex items-center px-4 py-2 bg-aiPrimary/20 text-aiPrimary rounded-xl hover:bg-aiPrimary/30 transition-all text-sm font-medium"
        >
          <FiEye className="mr-2" />
          View
        </Link>
        
        <div className="flex gap-2">
          <button
            onClick={() => window.open(`/api/export/${summary._id}`, '_blank')}
            className="flex items-center px-3 py-2 bg-success/20 text-success rounded-xl hover:bg-success/30 transition-all text-sm"
          >
            <FiDownload />
          </button>
          
          <button
            onClick={() => onDelete(summary._id)}
            className="flex items-center px-3 py-2 bg-error/20 text-error rounded-xl hover:bg-error/30 transition-all text-sm"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;