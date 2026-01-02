import React from 'react';
import Navbar from '../components/Navbar';
import SummaryCard from '../components/SummaryCard';
import useSummaries from '../hooks/useSummaries';
import { FiLoader, FiInbox, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { summaries, loading, error, handleDeleteSummary } = useSummaries();

  if (loading) {
    return (
      <div className="min-h-screen bg-bgPrimary font-inter">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <FiLoader className="animate-spin text-4xl text-aiPrimary mb-4" />
              <p className="text-gray-300">Loading summaries...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgPrimary font-inter">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Document Summaries
          </h1>
          <p className="text-gray-400 text-lg">
            Manage and view your processed document summaries
          </p>
        </div>

        {error && (
          <div className="bg-error/10 border border-error/20 rounded-2xl p-4 mb-8">
            <p className="text-error">{error}</p>
          </div>
        )}

        {summaries.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <FiInbox className="text-8xl text-gray-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No summaries yet
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Upload your first document to get started with AI-powered analysis
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-aiPrimary to-aiSecondary hover:shadow-glow transition font-semibold text-white rounded-xl"
            >
              <FiPlus className="mr-2" />
              Upload Document
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {summaries.map((summary) => (
              <SummaryCard
                key={summary._id}
                summary={summary}
                onDelete={handleDeleteSummary}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;