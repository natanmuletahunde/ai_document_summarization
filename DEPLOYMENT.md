# 🚀 AI Document Summarizer - Deployment Guide

Complete deployment guide for your AI Document Summarizer with voice reader functionality.

## 📋 **Prerequisites**

- Node.js 18+ installed
- MongoDB database (cloud or self-hosted)
- Git repository (GitHub/GitLab/Bitbucket)
- Domain name (optional but recommended)

## 🎯 **Quick Deployment Options**

### Option 1: Render (Recommended Modern Platform)
### Option 2: Railway (Easiest)
### Option 3: Heroku (Popular Choice)  
### Option 4: Vercel (Frontend Focus)
### Option 5: AWS (Enterprise)

---

## 🌟 **Option 1: Railway Deployment (Easiest)**

### Why Railway?
- ✅ Free tier available
- ✅ Built-in MongoDB
- ✅ Automatic HTTPS
- ✅ Simple deployment from GitHub
- ✅ Great for beginners

### Steps:

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment setup"
   git remote add origin https://github.com/yourusername/ai-doc-sum.git
   git push -u origin main
   ```

2. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project"

3. **Deploy Backend**
   - Click "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Node.js
   - Set environment variables in Railway dashboard:
     ```
     NODE_ENV=production
     PORT=5000
     MONGO_URI=mongodb://your-mongo-connection-string
     ```

4. **Deploy Frontend**
   - In Railway, add another service
   - Select "Deploy from GitHub repo"
   - Set build command: `cd client && npm run build`
   - Set start command: `cd client && npm run preview`

### Railway URLs:
- Backend: `https://your-backend-name.up.railway.app`
- Frontend: `https://your-frontend-name.up.railway.app`

---

## 🚀 **Option 2: Heroku Deployment**

### Why Heroku?
- ✅ Free tier available
- ✅ Easy deployment
- ✅ Good documentation
- ✅ Supports Node.js and MongoDB

### Backend Deployment:

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and Create App**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Add MongoDB Add-on**
   ```bash
   heroku addons:create mongolab:sandbox
   ```

4. **Deploy Backend**
   ```bash
   git subtree push --prefix server heroku main
   ```

5. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PORT=5000
   heroku config:set MONGO_URI=$(heroku config:get MONGOLAB_URI)
   ```

### Frontend Deployment:
   - Deploy to Vercel (see Option 3) or Netlify

---

## ⚡ **Option 3: Vercel Deployment (Frontend + Serverless)**

### Why Vercel?
- ✅ Generous free tier
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Great for React apps
- ✅ Serverless functions support

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**
   ```bash
   vercel login
   vercel
   ```

3. **Configuration**
   - Vercel will auto-detect the `vercel.json` file
   - Set environment variables in Vercel dashboard:
     - `MONGO_URI`: Your MongoDB connection string
     - `NODE_ENV`: production

4. **Environment Variables**
   In Vercel dashboard → Settings → Environment Variables:
   ```
   NODE_ENV=production
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-document-summarizer
   ```

---



---

## ☁️ **Option 4: AWS Deployment (Enterprise)**

### Services Used:
- **EC2**: Application server
- **RDS**: MongoDB database
- **S3**: File storage
- **CloudFront**: CDN
- **Route 53**: DNS

### Steps:

1. **Launch EC2 Instance**
   - Amazon Linux 2 or Ubuntu 22.04
   - t3.micro (free tier) or larger
   - Configure security groups (ports 80, 443, 22)

2. **Setup MongoDB Atlas**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create cluster (M0 free tier)
   - Get connection string

3. **Deploy Application**
   ```bash
   # SSH into EC2
   ssh -i your-key.pem ec2-user@your-ec2-ip
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Clone and deploy
   git clone https://github.com/yourusername/ai-doc-sum.git
   cd ai-doc-sum
   npm run install-deps
   npm run build
   ```

4. **Setup Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start server/server.js --name "ai-doc-sum"
   pm2 startup
   pm2 save
   ```

---

## 🔧 **Environment Variables Setup**

### Required Variables:
```bash
# Backend (.env)
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-document-summarizer
CORS_ORIGIN=https://yourdomain.com

# Frontend (.env.production)
VITE_API_URL=https://your-backend-url.com
VITE_NODE_ENV=production
```

### MongoDB Atlas Setup:
1. Go to MongoDB Atlas
2. Create cluster (M0 free)
3. Create database user
4. Get connection string
5. Add your IP to whitelist (0.0.0.0/0 for all)

---

## 🔒 **Security Considerations**

1. **Environment Variables**
   - Never commit `.env` files
   - Use platform-specific secret management
   - Rotate credentials regularly

2. **CORS Configuration**
   - Restrict to your domain in production
   - Use HTTPS only

3. **Database Security**
   - Use strong passwords
   - Enable authentication
   - Regular backups

4. **HTTPS**
   - Use SSL certificates (Let's Encrypt free)
   - Redirect HTTP to HTTPS

---

## 🧪 **Testing Before Production**

### Local Production Test:
```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm start

# Test with production build
cd client
npx serve -s dist -l 3000
```

### Checklist:
- ✅ All API endpoints work
- ✅ File upload works
- ✅ Voice reader functions
- ✅ Database operations work
- ✅ Responsive design on mobile
- ✅ Error handling works

---

## 📊 **Monitoring and Analytics**

### Recommended Tools:
- **Uptime**: UptimeRobot (free)
- **Error Tracking**: Sentry (generous free tier)
- **Performance**: Vercel Analytics or Google Analytics
- **Logs**: Platform-specific (Railway, Heroku logs)

---

## 🔄 **CI/CD Pipeline**

### GitHub Actions Example:
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Railway
      uses: railway-app/railway-action@v1
      with:
        railway-token: ${{ secrets.RAILWAY_TOKEN }}
```

---

Choose your deployment option based on:
- **Budget**: Railway/Vercel (free), AWS/Heroku (paid tiers)
- **Technical Skill**: Railway/Vercel (easy), AWS (advanced)
- **Scaling Needs**: Heroku/Railway (small-medium), AWS (enterprise)

Good luck with your deployment! 🚀