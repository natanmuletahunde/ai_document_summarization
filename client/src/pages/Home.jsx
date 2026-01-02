import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UploadDocument from '../components/UploadDocument';
import SentimentChart from '../components/SentimentChart';
import VoiceControls from '../components/VoiceControls';
import { uploadDocument } from '../services/api';
import { FiCheckCircle, FiAlertCircle, FiFileText } from 'react-icons/fi';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (file, summaryLength) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await uploadDocument(file, summaryLength);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to process document');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-bgPrimary font-inter">
      <Navbar />
      
      <main className="pt-32 text-center max-w-4xl mx-auto px-6 pb-20">
        {!result ? (
          <>
            <section className="pt-32 text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-aiPrimary to-aiSecondary bg-clip-text text-transparent">
                Understand Any Document Instantly
              </h1>
              <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                Upload documents. Let AI extract knowledge.
              </p>
            </section>

            {error && (
              <div className="max-w-2xl mx-auto mb-6 mt-8">
                <div className="bg-error/10 border border-error/20 rounded-2xl p-4">
                  <div className="flex items-center">
                    <FiAlertCircle className="text-error text-xl mr-2" />
                    <span className="text-error">{error}</span>
                  </div>
                </div>
              </div>
            )}

            <UploadDocument onUpload={handleUpload} loading={loading} />
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-success/10 border border-success/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center">
                <FiCheckCircle className="text-success text-2xl mr-3" />
                <span className="text-success text-lg font-medium">Document processed successfully!</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-glass border border-glassBorder rounded-3xl p-8 shadow-soft">
                <div className="flex items-center mb-6">
                  <FiFileText className="text-aiPrimary text-2xl mr-3" />
                  <h3 className="text-2xl font-bold">AI Summary</h3>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-4 text-gray-200">{result.title}</h4>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap mb-6">{result.summaryText}</p>
                  <VoiceControls text={result.summaryText} />
                </div>
              </div>

              <div>
                <SentimentChart sentiment={result.sentiment} />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-aiPrimary to-aiSecondary hover:shadow-glow transition font-semibold text-white"
              >
                Process Another Document
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;