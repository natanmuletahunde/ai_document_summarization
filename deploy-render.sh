#!/bin/bash

# 🌟 AI Document Summarizer - Render Deployment Script
# Quick deploy to Render with all configurations

echo "🌟 Deploy AI Document Summarizer to Render"
echo "========================================="

# Check git status
if [[ -n $(git status --porcelain) ]]; then
    echo "📋 Staging changes..."
    git add .
    git commit -m "Auto-commit for Render deployment"
fi

echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "🌐 Render Deployment Steps:"
echo "1. Go to https://dashboard.render.com"
echo "2. Click 'New +' → 'Web Service' (for backend)"
echo "3. Select your GitHub repository"
echo ""
echo "⚙️ Backend Configuration:"
echo "   • Name: ai-doc-sum-api"
echo "   • Root Directory: server"
echo "   • Runtime: Node"
echo "   • Build Command: npm install"
echo "   • Start Command: npm start"
echo "   • Instance: Free"
echo ""
echo "🔧 Environment Variables (add in Advanced):"
echo "   NODE_ENV=production"
echo "   PORT=5000"
echo "   MONGO_URI=your-mongodb-connection-string"
echo ""
echo "📱 Frontend Configuration:"
echo "1. Click 'New +' → 'Static Site'"
echo "2. Select same repository"
echo "   • Name: ai-doc-sum-frontend"
echo "   • Root Directory: client/dist"
echo "   • Build Command: cd client && npm run build"
echo "   • Publish Directory: client/dist"
echo ""
echo "🔗 Frontend Environment Variable:"
echo "   VITE_API_URL=https://your-backend-name.onrender.com"
echo ""
echo "✅ After deployment:"
echo "   • Backend: https://your-backend-name.onrender.com"
echo "   • Frontend: https://your-frontend-name.onrender.com"
echo "   • Dashboard: monitor logs and performance"
echo ""

# Open Render dashboard
echo "🌐 Open Render dashboard? (y/n)"
read -p "> " open_render

if [[ $open_render == "y" || $open_render == "Y" ]]; then
    start https://dashboard.render.com
fi

echo ""
echo "📚 Documentation:"
echo "   • Full Guide: ./RENDER_DEPLOYMENT.md"
echo "   • Troubleshooting: ./TROUBLESHOOTING.md"
echo "   • Voice Reader: ./VOICE_GUIDE.md"
echo ""
echo "🚀 Happy deployment on Render! 🌟"