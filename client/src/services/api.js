import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

export const uploadDocument = async (file, summaryLength) => {
  const formData = new FormData();
  formData.append('document', file);
  formData.append('summaryLength', summaryLength);

  const response = await api.post('/summarize', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const getAllSummaries = async () => {
  const response = await api.get('/summaries');
  return response.data;
};

export const getSummaryById = async (id) => {
  const response = await api.get(`/summaries/${id}`);
  return response.data;
};

export const deleteSummary = async (id) => {
  const response = await api.delete(`/summaries/${id}`);
  return response.data;
};

export const exportSummary = async (id) => {
  const response = await api.get(`/export/${id}`, {
    responseType: 'blob',
  });
  
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `summary_${id}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};