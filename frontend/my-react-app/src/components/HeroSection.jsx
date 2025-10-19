import React from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { colors } from '../theme';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 25% 25%, ${colors.primary.main}20 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, ${colors.accent.main}20 0%, transparent 50%),
          linear-gradient(135deg, ${colors.background.default} 0%, #0D1117 50%, ${colors.background.paper} 100%)
        `,
        animation: 'particleFloat 20s linear infinite',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${colors.primary.main}15 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, ${colors.accent.main}15 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(0, 200, 150, 0.05) 0%, transparent 70%)
          `,
          zIndex: 0,
          animation: 'pulse 8s ease-in-out infinite'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              ${colors.primary.main}10 90deg, 
              transparent 180deg, 
              ${colors.accent.main}10 270deg, 
              transparent 360deg)
          `,
          zIndex: 0,
          animation: 'rotate 20s linear infinite'
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 0.5
          },
          '50%': {
            opacity: 1
          }
        },
        '@keyframes rotate': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        '@keyframes particleFloat': {
          '0%': {
            background: `
              radial-gradient(2px 2px at 20px 30px, ${colors.primary.main}, transparent),
              radial-gradient(2px 2px at 40px 70px, ${colors.accent.main}, transparent),
              radial-gradient(1px 1px at 90px 40px, ${colors.primary.light}, transparent),
              radial-gradient(1px 1px at 130px 80px, ${colors.accent.light}, transparent),
              radial-gradient(2px 2px at 160px 30px, ${colors.primary.main}, transparent),
              linear-gradient(135deg, ${colors.background.default} 0%, #0D1117 50%, ${colors.background.paper} 100%)
            `
          },
          '25%': {
            background: `
              radial-gradient(2px 2px at 80px 10px, ${colors.primary.main}, transparent),
              radial-gradient(2px 2px at 120px 50px, ${colors.accent.main}, transparent),
              radial-gradient(1px 1px at 40px 90px, ${colors.primary.light}, transparent),
              radial-gradient(1px 1px at 180px 20px, ${colors.accent.light}, transparent),
              radial-gradient(2px 2px at 60px 70px, ${colors.primary.main}, transparent),
              linear-gradient(135deg, ${colors.background.default} 0%, #1A1A2E 50%, ${colors.background.paper} 100%)
            `
          },
          '50%': {
            background: `
              radial-gradient(2px 2px at 140px 60px, ${colors.primary.main}, transparent),
              radial-gradient(2px 2px at 60px 90px, ${colors.accent.main}, transparent),
              radial-gradient(1px 1px at 20px 40px, ${colors.primary.light}, transparent),
              radial-gradient(1px 1px at 160px 80px, ${colors.accent.light}, transparent),
              radial-gradient(2px 2px at 100px 20px, ${colors.primary.main}, transparent),
              linear-gradient(135deg, ${colors.background.default} 0%, #2D1B69 50%, ${colors.background.paper} 100%)
            `
          },
          '75%': {
            background: `
              radial-gradient(2px 2px at 40px 80px, ${colors.primary.main}, transparent),
              radial-gradient(2px 2px at 180px 10px, ${colors.accent.main}, transparent),
              radial-gradient(1px 1px at 120px 60px, ${colors.primary.light}, transparent),
              radial-gradient(1px 1px at 80px 30px, ${colors.accent.light}, transparent),
              radial-gradient(2px 2px at 140px 90px, ${colors.primary.main}, transparent),
              linear-gradient(135deg, ${colors.background.default} 0%, #16213E 50%, ${colors.background.paper} 100%)
            `
          },
          '100%': {
            background: `
              radial-gradient(2px 2px at 20px 30px, ${colors.primary.main}, transparent),
              radial-gradient(2px 2px at 40px 70px, ${colors.accent.main}, transparent),
              radial-gradient(1px 1px at 90px 40px, ${colors.primary.light}, transparent),
              radial-gradient(1px 1px at 130px 80px, ${colors.accent.light}, transparent),
              radial-gradient(2px 2px at 160px 30px, ${colors.primary.main}, transparent),
              linear-gradient(135deg, ${colors.background.default} 0%, #0D1117 50%, ${colors.background.paper} 100%)
            `
          }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            sx={{ mb: 4 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 600,
                color: colors.primary.main,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.3
              }}
            >
              Innovative Software Solutions for a Better Digital Future
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;