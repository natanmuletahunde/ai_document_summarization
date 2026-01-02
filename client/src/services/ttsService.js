class TextToSpeechService {
  constructor() {
    this.synthesis = window.speechSynthesis;
    this.utterance = null;
    this.isSupported = 'speechSynthesis' in window;
    this.voices = [];
    this.currentVoice = null;
    this.loadVoices();
  }

  loadVoices() {
    if (this.isSupported) {
      this.voices = this.synthesis.getVoices();
      // Set default English voice
      this.currentVoice = this.voices.find(voice => 
        voice.lang.includes('en') && voice.name.includes('Google') || 
        voice.name.includes('Microsoft') ||
        voice.name.includes('Samantha') ||
        voice.name.includes('Karen')
      ) || this.voices[0];
    }
  }

  getAvailableVoices() {
    return this.voices.filter(voice => 
      voice.lang.includes('en') || voice.lang.includes('es') || voice.lang.includes('fr')
    );
  }

  speak(text, options = {}) {
    if (!this.isSupported) {
      console.warn('Text-to-speech is not supported in this browser');
      return false;
    }

    // Cancel any ongoing speech
    this.stop();

    this.utterance = new SpeechSynthesisUtterance(text);
    
    // Apply options
    this.utterance.voice = options.voice || this.currentVoice;
    this.utterance.rate = options.rate || 1;
    this.utterance.pitch = options.pitch || 1;
    this.utterance.volume = options.volume || 1;

    // Event listeners
    if (options.onStart) {
      this.utterance.onstart = options.onStart;
    }
    if (options.onEnd) {
      this.utterance.onend = options.onEnd;
    }
    if (options.onError) {
      this.utterance.onerror = options.onError;
    }

    this.synthesis.speak(this.utterance);
    return true;
  }

  pause() {
    if (this.isSupported && this.synthesis.speaking) {
      this.synthesis.pause();
    }
  }

  resume() {
    if (this.isSupported && this.synthesis.paused) {
      this.synthesis.resume();
    }
  }

  stop() {
    if (this.isSupported) {
      this.synthesis.cancel();
      this.utterance = null;
    }
  }

  isPlaying() {
    return this.isSupported && this.synthesis.speaking && !this.synthesis.paused;
  }

  isPaused() {
    return this.isSupported && this.synthesis.paused;
  }

  setVoice(voice) {
    this.currentVoice = voice;
  }

  setRate(rate) {
    if (this.utterance) {
      this.utterance.rate = Math.max(0.5, Math.min(2, rate));
    }
  }

  setPitch(pitch) {
    if (this.utterance) {
      this.utterance.pitch = Math.max(0.5, Math.min(2, pitch));
    }
  }

  setVolume(volume) {
    if (this.utterance) {
      this.utterance.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

// Create singleton instance
const ttsService = new TextToSpeechService();

// Load voices when they become available
if (typeof window !== 'undefined') {
  const handleVoicesChanged = () => {
    ttsService.loadVoices();
  };
  
  window.speechSynthesis?.addEventListener('voiceschanged', handleVoicesChanged);
  
  // Initial load
  setTimeout(() => {
    ttsService.loadVoices();
  }, 100);
}

export default ttsService;