# AI Document Summarizer

An AI-driven web application that analyzes lengthy documents and generates concise summaries, performs sentiment analysis, and allows users to save and export results.

## Features

- 📤 **Document Upload**: Support for PDF, DOCX, and TXT files with drag-and-drop
- 🧾 **AI-Generated Summaries**: Extractive and abstractive summarization with adjustable length
- 😊 **Sentiment Analysis**: Detect document tone (Positive, Neutral, Negative) with visual indicators
- 🔊 **Voice Reader**: AI-powered text-to-speech with natural voice synthesis
- 🎛️ **Voice Controls**: Play/pause/stop, voice selection, speed & pitch adjustment
- 💾 **Save & Manage**: Store summaries in MongoDB with full CRUD operations
- 📄 **Export Options**: Download summaries as PDF
- 🎨 **Futuristic UI**: Premium glassmorphism design with AI SaaS aesthetics
- ✨ **Micro-interactions**: Smooth animations, hover effects, and loading states
- 🌙 **Dark Theme**: Eye-friendly dark interface with gradient accents

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS with custom futuristic theme
- Inter font for modern typography
- React Router for navigation
- Axios for API requests
- Chart.js for sentiment visualization
- React Dropzone for file uploads

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- Custom NLP processing algorithms
- PDF & DOCX parsing libraries
- PDFKit for PDF generation

### UI Design System
- **Color Scheme**: AI-focused gradients (Indigo to Cyan)
- **Glassmorphism**: Backdrop blur effects with semi-transparent layers
- **Typography**: Inter font family with clear hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Dark Theme**: Premium dark background with accent glows

### Voice Features
- **Natural Speech**: Web Speech API for high-quality voice synthesis
- **Multiple Voices**: Selection of different voice options and languages
- **Playback Controls**: Play, pause, stop functionality
- **Voice Settings**: Adjustable speed (0.5x-2x) and pitch controls
- **Visual Feedback**: Real-time status indicators with animations
- **Responsive Design**: Voice controls integrated seamlessly into glassmorphism UI

## Installation

1. Clone the repository
2. Install dependencies for all packages:
   ```bash
   npm run install-deps
   ```

3. Set up environment variables:
   - Root `.env` file is already configured for MongoDB at `mongodb://localhost:27017/ai-document-summarizer`
   - Server `.env` file is automatically configured
   - Default port: 5000

4. Make sure MongoDB is running on your system

5. Start the application:
   ```bash
   npm run dev
   ```

This will start both the frontend (port 3000) and backend (port 5000) simultaneously.

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB installed and running
- npm or yarn package manager

## API Endpoints

- `POST /api/summarize` - Upload and summarize document
- `GET /api/summaries` - Fetch all saved summaries
- `GET /api/summaries/:id` - Get summary details
- `DELETE /api/summaries/:id` - Delete summary
- `GET /api/export/:id` - Export summary as PDF

## Project Structure

```
ai-document-summarizer/
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── hooks/         # Custom hooks
├── server/                # Backend (Node.js + Express)
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
└── README.md
```