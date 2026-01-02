AI Document Summarizer
Unreal UI Styling Documentation (Tailwind CSS)
1️⃣ UI DESIGN PHILOSOPHY

Theme: Futuristic AI SaaS + Premium Dark UI
Goal: Make the user feel AI power visually the moment the page loads.

Visual Principles

Glassmorphism cards

Gradient glow accents

Clear content hierarchy

Smooth motion & micro-interactions

Dark background to highlight AI output

“The UI reflects intelligence, automation, and clarity.”

2️⃣ COLOR SYSTEM (TAILWIND CONFIG)
🎨 Tailwind Theme Extension
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0B0F1A",
        bgSecondary: "#111827",
        glass: "rgba(255,255,255,0.06)",
        glassBorder: "rgba(255,255,255,0.12)",
        aiPrimary: "#6366F1",
        aiSecondary: "#22D3EE",
        success: "#4ADE80",
        warning: "#FACC15",
        error: "#F87171",
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.35)",
        soft: "0 20px 50px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
};

3️⃣ TYPOGRAPHY SYSTEM
Fonts

Primary: Inter

Fallback: sans-serif

Usage
<h1 class="text-5xl font-extrabold tracking-tight">AI Document Summarizer</h1>
<p class="text-base text-gray-400 leading-relaxed">

Element	Tailwind
H1	text-5xl font-extrabold
H2	text-3xl font-bold
Body	text-base text-gray-300
Caption	text-sm text-gray-400
4️⃣ GLOBAL LAYOUT
<body class="bg-bgPrimary text-white min-h-screen">

Spacing System

Sections: py-20

Cards: p-6 md:p-8

Gaps: gap-6

5️⃣ NAVBAR UI (GLASS STYLE)
<nav class="fixed top-0 w-full z-50 bg-glass backdrop-blur-glass border-b border-glassBorder">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <h1 class="text-xl font-bold text-aiPrimary">AI Summarizer</h1>
    <button class="px-5 py-2 rounded-xl bg-aiPrimary/20 text-aiPrimary hover:shadow-glow transition">
      Get Started
    </button>
  </div>
</nav>

6️⃣ HERO SECTION (FIRST IMPRESSION)
<section class="pt-32 text-center max-w-4xl mx-auto">
  <h1 class="text-6xl font-extrabold bg-gradient-to-r from-aiPrimary to-aiSecondary bg-clip-text text-transparent">
    Understand Any Document Instantly
  </h1>
  <p class="mt-6 text-gray-400 text-lg">
    Upload documents. Let AI extract knowledge.
  </p>
</section>

7️⃣ DOCUMENT UPLOAD ZONE (CORE UI)
<div class="mt-20 mx-auto max-w-3xl border-2 border-dashed border-aiPrimary/40 
            rounded-3xl p-14 text-center bg-glass backdrop-blur-glass
            hover:shadow-glow transition-all">
  <p class="text-xl font-semibold">Drop your document here</p>
  <p class="text-gray-400 mt-2">PDF, DOCX, TXT supported</p>
</div>

Effects

Glow on hover

Pulse border animation (optional)

Centered attention

8️⃣ AI PROCESSING STATE (LOADING)
<div class="animate-pulse bg-glass rounded-2xl p-6 mt-10">
  <div class="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
  <div class="h-4 bg-white/10 rounded w-full"></div>
</div>


Text copy:

“Analyzing document with AI…”
“Extracting key insights…”

9️⃣ SUMMARY RESULT CARD (HERO CONTENT)
<div class="bg-glass border border-glassBorder rounded-3xl p-8 shadow-soft mt-16">
  <h2 class="text-2xl font-bold mb-4">AI Summary</h2>
  <p class="text-gray-200 leading-relaxed">
    This document focuses on key ideas related to...
  </p>
</div>

Highlight Important Sentences
<span class="bg-aiPrimary/10 px-2 py-1 rounded text-aiPrimary">

🔟 SENTIMENT ANALYSIS UI
<span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success">
  😊 Positive Tone
</span>

1️⃣1️⃣ ACTION BUTTONS (EXPORT / SAVE)
<button class="px-6 py-3 rounded-xl bg-gradient-to-r from-aiPrimary to-aiSecondary
               hover:shadow-glow transition font-semibold">
  Export as PDF
</button>


Secondary:

<button class="px-6 py-3 rounded-xl border border-glassBorder hover:bg-white/5 transition">
  Save Summary
</button>

1️⃣2️⃣ SAVED SUMMARIES DASHBOARD
<div class="grid md:grid-cols-3 gap-8 mt-16">
  <div class="bg-glass rounded-2xl p-6 hover:-translate-y-1 transition">
    <h3 class="font-bold mb-2">Research Paper</h3>
    <p class="text-sm text-gray-400">Short preview...</p>
  </div>
</div>

1️⃣3️⃣ RESPONSIVE RULES

Mobile first

Use max-w-*

Stack sections vertically

Use md: and lg: for layout expansion

1️⃣4️⃣ ADVISOR-LEVEL UI STATEMENT

You can copy-paste this:

“The UI was designed using Tailwind CSS with a futuristic AI SaaS approach, combining glassmorphism, gradient accents, and micro-interactions to visually communicate intelligence, clarity, and automation.”

1️⃣5️⃣ FINAL UI IMPRESSION

✔ Premium
✔ AI-focused
✔ Clean & readable
✔ Modern
✔ Advisor-ready

🚀 Want More?

I can:

Build full Tailwind components

Design each page UI separately

Create motion & animation styles

Convert this into a Figma-to-Tailwind guide