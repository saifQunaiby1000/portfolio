import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Visibility as VisionIcon,
  Gavel as MissionIcon,
  Favorite as ValuesIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { colors } from '../theme';
import { companyData } from '../data/companyData';

const VisionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sections = [
    {
      icon: <VisionIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
      title: 'My Vision',
      content: 'To become a senior full-stack developer who creates innovative web applications that solve real-world problems and enhance user experiences.',
      highlight: 'Senior Full-Stack Developer'
    },
    {
      icon: <MissionIcon sx={{ fontSize: 50, color: colors.accent.main }} />,
      title: 'My Mission',
      content: 'Continuously learning and growing in the field of software development, delivering high-quality solutions while contributing to collaborative team environments.',
      highlight: 'Continuous Learning & Growth'
    },
    {
      icon: <ValuesIcon sx={{ fontSize: 50, color: colors.primary.light }} />,
      title: 'My Values',
      content: 'Problem-solving, continuous learning, attention to detail, teamwork, and delivering quality work are the principles that guide my professional journey.',
      highlight: 'Problem-Solving & Quality'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
      title: 'Technical Focus',
      content: 'I focus on writing clean, secure, and maintainable code while following best practices in software development and modern development workflows.',
      highlight: 'Clean & Secure Code'
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
      id="vision"
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 40% 40%, ${colors.primary.main}25 0%, transparent 60%),
          radial-gradient(circle at 60% 60%, ${colors.accent.main}25 0%, transparent 60%),
          linear-gradient(135deg, ${colors.background.paper} 0%, #16213E 50%, ${colors.background.default} 100%)
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
            radial-gradient(circle at 50% 50%, rgba(0, 200, 150, 0.1) 0%, transparent 70%),
            conic-gradient(from 45deg at 50% 50%, 
              transparent 0deg, 
              ${colors.primary.main}15 120deg, 
              transparent 240deg, 
              ${colors.accent.main}15 360deg)
          `,
          zIndex: 0,
          animation: 'spiral 18s linear infinite'
        },
        '@keyframes spiral': {
          '0%': {
            transform: 'rotate(0deg) translateX(0px)'
          },
          '25%': {
            transform: 'rotate(90deg) translateX(10px)'
          },
          '50%': {
            transform: 'rotate(180deg) translateX(0px)'
          },
          '75%': {
            transform: 'rotate(270deg) translateX(-10px)'
          },
          '100%': {
            transform: 'rotate(360deg) translateX(0px)'
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
              My Goals & Vision
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
              My professional vision and goals as a software developer committed to continuous learning and growth
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
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ height: '100%', display: 'flex' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: colors.background.card,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.border.light}`,
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: `0 20px 40px rgba(0, 200, 150, 0.2)`,
                        transform: 'translateY(-8px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${colors.primary.main} 0%, ${colors.accent.main} 100%)`
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box
                        className="section-icon"
                        sx={{
                          mb: 3
                        }}
                      >
                        {section.icon}
                      </Box>
                      
                      <Typography
                        variant="h5"
                        sx={{
                          color: colors.text.primary,
                          fontWeight: 600,
                          mb: 2,
                          textAlign: 'center'
                        }}
                      >
                        {section.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.text.secondary,
                          mb: 3,
                          lineHeight: 1.7,
                          textAlign: 'center'
                        }}
                      >
                        {section.content}
                      </Typography>
                      
                      <Box
                        sx={{
                          background: `linear-gradient(135deg, ${colors.primary.main}20 0%, ${colors.accent.main}20 100%)`,
                          border: `1px solid ${colors.primary.main}30`,
                          borderRadius: '12px',
                          p: 2,
                          position: 'relative'
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.primary.main,
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textAlign: 'center'
                          }}
                        >
                          {section.highlight}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: `rgba(0, 200, 150, 0.1)`,
              border: `1px solid ${colors.primary.main}30`,
              borderRadius: '20px',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: colors.text.primary,
                fontWeight: 600,
                mb: 2
              }}
            >
              "I believe that technology should serve humanity"
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              I strive to build a better digital future where technology becomes a tool to improve people's lives and increase business efficiency
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VisionSection;
