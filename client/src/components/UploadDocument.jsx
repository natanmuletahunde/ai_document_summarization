import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiLoader, FiFileText } from 'react-icons/fi';

const UploadDocument = ({ onUpload, loading }) => {
  const [summaryLength, setSummaryLength] = useState('medium');

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0], summaryLength);
    }
  }, [onUpload, summaryLength]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false,
    disabled: loading
  });

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Summary Length
        </label>
        <select
          value={summaryLength}
          onChange={(e) => setSummaryLength(e.target.value)}
          className="w-full px-4 py-3 bg-glass border border-glassBorder rounded-xl focus:outline-none focus:ring-2 focus:ring-aiPrimary focus:border-transparent text-white"
          disabled={loading}
        >
          <option value="short" className="bg-bgSecondary">Short (10% of content)</option>
          <option value="medium" className="bg-bgSecondary">Medium (20% of content)</option>
          <option value="detailed" className="bg-bgSecondary">Detailed (30% of content)</option>
        </select>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-3xl p-14 text-center bg-glass backdrop-blur-glass
                  hover:shadow-glow transition-all cursor-pointer ${
                    isDragActive
                      ? 'border-aiPrimary shadow-glow'
                      : 'border-aiPrimary/40'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <FiLoader className="animate-spin text-5xl text-aiPrimary" />
            </div>
            <p className="text-xl font-semibold text-gray-300">Analyzing document with AI…</p>
            <div className="animate-pulse bg-glass rounded-2xl p-4 mt-6 w-full max-w-sm">
              <div className="h-3 bg-white/10 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-white/10 rounded w-full"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <FiUpload className="text-6xl text-aiPrimary" />
            </div>
            <p className="text-xl font-semibold text-white mb-3">
              {isDragActive ? 'Release your document here' : 'Drop your document here'}
            </p>
            <p className="text-gray-400 text-sm">PDF, DOCX, TXT supported • Max 10MB</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadDocument;