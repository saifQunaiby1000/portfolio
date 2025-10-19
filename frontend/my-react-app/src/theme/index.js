import { createTheme } from '@mui/material/styles';

// Enhanced color palette for better design
const colors = {
  primary: {
    main: '#00C896', // Modern green
    light: '#4DD5B7',
    dark: '#009B7A',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#1A1A1A', // Dark background
    light: '#2D2D2D',
    dark: '#000000',
    contrastText: '#FFFFFF'
  },
  accent: {
    main: '#FF6B35', // Orange accent
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

// Enhanced typography system
const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em'
  },
  h2: {
    fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em'
  },
  h3: {
    fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
    fontWeight: 600,
    lineHeight: 1.3
  },
  h4: {
    fontSize: { xs: '1.25rem', md: '1.4rem', lg: '1.5rem' },
    fontWeight: 600,
    lineHeight: 1.4
  },
  h5: {
    fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.25rem' },
    fontWeight: 600,
    lineHeight: 1.4
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4
  },
  body1: {
    fontSize: { xs: '0.95rem', md: '1rem' },
    lineHeight: 1.7
  },
  body2: {
    fontSize: { xs: '0.85rem', md: '0.875rem' },
    lineHeight: 1.6
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
    fontSize: { xs: '0.9rem', md: '1rem' }
  }
};

// المسافات
const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '4rem'
};

// الظلال
const shadows = {
  primary: '0 10px 30px rgba(0, 200, 150, 0.3)',
  secondary: '0 5px 20px rgba(0, 0, 0, 0.3)',
  card: '0 8px 32px rgba(0, 0, 0, 0.4)',
  button: '0 4px 16px rgba(0, 200, 150, 0.4)'
};

// إنشاء Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
    success: colors.success,
    warning: colors.warning,
    error: colors.error
  },
  typography,
  spacing: 8,
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: shadows.button,
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 200, 150, 0.5)',
            transform: 'translateY(-2px)'
          }
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 100%)`
          }
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            borderColor: colors.primary.light,
            backgroundColor: `${colors.primary.main}20`
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.background.paper,
          borderRadius: '16px',
          boxShadow: shadows.card,
          border: `1px solid ${colors.secondary.light}`
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px'
        }
      }
    }
  }
});

// تصدير المتغيرات للاستخدام المباشر
export { colors, typography, spacing, shadows };
export default theme;
