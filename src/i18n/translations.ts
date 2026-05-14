export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    header: {
      language: 'Language',
      menu: 'Menu',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Software Engineer',
      description: 'Building beautiful and functional web applications with modern technologies.',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      description: 'I am a passionate software engineer with expertise in full-stack development.',
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Technologies',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    experience: {
      title: 'Experience',
      currentlyWorking: 'Currently Working',
    },
    contact: {
      title: 'Get In Touch',
      message: 'Feel free to reach out to me for any opportunities or collaborations.',
      email: 'Email',
      phone: 'Phone',
      send: 'Send Message',
    },
    footer: {
      copyright: 'All rights reserved.',
      madeWith: 'Made with',
      and: 'and',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من أنا',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'التواصل',
    },
    header: {
      language: 'اللغة',
      menu: 'القائمة',
    },
    hero: {
      greeting: 'مرحبًا، أنا',
      role: 'مهندس برمجيات',
      description: 'بناء تطبيقات ويب جميلة وعملية باستخدام التقنيات الحديثة.',
      cta: 'عرض أعمالي',
    },
    about: {
      title: 'من أنا',
      description: 'أنا مهندس برمجيات شغوف بخبرة في تطوير التطبيقات الكاملة.',
    },
    skills: {
      title: 'المهارات',
      frontend: 'الواجهة الأمامية',
      backend: 'الواجهة الخلفية',
      tools: 'الأدوات والتقنيات',
    },
    projects: {
      title: 'المشاريع',
      viewProject: 'عرض المشروع',
      viewCode: 'عرض الكود',
    },
    experience: {
      title: 'الخبرة',
      currentlyWorking: 'أعمل حاليًا في',
    },
    contact: {
      title: 'تواصل معي',
      message: 'لا تتردد في التواصل معي لأي فرص أو تعاون.',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      send: 'إرسال الرسالة',
    },
    footer: {
      copyright: 'جميع الحقوق محفوظة.',
      madeWith: 'تم صنعه مع',
      and: 'و',
    },
  },
};

export type Language = keyof typeof translations;

export function translate(lang: Language, key: string): string {
  const keys = key.split('.');
  return keys.reduce((obj, k) => obj?.[k], translations[lang] as any) || key;
}

export function setLanguage(lang: Language) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}