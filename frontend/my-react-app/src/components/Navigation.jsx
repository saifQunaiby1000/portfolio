import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { colors } from '../theme';
import { navigationItems } from '../data/companyData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navigationItems;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', background: colors.background.paper }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Logo size="small" variant="text" />
        <IconButton onClick={handleDrawerToggle} sx={{ color: colors.text.primary }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: `${colors.primary.main}20`
              }
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: colors.text.primary,
                '& .MuiTypography-root': {
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
                  sx={{
                    background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
                    borderRadius: '12px',
                    py: 1.5
                  }}
                >
                  Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled 
            ? `rgba(10, 10, 10, 0.95)` 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(0px)',
          borderBottom: isScrolled ? `1px solid ${colors.primary.main}40` : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isScrolled 
              ? `linear-gradient(90deg, ${colors.primary.main}10 0%, transparent 50%, ${colors.primary.main}10 100%)`
              : 'none',
            zIndex: -1
          }
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          {/* Logo على أقصى الشمال */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                cursor: 'pointer'
              }}
              onClick={() => scrollToSection('#home')}
            >
              <Logo size="small" variant="text" />
            </Box>
          </motion.div>

          {/* Navigation Items في الوسط */}
          {!isMobile ? (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              background: isScrolled ? `rgba(0, 200, 150, 0.1)` : 'transparent',
              borderRadius: '25px',
              px: 2,
              py: 1,
              transition: 'all 0.3s ease'
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: colors.text.secondary,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      textTransform: 'none',
                      boxShadow: 'none',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: '2px',
                        background: `linear-gradient(90deg, ${colors.primary.main}, ${colors.accent.main})`,
                        borderRadius: '2px',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease'
                      },
                      '&:hover': {
                        color: colors.text.primary,
                        background: `rgba(0, 200, 150, 0.1)`,
                        transform: 'translateY(-1px)',
                        boxShadow: 'none',
                        '&::after': {
                          width: '80%'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          ) : null}

          {/* Contact Us على أقصى اليمين */}
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
                  color: colors.text.primary,
                  borderRadius: '12px',
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  boxShadow: `0 4px 20px rgba(0, 200, 150, 0.3)`,
                  border: `1px solid ${colors.primary.main}40`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                    transition: 'left 0.5s ease'
                  },
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.primary.main} 100%)`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 30px rgba(0, 200, 150, 0.4)`,
                    '&::before': {
                      left: '100%'
                    }
                  }
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          ) : null}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ 
                color: colors.text.primary
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            background: colors.background.paper
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
