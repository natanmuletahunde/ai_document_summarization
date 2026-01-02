# 🔧 Deployment Troubleshooting Guide

## 🚨 **Common Issues & Solutions**

### **1. Database Connection Errors**

#### Error: `MongoNetworkError: connection failed`
**Solutions:**
- Check MongoDB connection string format
- Ensure IP whitelist includes 0.0.0.0/0 (for cloud deployment)
- Verify database user has correct permissions
- Check if MongoDB cluster is running

#### Error: `Authentication failed`
**Solutions:**
- Verify username/password in connection string
- Check database user roles
- Ensure special characters are URL encoded
- Try creating new database user

### **2. Frontend Build Issues**

#### Error: `Module not found`
**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### Error: `Build failed during Vite build`
**Solutions:**
- Update Node.js to version 18+
- Clear Vite cache: `rm -rf .vite`
- Check environment variables in `.env.production`
- Verify all imports are correct

### **3. CORS Issues**

#### Error: `Access to fetch blocked by CORS policy`
**Solutions:**
- Set `CORS_ORIGIN` environment variable
- Update server CORS configuration:
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
```
- For development: use `*` (not recommended for production)

### **4. File Upload Issues**

#### Error: `Request entity too large`
**Solutions:**
- Increase body parser limits:
```javascript
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
```
- Check cloud provider file size limits
- Verify multer configuration

### **5. Environment Variables**

#### Error: `process.env.VARIABLE is undefined`
**Solutions:**
- Ensure `.env.production` is in correct directory
- Check platform-specific variable naming:
  - Railway: Use Railway dashboard
  - Vercel: Use Vercel dashboard
  - Heroku: Use `heroku config:set`
- Restart application after changes

### **6. Port Issues**

#### Error: `Port already in use`
**Solutions:**
```bash
# Find process using port
lsof -i :5000
netstat -tulpn | grep :5000

# Kill process
kill -9 <PID>

# Or use different port
export PORT=8080
```

### **7. SSL/HTTPS Issues**

#### Error: `Mixed content warnings`
**Solutions:**
- Ensure all assets use HTTPS
- Update API base URL in production
- Configure HSTS headers
- Use relative URLs where possible

### **8. Memory Issues**

#### Error: `JavaScript heap out of memory`
**Solutions:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"

# For PM2
pm2 start server.js --name app --max-memory-restart 1G

# For Railway/AWS: Increase instance size
```

### **9. Voice Reader Issues**

#### Error: `Speech synthesis not supported`
**Solutions:**
- Browser compatibility check
- Add user agent detection:
```javascript
const isSupported = 'speechSynthesis' in window;
if (!isSupported) {
  // Show fallback message
}
```
- Test in different browsers

### **10. Performance Issues**

#### Slow load times:
**Solutions:**
- Enable gzip compression
- Use CDN for static assets
- Optimize images and files
- Enable browser caching
- Monitor with Lighthouse

---

## 🛠️ **Platform-Specific Issues**

### **Railway**
- Logs: View in Railway dashboard under "Logs" tab
- Environment: Check environment variables in "Variables" tab
- Builds: Monitor build logs in "Deployments" tab

### **Heroku**
- Commands: `heroku logs --tail` for real-time logs
- Config: `heroku config` to check variables
- Restart: `heroku restart` to fix issues

### **Vercel**
- Logs: Vercel dashboard under "Functions" tab
- Build: Check "Build Logs" tab
- Environment: Settings → Environment Variables

### **AWS EC2**
- SSH: `ssh -i key.pem user@host` to debug
- PM2 logs: `pm2 logs`
- Nginx: `sudo nginx -t` to test config

---

## 🔍 **Debugging Checklist**

### **Before Deployment:**
- [ ] Test locally with production variables
- [ ] Check all environment variables
- [ ] Verify database connection
- [ ] Test file upload functionality
- [ ] Validate voice reader works

### **After Deployment:**
- [ ] Check deployment logs
- [ ] Test all API endpoints
- [ ] Verify frontend builds correctly
- [ ] Test file upload in production
- [ ] Check voice reader in different browsers
- [ ] Test mobile responsiveness
- [ ] Verify HTTPS/SSL setup

### **Monitoring Setup:**
- [ ] Configure error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Add performance monitoring
- [ ] Create backup strategy

---

## 📞 **Getting Help**

### **Community Resources:**
- GitHub Issues: Create issue with detailed error
- Stack Overflow: Include code and error messages
- Discord: Join relevant development communities
- Platform Support: Railway/Heroku/Vercel support channels

### **What to Include in Help Requests:**
1. **Error messages** (full stack traces)
2. **Environment details** (OS, Node.js version, browser)
3. **Steps to reproduce** (detailed reproduction)
4. **Deployment platform** (Railway, Heroku, etc.)
5. **Configuration used** (environment variables, settings)

---

## 🚀 **Quick Fix Commands**

### **Reset Everything:**
```bash
# Fresh clone and setup
git clone <your-repo>
cd ai-doc-sum
rm -rf node_modules package-lock.json
npm run install-deps
```

### **Test Production Build Locally:**
```bash
# Build and test frontend
cd client
npm run build
npx serve -s dist -l 3000

# Test backend
cd ../server
npm start
```

### **Common Git Issues:**
```bash
# Force update remote
git push -f origin main

# Reset to clean state
git reset --hard HEAD
git clean -fd
```

Remember: Most deployment issues are related to environment variables or network connectivity. Always check logs first! 🎯