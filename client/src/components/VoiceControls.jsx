import React, { useState, useEffect } from 'react';
import ttsService from '../services/ttsService';
import { FiPlay, FiPause, FiSquare, FiVolume2, FiSettings } from 'react-icons/fi';

const VoiceControls = ({ text, onPlay, onPause, onStop, onEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    const voices = ttsService.getAvailableVoices();
    setAvailableVoices(voices);
    setSelectedVoice(ttsService.currentVoice || voices[0]);
  }, []);

  useEffect(() => {
    const handleSpeechEnd = () => {
      setIsPlaying(false);
      setIsPaused(false);
      if (onEnd) onEnd();
    };

    const handleSpeechStart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      if (onPlay) onPlay();
    };

    return () => {
      ttsService.stop();
    };
  }, [onPlay, onEnd]);

  const handlePlay = () => {
    if (isPaused) {
      ttsService.resume();
      setIsPaused(false);
      if (onPlay) onPlay();
    } else {
      const success = ttsService.speak(text, {
        voice: selectedVoice,
        rate,
        pitch,
        onStart: () => {
          setIsPlaying(true);
          setIsPaused(false);
          if (onPlay) onPlay();
        },
        onEnd: () => {
          setIsPlaying(false);
          setIsPaused(false);
          if (onEnd) onEnd();
        }
      });
    }
  };

  const handlePause = () => {
    ttsService.pause();
    setIsPaused(true);
    if (onPause) onPause();
  };

  const handleStop = () => {
    ttsService.stop();
    setIsPlaying(false);
    setIsPaused(false);
    if (onStop) onStop();
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    ttsService.setRate(newRate);
  };

  const handlePitchChange = (newPitch) => {
    setPitch(newPitch);
    ttsService.setPitch(newPitch);
  };

  const handleVoiceChange = (voice) => {
    setSelectedVoice(voice);
    ttsService.setVoice(voice);
  };

  return (
    <div className="bg-glass border border-glassBorder rounded-2xl p-4 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FiVolume2 className="text-aiPrimary text-xl" />
          <span className="text-white font-semibold">AI Voice Reader</span>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FiSettings className="text-lg" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePlay}
          disabled={!text || isPlaying}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            isPlaying
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-aiPrimary text-white hover:bg-aiSecondary hover:shadow-glow'
          }`}
        >
          <FiPlay className="text-lg" />
        </button>

        <button
          onClick={handlePause}
          disabled={!isPlaying || isPaused}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            !isPlaying || isPaused
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-warning text-white hover:bg-yellow-600'
          }`}
        >
          <FiPause className="text-lg" />
        </button>

        <button
          onClick={handleStop}
          disabled={!isPlaying}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            !isPlaying
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-error text-white hover:bg-red-600'
          }`}
        >
          <FiSquare className="text-lg" />
        </button>

        <div className="ml-4">
          <div className={`text-xs px-2 py-1 rounded-full ${
            isPlaying 
              ? isPaused 
                ? 'bg-warning/20 text-warning'
                : 'bg-success/20 text-success animate-pulse-slow'
              : 'bg-glass text-gray-400'
          }`}>
            {isPlaying ? (isPaused ? 'Paused' : 'Playing') : 'Stopped'}
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="mt-4 space-y-4 pt-4 border-t border-glassBorder">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Voice Selection</label>
            <select
              value={selectedVoice?.name || ''}
              onChange={(e) => {
                const voice = availableVoices.find(v => v.name === e.target.value);
                handleVoiceChange(voice);
              }}
              className="w-full px-3 py-2 bg-glass border border-glassBorder rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-aiPrimary"
            >
              {availableVoices.map((voice, index) => (
                <option key={index} value={voice.name} className="bg-bgSecondary">
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Speed: {rate.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => handleRateChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-glass rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Pitch: {pitch.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => handlePitchChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-glass rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceControls;