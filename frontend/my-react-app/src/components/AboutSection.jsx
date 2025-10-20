import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  People as PeopleIcon,
  EmojiEvents as AwardsIcon,
  TrendingUp as GrowthIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import { colors } from '../theme';
import { companyData } from '../data/companyData';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const iconMap = {
    Code: <CodeIcon sx={{ fontSize: 40, color: colors.primary.main }} />,
    People: <PeopleIcon sx={{ fontSize: 40, color: colors.primary.main }} />,
    Awards: <AwardsIcon sx={{ fontSize: 40, color: colors.primary.main }} />,
    Growth: <GrowthIcon sx={{ fontSize: 40, color: colors.primary.main }} />
  };

  const stats = companyData.stats.map(stat => ({
    ...stat,
    icon: iconMap[stat.icon]
  }));

  const teamMembers = companyData.team;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 25% 75%, ${colors.accent.main}20 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, ${colors.primary.main}20 0%, transparent 50%),
          linear-gradient(180deg, ${colors.background.default} 0%, #0F3460 50%, ${colors.background.paper} 100%)
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
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 60%),
            linear-gradient(45deg, transparent 30%, rgba(0, 200, 150, 0.05) 50%, transparent 70%)
          `,
          zIndex: 0,
          animation: 'wave 10s ease-in-out infinite'
        },
        '@keyframes wave': {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px)'
          },
          '25%': {
            transform: 'translateX(10px) translateY(-5px)'
          },
          '50%': {
            transform: 'translateX(0px) translateY(-10px)'
          },
          '75%': {
            transform: 'translateX(-10px) translateY(-5px)'
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
              About Us
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
              Saif Company - Where creativity meets technology to create exceptional software solutions
            </Typography>
          </Box>
        </motion.div>

        {/* إحصائيات الشركة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mb: 8, justifyContent: 'center', alignItems: 'stretch' }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%', display: 'flex' }}>
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      // Remove fixed minWidth to allow proper responsiveness on small screens
                      display: 'flex',
                      flexDirection: 'column',
                      background: colors.background.card,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.border.light}`,
                      borderRadius: '20px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: `0 20px 40px rgba(0, 200, 150, 0.2)`,
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ mb: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: colors.primary.main,
                          fontWeight: 700,
                          mb: 1
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: colors.text.primary,
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          fontSize: '0.9rem'
                        }}
                      >
                        {stat.description}
                      </Typography>
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

export default AboutSection;
