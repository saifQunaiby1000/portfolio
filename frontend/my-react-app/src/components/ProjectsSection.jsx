import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ShoppingCart as EcommerceIcon,
  Work as JobIcon,
  Launch as LaunchIcon
} from '@mui/icons-material';
import { colors } from '../theme';

const ProjectsSection = () => {
  const theme = useTheme();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN e-commerce platform with JWT authentication, Redux state management, and complete checkout workflow. Features product browsing, shopping cart, user authentication, and payment integration.',
      icon: <EcommerceIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
      tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://proshop-1-tdcj.onrender.com',
      category: 'Full-Stack Application',
      features: [
        'Product browsing & search',
        'Shopping cart & checkout',
        'User authentication with JWT',
        'Payment integration',
        'Order management system'
      ]
    },
    {
      id: 2,
      title: 'Job Board Application',
      description: 'Complete full-stack job board application with authentication, authorization, job management, application tracking, and dashboard analytics. Built with MERN stack featuring role-based access control and responsive design.',
      icon: <JobIcon sx={{ fontSize: 50, color: colors.accent.main }} />,
      tech: ['React 18', 'Material-UI', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
      liveUrl: 'https://hiring-website-wa2a.onrender.com',
      category: 'Full-Stack Application',
      features: [
        'JWT authentication & authorization',
        'Job posting & filtering',
        'Application tracking system',
        'Role-based dashboards',
        'CV upload functionality'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 25% 75%, ${colors.primary.main}15 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, ${colors.accent.main}15 0%, transparent 50%),
          linear-gradient(180deg, ${colors.background.paper} 0%, #0F3460 50%, ${colors.background.default} 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 70%),
            linear-gradient(45deg, transparent 30%, rgba(0, 200, 150, 0.05) 50%, transparent 70%)
          `,
          zIndex: 0,
          animation: 'wave 15s ease-in-out infinite'
        },
        '@keyframes wave': {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px)'
          },
          '50%': {
            transform: 'translateX(20px) translateY(-20px)'
          }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: colors.text.primary,
                mb: 2
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: colors.text.secondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Showcasing full-stack applications built with modern technologies
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div variants={itemVariants} style={{ height: '100%', display: 'flex' }}>
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: colors.background.card,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.border.light}`,
                      borderRadius: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: `0 25px 50px rgba(0, 200, 150, 0.15)`,
                        transform: 'translateY(-8px)',
                        background: colors.background.hover,
                        '&::before': {
                          opacity: 1
                        },
                       '& .project-icon': {
                         transform: 'scale(1.05) rotate(1deg)',
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${colors.primary.main} 0%, ${colors.accent.main} 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      p: 4, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Box
                          className="project-icon"
                          sx={{
                            mb: 3,
                            transition: 'all 0.3s '
                          }}
                        >
                          {project.icon}
                        </Box>
                        
                        <Typography
                          variant="h5"
                          sx={{
                            color: colors.text.primary,
                            fontWeight: 600,
                            mb: 1.5
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.primary.main,
                            fontWeight: 600,
                            mb: 2,
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            letterSpacing: 1
                          }}
                        >
                          {project.category}
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            color: colors.text.secondary,
                            mb: 3,
                            lineHeight: 1.7,
                            fontSize: '0.95rem'
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: colors.text.primary,
                              fontWeight: 600,
                              mb: 1.5,
                              fontSize: '0.9rem'
                            }}
                          >
                            Key Features:
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {project.features.map((feature, index) => (
                              <Box
                                key={index}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 4,
                                    height: 4,
                                    borderRadius: '50%',
                                    background: colors.primary.main
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: colors.text.secondary,
                                    fontSize: '0.85rem'
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.tech.map((tech, index) => (
                            <Box
                              key={index}
                              sx={{
                                background: `rgba(0, 200, 150, 0.1)`,
                                color: colors.primary.main,
                                px: 2,
                                py: 0.5,
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 500
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        fullWidth
                        sx={{
                          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.accent.main} 100%)`,
                          color: '#FFFFFF',
                          py: 1.5,
                          borderRadius: '12px',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.accent.dark} 100%)`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 24px rgba(0, 200, 150, 0.3)`
                          }
                        }}
                      >
                        View Live Demo
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

