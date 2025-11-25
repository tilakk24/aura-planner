# Formspree Email Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Visit https://formspree.io/
2. Click "Sign Up"
3. Enter your email and create password
4. Verify your email address

### Step 2: Create a New Form
1. After login, click "New Form"
2. Enter the email where you want to receive messages
3. Click "Create Form"
4. You'll see a Form ID like: `xyzabc123def456`

### Step 3: Update Your Code
Open `main.js` and find line 47:

**Before:**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**After (replace YOUR_FORM_ID with your actual ID):**
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123def456', {
```

### Step 4: Test It!
1. Go to your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox - you should receive the message!

## Features Included
✅ Email notifications for every submission
✅ Spam protection built-in
✅ Works on all devices
✅ No backend server needed
✅ Free up to 50 submissions/month

## Troubleshooting

**Email not arriving?**
- Check your spam folder
- Make sure you verified your email on Formspree
- Check the Form ID is correct

**Getting errors?**
- Make sure your Form ID is correct
- Check browser console (F12) for error messages
- Ensure you're using HTTPS (if deployed)

## Need More?
- Upgrade to Pro for unlimited submissions
- Add file uploads
- Custom redirects
- Advanced analytics

Visit https://formspree.io/pricing for more options.
