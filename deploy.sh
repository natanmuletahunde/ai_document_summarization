#!/bin/bash

# 🚀 AI Document Summarizer - Quick Deployment Script
# This script helps you quickly deploy to different platforms

echo "🤖 AI Document Summarizer Deployment Helper"
echo "=========================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Initializing..."
    git init
    git add .
    git commit -m "Initial commit"
    echo "✅ Git repository initialized"
fi

# Show deployment options
echo ""
echo "🌟 Choose your deployment platform:"
echo "1) Railway (Recommended - Easiest & Free)"
echo "2) Vercel (Frontend + Serverless)"
echo "3) Heroku (Popular & Reliable)"
echo "4) Docker (Self-hosted)"
echo "5) Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "🚂 Deploying to Railway..."
        echo "📋 Steps:"
        echo "1. Go to https://railway.app"
        echo "2. Click 'New Project' → 'Deploy from GitHub repo'"
        echo "3. Set these environment variables:"
        echo "   NODE_ENV=production"
        echo "   PORT=5000"
        echo "   MONGO_URI=your-mongodb-connection-string"
        echo ""
        echo "🔗 Open Railway now? (y/n)"
        read -p "> " open_railway
        if [[ $open_railway == "y" || $open_railway == "Y" ]]; then
            start https://railway.app
        fi
        ;;
    
    2)
        echo "⚡ Deploying to Vercel..."
        echo "📋 Steps:"
        echo "1. Install Vercel CLI: npm i -g vercel"
        echo "2. Run: vercel"
        echo "3. Set environment variables in Vercel dashboard"
        echo ""
        echo "🔗 Open Vercel now? (y/n)"
        read -p "> " open_vercel
        if [[ $open_vercel == "y" || $open_vercel == "Y" ]]; then
            start https://vercel.com
        fi
        ;;
    
    3)
        echo "🌿 Deploying to Heroku..."
        echo "📋 Steps:"
        echo "1. Install Heroku CLI: npm i -g heroku"
        echo "2. Login: heroku login"
        echo "3. Create app: heroku create"
        echo "4. Add MongoDB: heroku addons:create mongolab:sandbox"
        echo "5. Deploy: git subtree push --prefix server heroku main"
        echo ""
        echo "🔗 Open Heroku now? (y/n)"
        read -p "> " open_heroku
        if [[ $open_heroku == "y" || $open_heroku == "Y" ]]; then
            start https://heroku.com
        fi
        ;;
    
    4)
        echo "🐳 Setting up Docker deployment..."
        echo "📋 Steps:"
        echo "1. Build: docker-compose build"
        echo "2. Run: docker-compose up -d"
        echo "3. Access: http://localhost"
        echo ""
        echo "📖 Full Docker guide: ./DEPLOYMENT.md"
        ;;
    
    5)
        echo "👋 Goodbye!"
        exit 0
        ;;
    
    *)
        echo "❌ Invalid choice. Please try again."
        exit 1
        ;;
esac

echo ""
echo "✨ Don't forget to:"
echo "📚 Read full guide: ./DEPLOYMENT.md"
echo "🔧 Check troubleshooting: ./TROUBLESHOOTING.md"
echo "🎤 Voice reader guide: ./VOICE_GUIDE.md"
echo ""
echo "🚀 Happy deployment!"