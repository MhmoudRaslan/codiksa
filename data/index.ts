// ─── SERVICES ───────────────────────────────────────────────────────────────
export const services = [
  {
    id: 'web-development',
    
    title: 'Web Development',
    shortDesc: 'Modern, fast, scalable web applications built with cutting-edge technologies.',
    description: 'We build high-performance web apps using Next.js, React, and Node.js — from MVPs to enterprise platforms. Every project is crafted with clean architecture, SEO optimization, and pixel-perfect UI.',
    features: ['Next.js / React', 'REST & GraphQL APIs', 'SEO Optimization', 'Performance Tuning'],
  },
  {
    id: 'mobile-development',
    
    title: 'Mobile Development',
    shortDesc: 'Cross-platform iOS & Android apps with native-like performance.',
    description: 'Using React Native and Flutter, we craft mobile experiences that feel truly native — smooth animations, offline support, and seamless integrations.',
    features: ['React Native', 'Flutter', 'App Store Deployment', 'Push Notifications'],
  },
  {
    id: 'ui-ux-design',
    
    title: 'UI/UX Design',
    shortDesc: 'Beautiful interfaces that users love and convert.',
    description: 'Our design team creates intuitive, beautiful product experiences — from user research and wireframes to polished Figma prototypes ready for dev handoff.',
    features: ['Figma Prototyping', 'User Research', 'Design Systems', 'Accessibility'],
  },
  {
    id: 'backend-apis',
    
    title: 'Backend & APIs',
    shortDesc: 'Robust backend systems that scale with your business.',
    description: 'We design and build reliable backend architectures — microservices, monoliths, serverless — with solid databases, caching strategies, and comprehensive API documentation.',
    features: ['Node.js / Django', 'PostgreSQL / MongoDB', 'Redis Caching', 'API Documentation'],
  },
  {
    id: 'devops-cloud',
    
    title: 'DevOps & Cloud',
    shortDesc: 'CI/CD pipelines, infrastructure as code, and cloud deployments.',
    description: 'From containerization with Docker to Kubernetes orchestration and AWS/GCP deployments — we make sure your product ships fast and runs reliably.',
    features: ['Docker / Kubernetes', 'AWS / GCP / Vercel', 'CI/CD Pipelines', 'Monitoring & Alerts'],
  },
  {
    id: 'ai-integration',
    
    title: 'AI Integration',
    shortDesc: 'Embed intelligence into your products with LLMs and ML models.',
    description: 'We integrate OpenAI, Claude, and custom ML models into your workflows — chatbots, recommendation engines, document processing, and more.',
    features: ['LLM Integration', 'RAG Systems', 'Custom ML Models', 'AI Workflows'],
  },
]

// ─── TECHNOLOGIES ────────────────────────────────────────────────────────────
export const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend'},
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend'  },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Vercel', category: 'DevOps' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'OpenAI', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'FinTrack — Personal Finance Dashboard',
    category: 'Web Development',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    description: 'A real-time personal finance tracker with budget alerts, analytics charts, and bank integration.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'MedBook — Clinic Management App',
    category: 'Mobile Development',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    description: 'Cross-platform mobile app for clinic appointment booking, patient records, and billing.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Storify — E-Commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Django', 'AWS'],
    description: 'Full-featured e-commerce platform with multi-vendor support, live inventory, and AI recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'Brandify — Brand Design System',
    category: 'UI/UX Design',
    tags: ['Figma', 'Design System', 'Tokens'],
    description: 'A complete brand identity and design system for a SaaS startup — from logo to component library.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    link: '#',
  },
  {
    id: 5,
    title: 'AutoPulse — IoT Fleet Monitor',
    category: 'Backend & APIs',
    tags: ['Python', 'FastAPI', 'Redis', 'MQTT'],
    description: 'Real-time fleet monitoring system with GPS tracking, telemetry dashboards, and smart alerts.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    link: '#',
  },
  {
    id: 6,
    title: 'ChatMind — AI Customer Support',
    category: 'AI Integration',
    tags: ['OpenAI', 'LangChain', 'Next.js'],
    description: 'Intelligent customer support bot trained on company docs — handles 80% of tickets autonomously.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    link: '#',
  },
]

export const projectCategories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Backend & APIs', 'AI Integration']

// ─── TEAM ────────────────────────────────────────────────────────────────────
export const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Ayman',
    role: 'Founder & Tech Lead',
    bio: 'Full-stack architect with 8+ years building products that scale. Passionate about clean code and great teams.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=ahmed&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Sara Mohamed',
    role: 'Lead UI/UX Designer',
    bio: 'Crafting digital experiences that users love. Background in psychology gives her an edge in UX research.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=sara&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Omar Khalil',
    role: 'Backend Engineer',
    bio: 'Database whisperer and API craftsman. If it scales to a million users, Omar probably had a hand in it.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=omar&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 4,
    name: 'Nour Hassan',
    role: 'Frontend Developer',
    bio: 'Turns Figma files into pixel-perfect, accessible, and animated interfaces. React is her mother tongue.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=nour&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 5,
    name: 'Karim Saad',
    role: 'DevOps Engineer',
    bio: 'The person who makes sure things never go down. Docker, K8s, and coffee — that is Karim in a nutshell.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=karim&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 6,
    name: 'Menna Ali',
    role: 'AI/ML Engineer',
    bio: 'Building the future, one model at a time. Specializes in NLP and LLM integrations for real-world products.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=menna&backgroundColor=0d1117',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
]

// ─── BLOG ────────────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    slug: 'next-js-14-app-router-guide',
    title: 'Next.js 14 App Router: The Complete Guide for 2024',
    excerpt: 'Everything you need to know about the App Router, Server Components, and streaming in Next.js 14.',
    category: 'Web Development',
    author: 'Ahmed Ayman',
    date: '2024-05-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
  },
  {
    id: 2,
    slug: 'building-rag-systems-with-langchain',
    title: 'Building Production-Ready RAG Systems with LangChain',
    excerpt: 'A practical guide to building retrieval-augmented generation pipelines that actually work in production.',
    category: 'AI Integration',
    author: 'Menna Ali',
    date: '2024-05-03',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    id: 3,
    slug: 'design-systems-figma-tokens',
    title: 'Design Systems with Figma Tokens: A Developer\'s Perspective',
    excerpt: 'How we built a scalable design system that bridges the gap between design and development.',
    category: 'UI/UX Design',
    author: 'Sara Mohamed',
    date: '2024-04-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: 4,
    slug: 'postgres-performance-tips',
    title: '10 PostgreSQL Performance Tips Every Developer Should Know',
    excerpt: 'From index strategies to query optimization — practical tips we use every day at Codiksa.',
    category: 'Backend & APIs',
    author: 'Omar Khalil',
    date: '2024-04-18',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
  },
  {
    id: 5,
    slug: 'kubernetes-for-small-teams',
    title: 'Kubernetes for Small Teams: Is It Worth It?',
    excerpt: 'An honest take on when Kubernetes makes sense and when simpler solutions are better.',
    category: 'DevOps & Cloud',
    author: 'Karim Saad',
    date: '2024-04-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
  },
  {
    id: 6,
    slug: 'react-native-vs-flutter-2024',
    title: 'React Native vs Flutter in 2024: Which Should You Pick?',
    excerpt: 'An in-depth comparison after building production apps with both frameworks.',
    category: 'Mobile Development',
    author: 'Nour Hassan',
    date: '2024-04-02',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
]

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '40+' },
  { label: 'Team Members', value: '12+' },
  { label: 'Years of Experience', value: '3+' },
]

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Tarek Mansour',
    role: 'CEO, Launchpad Egypt',
    text: 'Codiksa delivered our platform in record time. The code quality is exceptional and the team communicates clearly. We have already recommended them to two other startups.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=tarek',
  },
  {
    id: 2,
    name: 'Rana Fouad',
    role: 'Product Manager, Healthify',
    text: 'From design to deployment, everything was smooth. The UI they built for our app is beautiful and our users love it. We are definitely working with them again.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=rana',
  },
  {
    id: 3,
    name: 'Mahmoud Taha',
    role: 'CTO, LogiStore',
    text: 'We needed a complex backend system with real-time features. Codiksa handled it flawlessly — clean architecture, solid testing, and great documentation.',
    avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=mahmoud',
  },
]
