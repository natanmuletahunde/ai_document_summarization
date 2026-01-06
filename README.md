
# 🤖 AI Document Summarizer

An **AI-driven web application** that analyzes lengthy documents and generates **concise summaries**, performs **sentiment analysis**, and allows users to **save, manage, listen to, and export results** — all wrapped in a **futuristic AI SaaS UI**.


## 🌟 Application Preview

> **Futuristic glassmorphism UI with AI-powered document understanding**

### 🏠 Home & Upload Interface

<img width="1920" height="1080" alt="Home Page" src="https://github.com/user-attachments/assets/63df3faa-71df-4082-aff9-054741e19f74" />

### 🧠 AI Summary Generation View

<img width="1920" height="1080" alt="Summary Generation" src="https://github.com/user-attachments/assets/cd31012d-e601-4a15-9111-a7fe9ce72c22" />

### 😊 Sentiment Analysis & Visualization

<img width="1920" height="1080" alt="Sentiment Analysis" src="https://github.com/user-attachments/assets/65021279-c385-4a9b-a591-f3053c343f7b" />

### 🔊 Voice Reader & Saved Summaries Dashboard

<img width="1920" height="1080" alt="Voice Reader & Dashboard" src="https://github.com/user-attachments/assets/6a0f349d-d3f8-47bf-baf0-230e549da12d" />

---

## ✨ Key Features

* 📤 **Document Upload**

  * Supports **PDF, DOCX, and TXT**
  * Drag-and-drop interface with file validation

* 🧾 **AI-Generated Summaries**

  * Extractive & abstractive summarization
  * Adjustable summary length
  * Clean, readable output

* 😊 **Sentiment Analysis**

  * Detects **Positive / Neutral / Negative** tone
  * Visualized using charts and indicators

* 🔊 **AI Voice Reader**

  * Natural text-to-speech
  * Reads summaries aloud

* 🎛️ **Advanced Voice Controls**

  * Play / Pause / Stop
  * Voice selection
  * Speed (0.5x – 2x)
  * Pitch adjustment

* 💾 **Save & Manage Summaries**

  * Stored securely in MongoDB
  * Full **CRUD** support

* 📄 **Export to PDF**

  * Professionally formatted summaries
  * One-click download

* 🎨 **Futuristic UI**

  * Glassmorphism
  * AI SaaS-style gradients
  * Micro-interactions & animations

* 🌙 **Dark Theme**

  * Eye-friendly premium dark UI
  * Neon glow accents

---

## 🧠 How It Works (System Flow)

1. User uploads a document
2. Backend parses the file (PDF / DOCX / TXT)
3. NLP engine processes text
4. Summary + sentiment are generated
5. Results are stored in MongoDB
6. User can:

   * Listen via voice reader
   * Save summaries
   * Export to PDF

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React 18 (Vite)
* Tailwind CSS (custom futuristic theme)
* React Router
* Axios
* Chart.js (sentiment visualization)
* React Dropzone
* Inter Font

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Custom NLP logic
* PDF & DOCX parsers
* PDFKit (exporting summaries)

---

## 🎨 UI Design System

* **Color Scheme**: Indigo → Cyan AI gradients
* **Glassmorphism**: Backdrop blur + transparency
* **Typography**: Inter font with strong hierarchy
* **Animations**: Smooth transitions & hover effects
* **Dark Theme**: Premium SaaS-style experience

---

## 🔊 Voice Reader Features

* Web Speech API
* Multiple voices & languages
* Real-time playback controls
* Speed & pitch adjustment
* Animated visual feedback
* Fully responsive UI integration

---

## 📦 Installation & Setup

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (running locally or cloud)
* npm or yarn

### Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/ai-document-summarizer.git
cd ai-document-summarizer
```

2. Install all dependencies:

```bash
npm run install-deps
```

3. Environment Variables:

* MongoDB default:

```env
mongodb://localhost:27017/ai-document-summarizer
```

* Backend port: `5000`
* Frontend port: `3000`

4. Start the app:

```bash
npm run dev
```

✔ Frontend → [http://localhost:3000](http://localhost:3000)
✔ Backend → [http://localhost:5000](http://localhost:5000)

---

## 🚀 Deployment

### 🌟 Recommended Platforms

* **Render** (Best overall)
* **Railway** (Easiest)
* **Vercel** (Frontend)
* **Heroku**

### 🚂 Railway (5 Minutes)

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

Set:

```env
MONGO_URI=your-mongodb-uri
NODE_ENV=production
```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/summarize`     | Upload & summarize document |
| GET    | `/api/summaries`     | Get all summaries           |
| GET    | `/api/summaries/:id` | Get summary by ID           |
| DELETE | `/api/summaries/:id` | Delete summary              |
| GET    | `/api/export/:id`    | Export summary as PDF       |

---

## 📁 Project Structure

```
ai-document-summarizer/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── hooks/
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
└── README.md
```

---

## 🎯 Academic & Practical Value

* Demonstrates **full-stack AI system**
* Covers **NLP, UI/UX, databases, APIs**
* Suitable for:

  * Final year projects
  * Research demos
  * Portfolio showcase
  * Startup MVP

---

If you want next:

* ✅ **Advisor-level architecture diagram**
* ✅ **System sequence diagram**
* ✅ **UI/UX design justification**
* ✅ **Project report (DOCX or PDF)**

Just tell me 👍
