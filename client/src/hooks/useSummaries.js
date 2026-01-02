import { useState, useEffect } from 'react';
import { getAllSummaries, deleteSummary } from '../services/api';

const useSummaries = () => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSummaries = async () => {
    try {
      setLoading(true);
      const data = await getAllSummaries();
      setSummaries(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch summaries');
      console.error('Error fetching summaries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSummary = async (id) => {
    try {
      await deleteSummary(id);
      setSummaries(prev => prev.filter(summary => summary._id !== id));
    } catch (err) {
      setError('Failed to delete summary');
      console.error('Error deleting summary:', err);
    }
  };

  const addSummary = (summary) => {
    setSummaries(prev => [summary, ...prev]);
  };

  useEffect(() => {
    fetchSummaries();
  }, []);

  return {
    summaries,
    loading,
    error,
    fetchSummaries,
    handleDeleteSummary,
    addSummary
  };
};

export default useSummaries;