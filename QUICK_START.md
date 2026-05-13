# 🚀 Quick Start Guide

## Installation & Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio live!

---

## 🎨 Customization (15 minutes)

### 1. Update Your Name & Title
**File**: `src/pages/index.astro`

Find and replace:
- `John Doe` → Your name
- `Full-Stack Software Engineer | Cloud Architect | Open Source Contributor` → Your title

**File**: `src/components/Hero.astro`
- Update the main headline and tagline

---

### 2. Update About Section
**File**: `src/components/About.astro`

Replace the three paragraphs with your professional bio:
- Your experience years and specialization
- What you enjoy doing
- Your certifications and specialties

---

### 3. Update Skills
**File**: `src/components/Skills.astro`

Three sections to customize:
- **Frontend**: Your frontend technologies
- **Backend**: Your backend technologies
- **DevOps & Cloud**: Your infrastructure skills

---

### 4. Add Your Projects
**File**: `src/components/Projects.astro`

For each project:
1. Update project title
2. Update description
3. Update technology tags (pink badges)
4. Update GitHub link

**Or better**: Use the `src/config.ts` file to manage project data centrally.

---

### 5. Update Work Experience
**File**: `src/components/Experience.astro`

For each position:
1. Update job title
2. Update company name
3. Update employment period
4. Update job description
5. Update technologies used

**Or better**: Use the `src/config.ts` file to manage experience data centrally.

---

### 6. Update Contact Form
**File**: `src/components/Contact.astro`

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Find this line in Contact.astro:
   ```html
   <form action="https://formspree.io/f/xyzabc" method="POST">
   ```
5. Replace `xyzabc` with your form ID

---

### 7. Update Social Media Links
**File**: `src/components/Hero.astro` and `src/components/Footer.astro`

Replace all `href="https://github.com"` with your actual links:
- GitHub profile
- LinkedIn profile
- Twitter/X profile

---

### 8. Add Your Profile Photo
**Step 1**: Create `src/assets/` folder  
**Step 2**: Add your profile image (e.g., `profile.jpg`)  
**Step 3**: Update `src/components/About.astro` to use your image

Currently using a placeholder avatar - replace with your photo.

---

## 🎨 Styling Customization

### Change Color Scheme
**File**: `tailwind.config.mjs`

```javascript
colors: {
  accent: '#3b82f6',  // Change this to your brand color
}
```

Common color codes:
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Green: `#10b981`
- Red: `#ef4444`
- Orange: `#f97316`

---

## 📸 Adding Images

### Create Assets Folder
```bash
mkdir -p src/assets
```

### Add Images
- Place images in `src/assets/`
- Use in components with relative imports

Example:
```astro
---
import profileImg from '../assets/profile.jpg';
---

<img src={profileImg} alt="Profile" />
```

---

## 📱 Testing Responsiveness

### Test on Different Devices
- Desktop (1920px)
- Laptop (1280px)
- Tablet (768px)
- Mobile (375px)

### Use Browser DevTools
Press `F12` and toggle device emulation to test responsive design.

---

## 🏗️ Building for Deployment

### Create Production Build
```bash
npm run build
```

This generates a `dist/` folder with optimized static files.

### Preview Production Build
```bash
npm run preview
```

Test your production build locally before deploying.

---

## 🚀 Deploy to GitHub Pages

### Prerequisites
- Repository named `Taaaioo.github.io`
- Repository should be public

### Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **The `dist/` folder contains your static site**

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

4. **GitHub Pages automatically deploys from `dist/` folder**

5. **Visit**: `https://taaaioo.github.io`

---

## ✅ Pre-Deployment Checklist

- [ ] Replaced all "John Doe" with your name
- [ ] Updated all bio sections with your information
- [ ] Added your real work experience
- [ ] Added your actual projects
- [ ] Updated all social media links
- [ ] Added your profile photo
- [ ] Set up contact form with Formspree
- [ ] Tested all navigation links
- [ ] Tested on mobile devices
- [ ] Ran `npm run build` successfully
- [ ] Verified no broken links

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Find and use a different port
npm run dev -- --port 3001
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist .astro
npm install
npm run build
```

### Styling Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check that Tailwind classes are spelled correctly

### Form Not Submitting
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure form is properly configured in Formspree dashboard

---

## 📚 Additional Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages Docs](https://pages.github.com)

---

## 🎉 You're All Set!

Your portfolio is now ready to customize and deploy. Good luck! 🚀
