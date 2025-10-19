import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../theme';

const Logo = ({ size = 'medium', variant = 'default' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: 40, height: 40, fontSize: '1.5rem' };
      case 'medium':
        return { width: 60, height: 60, fontSize: '2rem' };
      case 'large':
        return { width: 80, height: 80, fontSize: '2.5rem' };
      default:
        return { width: 60, height: 60, fontSize: '2rem' };
    }
  };

  const sizeConfig = getSize();

  const LogoIcon = () => (
    <Box
      sx={{
        width: sizeConfig.width,
        height: sizeConfig.height,
        borderRadius: '12px',
        background: variant === 'outlined' 
          ? 'transparent' 
          : `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
        border: variant === 'outlined' 
          ? `2px solid ${colors.primary.main}` 
          : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: variant === 'outlined'
            ? 'transparent'
            : 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          borderRadius: '12px'
        }
      }}
    >
      <Typography
        sx={{
          fontSize: sizeConfig.fontSize,
          fontWeight: 800,
          color: variant === 'outlined' ? colors.primary.main : colors.text.primary,
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '-0.02em',
          position: 'relative',
          zIndex: 1
        }}
      >
        S
      </Typography>
    </Box>
  );

  if (variant === 'text') {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LogoIcon />
      </Box>
    );
  }

  return <LogoIcon />;
};

export default Logo;
