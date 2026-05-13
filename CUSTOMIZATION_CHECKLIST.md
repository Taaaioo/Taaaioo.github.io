# 📋 Portfolio Project Customization Checklist

## Phase 1: Basic Setup (15 minutes)

### 1.1 Install & Run
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Verify site runs at http://localhost:3000

### 1.2 Create Assets Folder
- [ ] Create `src/assets/` folder
- [ ] Place your profile photo as `profile.jpg`

---

## Phase 2: Personal Information (20 minutes)

### 2.1 Update Name & Title
**File**: `src/pages/index.astro` and `src/components/Hero.astro`

- [ ] Replace "John Doe" with your name
- [ ] Update professional title
- [ ] Update tagline/subtitle

**Example**: 
- Old: "Full-Stack Software Engineer | Cloud Architect | Open Source Contributor"
- New: "Your Title | Your Specialty | Your Focus"

### 2.2 Update About Section
**File**: `src/components/About.astro`

Replace three paragraphs:
1. [ ] **Paragraph 1**: Years of experience + specialization
2. [ ] **Paragraph 2**: What you enjoy, side projects
3. [ ] **Paragraph 3**: Certifications, specialties, AWS/Cloud details

---

## Phase 3: Skills & Technologies (10 minutes)

### 3.1 Update Skills Section
**File**: `src/components/Skills.astro`

Frontend Skills:
- [ ] Remove: React, Next.js, TypeScript, Tailwind CSS, Astro
- [ ] Add: Your actual frontend technologies

Backend Skills:
- [ ] Remove: Node.js, Express, Python, Django, databases, APIs
- [ ] Add: Your actual backend technologies

DevOps Skills:
- [ ] Remove: AWS, Docker, Kubernetes, CI/CD, Git, Linux
- [ ] Add: Your actual DevOps/infrastructure skills

---

## Phase 4: Projects (20 minutes)

### 4.1 Update Projects
**File**: `src/components/Projects.astro`

For each of 4 projects:
- [ ] **Project 1**: Title, description, tech tags, GitHub link
- [ ] **Project 2**: Title, description, tech tags, GitHub link
- [ ] **Project 3**: Title, description, tech tags, GitHub link
- [ ] **Project 4**: Title, description, tech tags, GitHub link

**Optional**: Use `src/config.ts` instead for cleaner data management

---

## Phase 5: Work Experience (15 minutes)

### 5.1 Update Experience
**File**: `src/components/Experience.astro`

For each position:
- [ ] **Position 1**: Title, company, dates, description, tech
- [ ] **Position 2**: Title, company, dates, description, tech
- [ ] **Position 3**: Title, company, dates, description, tech

Add/remove positions as needed

---

## Phase 6: Contact & Social (10 minutes)

### 6.1 Update Social Media Links
**Files**: `src/components/Hero.astro`, `src/components/Footer.astro`

- [ ] GitHub: Replace URL with your GitHub profile
- [ ] LinkedIn: Replace URL with your LinkedIn profile
- [ ] Twitter: Replace URL with your Twitter/X profile

### 6.2 Set Up Contact Form
**File**: `src/components/Contact.astro`

1. [ ] Sign up at [formspree.io](https://formspree.io)
2. [ ] Create new form
3. [ ] Get form ID (e.g., `f_12345abc`)
4. [ ] Replace in Contact.astro: `action="https://formspree.io/f_YOUR_ID_HERE"`

### 6.3 Update Email
**File**: `src/components/Contact.astro`

- [ ] Replace `john@example.com` with your email

---

## Phase 7: Styling & Branding (Optional, 10 minutes)

### 7.1 Change Accent Color
**File**: `tailwind.config.mjs`

```javascript
colors: {
  accent: '#3b82f6',  // Change this
}
```

Popular color codes:
- [ ] Purple: `#8b5cf6`
- [ ] Green: `#10b981`
- [ ] Red: `#ef4444`
- [ ] Orange: `#f97316`
- [ ] Teal: `#14b8a6`

### 7.2 Update Site Configuration
**File**: `src/config.ts`

- [ ] SITE_CONFIG: Update name, title, description, URL
- [ ] SOCIAL_LINKS: Update all social profiles and email

---

## Phase 8: Testing (15 minutes)

### 8.1 Local Testing
- [ ] Test on desktop (1920px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Test all navigation links
- [ ] Test all buttons and forms
- [ ] Test all external links

### 8.2 Performance Check
- [ ] Run `npm run build` successfully
- [ ] Check build size is reasonable
- [ ] Run `npm run preview`
- [ ] Test production build locally

### 8.3 SEO Check
- [ ] Meta title is present
- [ ] Meta description is present
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (h1 → h2, etc.)

---

## Phase 9: Final Preparations (10 minutes)

### 9.1 Clean Up
- [ ] Remove all dummy data completely
- [ ] Verify no "John Doe" references remain
- [ ] Check all links point to correct URLs
- [ ] Remove unused assets

### 9.2 Build Final Version
```bash
npm run build
```

- [ ] Build completes without errors
- [ ] `dist/` folder is created
- [ ] No TypeScript errors
- [ ] No build warnings

### 9.3 Verify Build Output
```bash
npm run preview
```

- [ ] Preview runs correctly
- [ ] All content displays properly
- [ ] All styles applied correctly
- [ ] No broken images or links

---

## Phase 10: Deployment (5 minutes)

### 10.1 Push to GitHub
```bash
git add .
git commit -m "Customize portfolio with personal information"
git push origin main
```

- [ ] Code pushed successfully
- [ ] No merge conflicts

### 10.2 Verify Deployment
- [ ] Visit `https://taaaioo.github.io`
- [ ] Wait 1-2 minutes for GitHub Pages to deploy
- [ ] Verify site loads completely
- [ ] Test all sections and links on live site

### 10.3 Final Testing on Live Site
- [ ] [ ] Test on desktop
- [ ] [ ] Test on mobile
- [ ] [ ] Test all navigation
- [ ] [ ] Test contact form
- [ ] [ ] Test all external links

---

## 📊 Time Estimate

| Phase | Duration |
|-------|----------|
| Setup | 15 min |
| Personal Info | 20 min |
| Skills | 10 min |
| Projects | 20 min |
| Experience | 15 min |
| Contact/Social | 10 min |
| Styling | 10 min |
| Testing | 15 min |
| Prep | 10 min |
| Deploy | 5 min |
| **Total** | **~2 hours** |

---

## 🆘 Common Issues & Solutions

### Issue: npm install fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 in use
**Solution**:
```bash
npm run dev -- --port 3001
```

### Issue: Styles not showing
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind class names are correct

### Issue: Form not submitting
**Solution**:
- Verify Formspree form ID is correct
- Check browser console for errors
- Visit Formspree dashboard to verify form

### Issue: Images not showing
**Solution**:
- Ensure images are in `src/assets/`
- Verify file paths in imports
- Check file extensions (.jpg, .png, etc.)

### Issue: Deployment to GitHub Pages fails
**Solution**:
- Verify repository is named `Taaaioo.github.io`
- Ensure `astro.config.mjs` has correct `site` URL
- Check GitHub Pages settings in repository settings

---

## 📚 Helpful Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Formspree Docs](https://formspree.io/help/)

---

## ✅ Final Checklist

Before considering your portfolio complete:

- [ ] All personal information updated
- [ ] All placeholder images replaced
- [ ] All placeholder content replaced
- [ ] All links working correctly
- [ ] Contact form functional
- [ ] Mobile responsive working
- [ ] Build successful
- [ ] Deployed to GitHub Pages
- [ ] Live site verified
- [ ] All tests passed

---

**Status**: Ready to customize! 🚀

**Estimated Time to Complete**: 1.5-2 hours

**Difficulty**: Beginner-friendly (mostly copy/paste customization)
