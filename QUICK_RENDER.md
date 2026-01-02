# 🌟 Render Quick Deployment

**Deploy your AI Document Summarizer in 5 minutes!**

## 🚀 **One-Click Deploy Steps**

### 1️⃣ **Setup Repository**
```bash
git add . && git commit -m "Deploy to Render"
git push origin main
```

### 2️⃣ **Deploy Backend (Worker Service)**
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Select your GitHub repository
4. **Configuration:**
   - Name: `ai-doc-sum-api`
   - Root Directory: `server`
   - Runtime: `Node`
   - Build: `npm install`
   - Start: `npm start`
   - Plan: `Free`

5. **Environment Variables:**
   ```
   NODE_ENV=production
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   ```

### 3️⃣ **Deploy Frontend (Static Site)**
1. Click "New +" → "Static Site"
2. Select same repository
3. **Configuration:**
   - Name: `ai-doc-sum-frontend`
   - Root Directory: `client/dist`
   - Build: `cd client && npm run build`
   - Publish: `client/dist`

4. **Environment Variable:**
   ```
   VITE_API_URL=https://ai-doc-sum-api.onrender.com
   ```

## ✅ **Your Live URLs**
- **Backend**: `https://ai-doc-sum-api.onrender.com`
- **Frontend**: `https://ai-doc-sum-frontend.onrender.com`

## 🎯 **Why Render is Perfect for Your App**

- ✅ **Free Tier**: 750 hours/month (enough for 24/7)
- ✅ **Modern UI**: Clean, intuitive dashboard
- ✅ **Auto HTTPS**: Free SSL certificates
- ✅ **Built-in CDN**: Fast global delivery
- ✅ **GitHub Integration**: Auto-deployments
- ✅ **Perfect for**: MERN stack apps like yours

## 🎤 **Voice Reader + Render = Perfect Match**
- ✅ Your voice reader needs HTTPS (Render provides free)
- ✅ No CORS issues (easy service-to-service communication)
- ✅ Great performance for real-time speech synthesis
- ✅ Mobile users get full experience

## 🔧 **Quick Script**
```bash
# Run the automated helper
./deploy-render.sh
# This opens Render and shows all steps!
```

**Your AI Document Summarizer with voice reader will be live in minutes! 🌟**

📚 **Full Guide**: [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)