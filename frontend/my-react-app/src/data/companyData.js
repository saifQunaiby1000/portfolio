// Portfolio Data
export const companyData = {
  // Personal Info
  name: "Saif Mazen Qunaiby",
  tagline: "Full-Stack Developer | Software Engineering Graduate",
  description: "Passionate full-stack developer specializing in MERN stack development. Recent graduate with hands-on experience in building modern web applications and RESTful APIs.",
  
  // Contact Information
  contact: {
    email: "saifqunaiby1000@gmail.com",
    phone: "+962 77 962 6786",
    whatsapp: "+962 77 962 6786",
    address: "Amman, Jordan"
  },

  // Skills & Services
  services: [
    {
      id: 1,
      icon: "Web",
      title: "Frontend Development",
      description: "Modern React.js applications with Redux Toolkit, responsive design, and optimized user experiences",
      features: ["React.js", "Redux Toolkit", "JavaScript ES6+", "HTML5/CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      id: 2,
      icon: "Mobile",
      title: "Backend Development",
      description: "RESTful APIs using Node.js and Express.js with MongoDB integration and authentication systems",
      features: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB", "CRUD Operations"]
    },
    {
      id: 3,
      icon: "AI",
      title: "Database Management",
      description: "MongoDB database design, schema modeling, and data management with Mongoose ODM",
      features: ["MongoDB", "Mongoose", "Schema Design", "Data Modeling", "Query Optimization", "Database Security"]
    },
    {
      id: 4,
      icon: "Cloud",
      title: "Full-Stack Applications",
      description: "Complete MERN stack applications from frontend to backend with seamless integration",
      features: ["MERN Stack", "Full-Stack Integration", "API Development", "Authentication", "State Management"]
    },
    {
      id: 5,
      icon: "Security",
      title: "Version Control",
      description: "Git version control, GitHub collaboration, and modern development workflows",
      features: ["Git", "GitHub", "Version Control", "Collaboration", "Branching", "Code Review"]
    },
    {
      id: 6,
      icon: "Performance",
      title: "Project Management",
      description: "Problem-solving, debugging, and project delivery with attention to detail and quality",
      features: ["Problem Solving", "Debugging", "Time Management", "Quality Assurance", "Team Collaboration"]
    }
  ],

  // Experience Timeline
  roadmap: [
    {
      id: 1,
      phase: "2025",
      title: "Backend Intern - Nixpend",
      subtitle: "Professional Development Experience",
      items: [
        "Developed RESTful APIs using Node.js and Express.js",
        "Integrated MongoDB with Mongoose for CRUD operations",
        "Collaborated with developers to debug and optimize performance",
        "Gained hands-on experience in backend development"
      ]
    },
    {
      id: 2,
      phase: "2025",
      title: "MERN E-Commerce Platform",
      subtitle: "Full-Stack Project Development",
      items: [
        "Developed complete e-commerce application using MERN stack",
        "Implemented React.js frontend with Redux Toolkit and routing",
        "Built authentication system with JWT and checkout workflow",
        "Deployed live demo: https://proshop-1-tdcj.onrender.com"
      ]
    },
    {
      id: 3,
      phase: "2025",
      title: "Software Engineering Graduate",
      subtitle: "Academic Foundation",
      items: [
        "B.Sc. in Software Engineering from Hashemite University",
        "Strong foundation in programming and software development",
        "Understanding of modern development workflows and best practices",
        "Ready to contribute as a Junior Full-Stack Developer"
      ]
    }
  ],

  // Personal Vision & Goals
  vision: [
    {
      id: 1,
      icon: "Vision",
      title: "My Vision",
      content: "To become a senior full-stack developer who creates innovative web applications that solve real-world problems and enhance user experiences."
    },
    {
      id: 2,
      icon: "Mission",
      title: "My Mission",
      content: "Continuously learning and growing in the field of software development, delivering high-quality solutions while contributing to collaborative team environments."
    },
    {
      id: 3,
      icon: "Values",
      title: "My Values",
      content: "Problem-solving, continuous learning, attention to detail, teamwork, and delivering quality work are the principles that guide my professional journey."
    }
  ],

  // Personal Stats
  stats: [
    {
      id: 1,
      icon: "Code",
      number: "3+",
      label: "Years Learning",
      description: "Software Engineering education and hands-on development experience"
    },
    {
      id: 2,
      icon: "People",
      number: "1",
      label: "Internship Completed",
      description: "Backend development internship at Nixpend with real-world experience"
    },
    {
      id: 3,
      icon: "Awards",
      number: "2",
      label: "Major Projects",
      description: "E-commerce platform and job search website with live deployments"
    },
    {
      id: 4,
      icon: "Growth",
      number: "100%",
      label: "Dedication",
      description: "Committed to continuous learning and professional growth"
    }
  ],

  // Personal Info
  team: [
    {
      id: 1,
      name: "Saif Mazen Qunaiby",
      role: "Full-Stack Developer",
      avatar: "SMQ",
      description: "Software Engineering graduate specializing in MERN stack development with hands-on experience in building modern web applications."
    }
  ],

  // Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/saifQunaiby1000",
      icon: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saif-qunaiby",
      icon: "LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:saifqunaiby1000@gmail.com",
      icon: "Email"
    }
  ]
};

// Navigation Items
export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#services' },
  { label: 'Experience', href: '#roadmap' },
  { label: 'Goals', href: '#vision' },
  { label: 'About', href: '#about' }
];

// Theme Colors
export const themeColors = {
  primary: {
    main: '#00C896',
    light: '#4DD5B7',
    dark: '#009B7A',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#1A1A1A',
    light: '#2D2D2D',
    dark: '#000000',
    contrastText: '#FFFFFF'
  },
  accent: {
    main: '#FF6B35',
    light: '#FF8A65',
    dark: '#E55100',
    contrastText: '#FFFFFF'
  },
  background: {
    default: '#0A0A0A',
    paper: '#1A1A1A',
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
    card: 'rgba(255, 255, 255, 0.03)',
    hover: 'rgba(255, 255, 255, 0.08)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
    accent: '#00C896',
    muted: '#888888'
  },
  success: {
    main: '#00C896'
  },
  warning: {
    main: '#FF6B35'
  },
  error: {
    main: '#FF4757'
  },
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(0, 200, 150, 0.3)'
  }
};
