// Placeholder for project constants and configuration
// Update these with your actual information

export const SITE_CONFIG = {
  name: 'John Doe',
  title: 'Full-Stack Software Engineer',
  description: 'Building scalable web applications and solving complex problems with modern technologies.',
  url: 'https://taaaioo.github.io',
  ogImage: '/og-image.jpg',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'john@example.com',
};

export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates using WebSockets. Includes team collaboration, notifications, and progress tracking features.',
    technologies: ['Next.js', 'Firebase', 'TypeScript'],
    link: 'https://github.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'A real-time analytics dashboard for monitoring application metrics. Built with React, Chart.js, and AWS. Features custom visualizations and data export capabilities.',
    technologies: ['React', 'AWS', 'Chart.js'],
    link: 'https://github.com',
  },
  {
    id: 4,
    title: 'Open Source Contribution',
    description:
      'Active contributor to multiple open-source projects. Helped improve performance by 30%, added new features, and maintained documentation for developer community.',
    technologies: ['JavaScript', 'Git', 'Community'],
    link: 'https://github.com',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    period: '2021 - Present',
    description:
      'Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines reducing deployment time by 60%.',
    technologies: ['Node.js', 'AWS', 'Kubernetes'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2018 - 2021',
    description:
      'Developed and maintained web applications for e-commerce and SaaS platforms. Implemented responsive UIs with React and optimized database queries improving performance by 40%.',
    technologies: ['React', 'Express.js', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartUp Innovations',
    period: '2016 - 2018',
    description:
      'Started career building web applications and learning modern development practices. Contributed to frontend development and bug fixes for the main product.',
    technologies: ['JavaScript', 'jQuery', 'MySQL'],
  },
];

export const SKILLS = {
  frontend: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'],
  backend: ['Node.js & Express', 'Python & Django', 'PostgreSQL & MongoDB', 'REST APIs & GraphQL'],
  devops: ['AWS (EC2, S3, Lambda)', 'Docker & Kubernetes', 'CI/CD (GitHub Actions)', 'Git & Linux'],
};
