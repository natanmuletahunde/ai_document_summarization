import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SentimentChart from '../components/SentimentChart';
import VoiceControls from '../components/VoiceControls';
import { getSummaryById, deleteSummary, exportSummary } from '../services/api';
import { FiCalendar, FiFileText, FiArrowLeft, FiTrash2, FiDownload, FiLoader } from 'react-icons/fi';

const SummaryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const data = await getSummaryById(id);
        setSummary(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch summary details');
        console.error('Error fetching summary:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this summary?')) {
      try {
        await deleteSummary(id);
        navigate('/dashboard');
      } catch (err) {
        setError('Failed to delete summary');
        console.error('Error deleting summary:', err);
      }
    }
  };

  const handleExport = async () => {
    try {
      await exportSummary(id);
    } catch (err) {
      setError('Failed to export summary');
      console.error('Error exporting summary:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bgPrimary font-inter">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <FiLoader className="animate-spin text-4xl text-aiPrimary mb-4" />
              <p className="text-gray-300">Loading summary details...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !summary) {
    return (
      <div className="min-h-screen bg-bgPrimary font-inter">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-error/10 border border-error/20 rounded-2xl p-6">
            <p className="text-error text-lg mb-4">{error || 'Summary not found'}</p>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-aiPrimary hover:text-aiSecondary transition-colors font-medium"
            >
              ← Back to Dashboard
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgPrimary font-inter">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Dashboard
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-glass border border-glassBorder rounded-3xl p-8 shadow-soft">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-3">
                    {summary.title}
                  </h1>
                  <div className="flex items-center text-sm text-gray-400">
                    <FiCalendar className="mr-2" />
                    {formatDate(summary.createdAt)}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiFileText className="mr-3 text-aiPrimary" />
                  AI Summary
                </h2>
                <div className="bg-glass rounded-2xl p-6 border border-glassBorder">
                  <p className="text-gray-200 whitespace-pre-wrap leading-relaxed text-lg mb-6">
                    {summary.summaryText}
                  </p>
                  <VoiceControls text={summary.summaryText} />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Original Text Preview
                </h2>
                <div className="bg-glass rounded-2xl p-6 border border-glassBorder">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {summary.originalText.length > 500 
                      ? `${summary.originalText.substring(0, 500)}...`
                      : summary.originalText
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <SentimentChart sentiment={summary.sentiment} />

            <div className="bg-glass border border-glassBorder rounded-3xl p-6 shadow-soft">
              <h3 className="text-xl font-bold text-white mb-6">
                Actions
              </h3>
              <div className="space-y-4">
                <button
                  onClick={handleExport}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-success to-emerald-600 hover:shadow-glow transition font-semibold text-white rounded-xl"
                >
                  <FiDownload className="mr-2" />
                  Export as PDF
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-error to-red-600 hover:shadow-glow transition font-semibold text-white rounded-xl"
                >
                  <FiTrash2 className="mr-2" />
                  Delete Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SummaryDetails;