// Company Data
export const companyData = {
  // Company Info
  name: "Saif Company",
  tagline: "Innovative Software Solutions for a Better Digital Future",
  description: "We provide innovative and advanced software solutions to help you achieve your digital and business goals.",
  
  // Contact Information
  contact: {
    email: "saifqunaiby1000@gmail.com",
    phone: "+962 779 626 786",
    whatsapp: "+962 779 626 786",
    address: "Jordan"
  },

  // Services
  services: [
    {
      id: 1,
      icon: "Web",
      title: "Web Development",
      description: "We develop modern and fast websites using the latest technologies like React, Next.js, and Vue.js",
      features: ["Responsive Design", "SEO Optimization", "High Performance", "Advanced Security"]
    },
    {
      id: 2,
      icon: "Mobile",
      title: "Mobile Applications",
      description: "High-quality Android and iOS applications using React Native and Flutter",
      features: ["Elegant Design", "Fast Performance", "User-Friendly Interface", "Full Support"]
    },
    {
      id: 3,
      icon: "AI",
      title: "Artificial Intelligence",
      description: "Smart solutions using artificial intelligence and machine learning to optimize your operations",
      features: ["Data Analysis", "Automation", "Predictions", "Optimization"]
    },
    {
      id: 4,
      icon: "Cloud",
      title: "Cloud Computing",
      description: "Secure and reliable cloud services for hosting and managing your applications",
      features: ["Secure Hosting", "Backup Solutions", "Scalability", "24/7 Support"]
    },
    {
      id: 5,
      icon: "Security",
      title: "Cybersecurity",
      description: "Comprehensive protection for your data and systems from cyber threats",
      features: ["Advanced Protection", "Continuous Monitoring", "Rapid Response", "Staff Training"]
    },
    {
      id: 6,
      icon: "Performance",
      title: "Performance Optimization",
      description: "Optimize the performance of your websites and applications for the best user experience",
      features: ["Performance Analysis", "Speed Optimization", "Resource Reduction", "Continuous Monitoring"]
    },
    {
      id: 7,
      icon: "Support",
      title: "Technical Support",
      description: "Specialized technical support around the clock to ensure continuity of your systems",
      features: ["24/7 Support", "Rapid Response", "Expert Specialists", "Custom Solutions"]
    },
    {
      id: 8,
      icon: "Analytics",
      title: "Data Analytics",
      description: "Comprehensive analysis of your data to extract valuable insights that help in making informed decisions",
      features: ["Detailed Reports", "Actionable Insights", "Accurate Predictions", "Custom Recommendations"]
    }
  ],

  // Roadmap
  roadmap: [
    {
      id: 1,
      phase: "Phase 1",
      title: "Foundation & Planning",
      subtitle: "Building the foundation for success",
      items: [
        "Market research and analysis",
        "Technology stack selection",
        "Team building and training",
        "Initial project planning"
      ]
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Development & Testing",
      subtitle: "Creating innovative solutions",
      items: [
        "Software development",
        "Quality assurance testing",
        "Performance optimization",
        "Security implementation"
      ]
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Launch & Growth",
      subtitle: "Scaling and expanding",
      items: [
        "Product launch",
        "Marketing campaigns",
        "Client acquisition",
        "Continuous improvement"
      ]
    }
  ],

  // Vision, Mission, Values
  vision: [
    {
      id: 1,
      icon: "Vision",
      title: "Our Vision",
      content: "To be the leading provider of innovative software solutions that transform businesses and create a better digital future for all."
    },
    {
      id: 2,
      icon: "Mission",
      title: "Our Mission",
      content: "We are committed to delivering high-quality, scalable, and innovative software solutions that help our clients achieve their goals and stay ahead of the competition."
    },
    {
      id: 3,
      icon: "Values",
      title: "Our Values",
      content: "Innovation, quality, integrity, and customer satisfaction are the core values that drive everything we do at Saif Company."
    }
  ],

  // About Stats
  stats: [
    {
      id: 1,
      icon: "Code",
      number: "50+",
      label: "Projects Completed"
    },
    {
      id: 2,
      icon: "People",
      number: "25+",
      label: "Happy Clients"
    },
    {
      id: 3,
      icon: "Awards",
      number: "10+",
      label: "Awards Won"
    },
    {
      id: 4,
      icon: "Growth",
      number: "99%",
      label: "Client Satisfaction"
    }
  ],

  // Team Members
  team: [
    {
      id: 1,
      name: "Saif Qunaiby",
      role: "CEO & Founder",
      avatar: "SQ",
      description: "Visionary leader with 10+ years of experience in software development and business strategy."
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      role: "CTO",
      avatar: "AR",
      description: "Technology expert specializing in modern web technologies and cloud architecture."
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      role: "Lead Developer",
      avatar: "FZ",
      description: "Full-stack developer with expertise in React, Node.js, and mobile app development."
    },
    {
      id: 4,
      name: "Omar Hassan",
      role: "UI/UX Designer",
      avatar: "OH",
      description: "Creative designer focused on creating beautiful and user-friendly digital experiences."
    }
  ],

  // Social Links
  socialLinks: [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "Facebook"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "LinkedIn"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "Instagram"
    }
  ]
};

// Navigation Items
export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Vision', href: '#vision' },
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
