import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon,
  Public as PublicIcon,
  EmojiEvents as TrophyIcon
} from '@mui/icons-material';
import { colors } from '../theme';
import { companyData } from '../data/companyData';

const RoadmapSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const phases = [
    {
      icon: <RocketIcon sx={{ fontSize: 40, color: colors.primary.main }} />,
      title: 'Phase 1',
      subtitle: 'Foundation & Early Growth',
      status: 'Completed',
      statusColor: 'success',
      items: [
        'Launch of software company and team establishment',
        'Development of initial projects and websites',
        'Building a trusted client base',
        'Developing effective work methodology'
      ]
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: colors.accent.main }} />,
      title: 'Phase 2',
      subtitle: 'Expansion & Diversification',
      status: 'In Progress',
      statusColor: 'warning',
      items: [
        'Launch of mobile application services',
        'Development of AI solutions',
        'Expansion of technical team',
        'Creating advanced technical support system'
      ]
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: colors.primary.light }} />,
      title: 'Phase 3',
      subtitle: 'Regional Reach',
      status: 'Planned',
      statusColor: 'default',
      items: [
        'Expansion in regional market',
        'Strategic partnerships with major companies',
        'Launch of programming education platform',
        'Development of specialized software products'
      ]
    },
    {
      icon: <TrophyIcon sx={{ fontSize: 40, color: colors.primary.main }} />,
      title: 'Phase 4',
      subtitle: 'Leadership & Innovation',
      status: 'Future',
      statusColor: 'default',
      items: [
        'Become the leading company in the region',
        'Launch innovative technologies',
        'Contribute to tech community development',
        'Establish research and development center'
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
      id="roadmap"
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 20% 70%, ${colors.accent.main}20 0%, transparent 50%),
          radial-gradient(circle at 80% 30%, ${colors.primary.main}20 0%, transparent 50%),
          linear-gradient(180deg, ${colors.background.default} 0%, #2D1B69 50%, ${colors.background.paper} 100%)
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
            radial-gradient(circle at 50% 50%, rgba(0, 200, 150, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, transparent 40%, rgba(255, 107, 53, 0.05) 50%, transparent 60%)
          `,
          zIndex: 0,
          animation: 'swirl 15s linear infinite'
        },
        '@keyframes swirl': {
          '0%': {
            transform: 'rotate(0deg) scale(1)'
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.1)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)'
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
              Our Roadmap
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
              Our growth and development journey to become the leading software company in the region
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
            {phases.map((phase, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%', display: 'flex' }}>
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      minWidth: '350px',
                      maxWidth: '400px',
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
                        transform: 'translateY(-8px)'
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ mr: 2 }}>
                          {phase.icon}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: colors.text.primary,
                              fontWeight: 600,
                              mb: 0.5
                            }}
                          >
                            {phase.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: colors.text.secondary,
                              mb: 1
                            }}
                          >
                            {phase.subtitle}
                          </Typography>
                          <Chip
                            label={phase.status}
                            size="small"
                            color={phase.statusColor}
                            sx={{
                              fontWeight: 600,
                              borderRadius: '20px'
                            }}
                          />
                        </Box>
                      </Box>

                      <Box>
                        {phase.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                p: 2,
                                borderRadius: '12px',
                                background: `rgba(0, 200, 150, 0.05)`,
                                border: `1px solid rgba(0, 200, 150, 0.1)`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: `rgba(0, 200, 150, 0.1)`,
                                  borderColor: `rgba(0, 200, 150, 0.2)`
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: '50%',
                                  background: colors.primary.main,
                                  mr: 2,
                                  flexShrink: 0
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: colors.text.secondary,
                                  lineHeight: 1.5
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          </motion.div>
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

export default RoadmapSection;
