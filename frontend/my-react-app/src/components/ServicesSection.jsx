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
  Web as WebIcon,
  PhoneAndroid as MobileIcon,
  Psychology as AiIcon,
  CloudQueue as CloudIcon,
  Security as SecurityIcon,
  Speed as PerformanceIcon,
  Support as SupportIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { colors } from '../theme';
import { companyData } from '../data/companyData';

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const iconMap = {
    Web: <WebIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Mobile: <MobileIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    AI: <AiIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Cloud: <CloudIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Security: <SecurityIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Performance: <PerformanceIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Support: <SupportIcon sx={{ fontSize: 50, color: colors.primary.main }} />,
    Analytics: <AnalyticsIcon sx={{ fontSize: 50, color: colors.primary.main }} />
  };

  const services = companyData.services.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }));

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
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 30% 20%, ${colors.primary.main}15 0%, transparent 60%),
          radial-gradient(circle at 70% 80%, ${colors.accent.main}15 0%, transparent 60%),
          linear-gradient(180deg, ${colors.background.paper} 0%, #1A1A2E 50%, ${colors.background.default} 100%)
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
            linear-gradient(45deg, transparent 30%, rgba(0, 200, 150, 0.03) 50%, transparent 70%)
          `,
          zIndex: 0,
          animation: 'float 12s ease-in-out infinite'
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)'
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
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: colors.text.secondary,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              We offer a comprehensive range of advanced software services to help you achieve your digital goals
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
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} lg={index % 2 === 0 ? 5 : 3} xl={index % 2 === 0 ? 5 : 3} key={index}>
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
                      maxWidth: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      background: colors.background.card,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.border.light}`,
                      borderRadius: '24px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${colors.primary.main} 0%, ${colors.accent.main} 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      },
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: `0 25px 50px rgba(0, 200, 150, 0.15)`,
                        transform: 'translateY(-8px)',
                        background: colors.background.hover,
                        '&::before': {
                          opacity: 1
                        },
                        '& .service-icon': {
                          transform: 'scale(1.1) rotate(5deg)'
                        }
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
                          className="service-icon"
                          sx={{
                            mb: 3,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {service.icon}
                        </Box>
                        
                        <Typography
                          variant="h5"
                          sx={{
                            color: colors.text.primary,
                            fontWeight: 600,
                            mb: 2
                          }}
                        >
                          {service.title}
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            color: colors.text.secondary,
                            mb: 3,
                            lineHeight: 1.6
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              background: `rgba(0, 200, 150, 0.1)`,
                              color: colors.primary.main,
                              px: 2,
                              py: 0.5,
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: 500
                            }}
                          >
                            {feature}
                          </Box>
                        ))}
                      </Box>
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

export default ServicesSection;
