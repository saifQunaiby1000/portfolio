const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Saif Company API!',
    status: 'Server is running successfully! 🚀',
    timestamp: new Date().toISOString(),
    company: 'Saif Company - Innovative Software Solutions'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is healthy! 💚',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/services', (req, res) => {
  res.json({
    services: [
      {
        id: 1,
        title: 'Web Development',
        description: 'Modern & Fast Websites',
        icon: '🌐',
        status: 'active'
      },
      {
        id: 2,
        title: 'Mobile Applications',
        description: 'Android & iOS Applications',
        icon: '📱',
        status: 'active'
      },
      {
        id: 3,
        title: 'Artificial Intelligence',
        description: 'Smart & Innovative Solutions',
        icon: '🤖',
        status: 'active'
      },
      {
        id: 4,
        title: 'Cloud Computing',
        description: 'Secure Cloud Services',
        icon: '☁️',
        status: 'active'
      },
      {
        id: 5,
        title: 'Cybersecurity',
        description: 'Advanced Protection',
        icon: '🔒',
        status: 'active'
      },
      {
        id: 6,
        title: 'Performance Optimization',
        description: 'Speed & Efficiency',
        icon: '⚡',
        status: 'active'
      },
      {
        id: 7,
        title: 'Technical Support',
        description: '24/7 Expert Help',
        icon: '🛠️',
        status: 'active'
      },
      {
        id: 8,
        title: 'Data Analytics',
        description: 'Insights & Reports',
        icon: '📊',
        status: 'active'
      }
    ]
  });
});

app.get('/api/team', (req, res) => {
  res.json({
    team: [
      {
        id: 1,
        name: 'Saif Ahmed',
        role: 'CEO & Lead Developer',
        avatar: 'S',
        description: 'Extensive experience in web and application development',
        status: 'active'
      },
      {
        id: 2,
        name: 'Development Team',
        role: 'Specialized Developers',
        avatar: 'T',
        description: 'A team of skilled and creative developers',
        status: 'active'
      }
    ]
  });
});

app.get('/api/stats', (req, res) => {
  res.json({
    stats: [
      {
        id: 1,
        number: '50+',
        label: 'Completed Projects',
        description: 'Successful and completed projects for various clients',
        icon: '💻'
      },
      {
        id: 2,
        number: '30+',
        label: 'Satisfied Clients',
        description: 'Happy and satisfied clients with our services',
        icon: '👥'
      },
      {
        id: 3,
        number: '5+',
        label: 'Years Experience',
        description: 'Years of experience in programming and development',
        icon: '🏆'
      },
      {
        id: 4,
        number: '100%',
        label: 'Success Rate',
        description: 'High success rate in project completion',
        icon: '📈'
      }
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`💚 Saif Company Backend API is live!`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});

module.exports = app;
