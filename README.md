# Taaaioo.github.io - Software Engineer Portfolio

A modern, responsive portfolio website built with **Astro** and **Tailwind CSS** for a Software Engineer profile. Features a clean design with dummy data and images.

## 🚀 Features

- **Modern Design**: Built with Tailwind CSS for a sleek, professional look
- **Fast Performance**: Static site generation with Astro
- **Responsive Layout**: Mobile-first design that works on all devices
- **Multiple Sections**:
  - Hero section with social links
  - About me with profile image
  - Skills & Technologies (Frontend, Backend, DevOps)
  - Featured Projects showcase
  - Work Experience timeline
  - Contact form
  - Footer with quick links

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **JavaScript**: Vanilla JS for interactivity
- **Deployment**: GitHub Pages

## 📋 Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/          # Page layouts
│   └── Layout.astro
├── pages/            # Route pages
│   └── index.astro
└── styles/           # Global styles
    └── global.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Taaaioo/Taaaioo.github.io.git
cd Taaaioo.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` folder that can be deployed to GitHub Pages.

## 🎨 Customization

### Update Personal Information
Edit `src/pages/index.astro` and component files to replace:
- Name and title
- Bio and descriptions
- Project details
- Work experience
- Contact information

### Change Colors
Update the Tailwind CSS color theme in `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#0f172a',
  secondary: '#64748b',
  accent: '#3b82f6',
}
```

### Add Images
1. Place images in `src/assets/`
2. Import and use them in components

## 📄 Component Details

### Header
- Sticky navigation bar
- Mobile-responsive menu toggle
- Quick links to sections

### Hero
- Main introduction section
- Call-to-action buttons
- Social media links

### About
- Personal bio and description
- Profile image placeholder
- Key qualifications

### Skills
- Categorized skills (Frontend, Backend, DevOps)
- Technology badges

### Projects
- Featured project cards
- Project descriptions
- Technology tags
- Links to live demos and source code

### Experience
- Timeline of work experience
- Job titles and companies
- Key achievements
- Technology used

### Contact
- Contact form (requires Formspree integration)
- Social media links
- Email contact option

## 🔧 Form Integration

The contact form uses [Formspree](https://formspree.io) for email handling. To enable:

1. Visit [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action URL in `src/components/Contact.astro`

## 🚢 Deployment

### Deploy to GitHub Pages

1. Update `site` in `astro.config.mjs` to your GitHub Pages URL
2. Ensure your repository is named `<username>.github.io`
3. Build the project: `npm run build`
4. Push to GitHub - GitHub Pages will automatically deploy from the `dist/` folder

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-friendly navigation and buttons

## 🎯 SEO

- Semantic HTML structure
- Meta tags for description
- Proper heading hierarchy
- Fast page load times

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Guide](https://pages.github.com)

## 🤝 Contributing

Feel free to fork and customize this portfolio template for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Credits

Built with ❤️ using Astro and Tailwind CSS

---

**Ready to deploy?** Follow the deployment section above to get your portfolio live on GitHub Pages!
