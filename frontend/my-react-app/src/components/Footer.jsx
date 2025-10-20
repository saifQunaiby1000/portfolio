import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import Logo from './Logo';
import { colors } from '../theme';
import { companyData } from '../data/companyData';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const contactItems = [
    {
      key: 'email',
      icon: <EmailIcon sx={{ fontSize: 50, color: colors.primary.main, mb: 2 }} />,
      title: 'Email',
      value: companyData.contact.email,
      href: `mailto:${companyData.contact.email}`,
      target: '_blank'
    },
    {
      key: 'phone',
      icon: <PhoneIcon sx={{ fontSize: 50, color: colors.primary.main, mb: 2 }} />,
      title: 'Phone',
      value: companyData.contact.phone,
      href: `tel:${companyData.contact.phone.replace(/\s/g, '')}`
    },
    {
      key: 'whatsapp',
      icon: <WhatsAppIcon sx={{ fontSize: 50, color: colors.primary.main, mb: 2 }} />,
      title: 'WhatsApp',
      value: companyData.contact.whatsapp,
      href: `https://wa.me/${companyData.contact.whatsapp.replace(/\s/g, '')}`,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        background: `
          radial-gradient(circle at 30% 30%, ${colors.primary.main}15 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, ${colors.accent.main}15 0%, transparent 50%),
          linear-gradient(135deg, ${colors.background.default} 0%, #1A1A2E 50%, ${colors.secondary.main} 100%)
        `,
        color: colors.text.primary,
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${colors.primary.main} 50%, transparent 100%)`
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 50% 50%, rgba(0, 200, 150, 0.05) 0%, transparent 60%),
            conic-gradient(from 90deg at 50% 50%, 
              transparent 0deg, 
              ${colors.primary.main}10 180deg, 
              transparent 360deg)
          `,
          zIndex: 0,
          animation: 'finale 25s linear infinite'
        },
        '@keyframes finale': {
          '0%': {
            transform: 'rotate(0deg) scale(1)'
          },
          '33%': {
            transform: 'rotate(120deg) scale(1.05)'
          },
          '66%': {
            transform: 'rotate(240deg) scale(0.95)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)'
          }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: colors.text.primary,
                mb: 2,
                mt: 4
              }}
            >
              Contact Us
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
              Get in touch with us for your next project
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'stretch', mb: 6 }}>
            {contactItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.key}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ height: '100%', display: 'flex' }}
                >
                  <Box
                    component="a"
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    sx={{ textDecoration: 'none', display: 'block', width: '100%' }}
                  >
                    <Card
                      sx={{
                        height: { xs: 200, sm: 240, md: 260 },
                        width: { xs: '100%', sm: 280, md: 300 },
                        background: colors.background.card,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${colors.border.light}`,
                        borderRadius: '20px',
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: colors.primary.main,
                          boxShadow: `0 20px 40px rgba(0, 200, 150, 0.2)`,
                          transform: 'translateY(-8px)'
                        }
                      }}
                    >
                      {item.icon}
                      <Typography variant="h6" sx={{ color: colors.text.primary, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                        {item.value}
                      </Typography>
                    </Card>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Copyright */}
          <Box sx={{ textAlign: 'center', pt: 4, borderTop: `1px solid ${colors.border.light}` }}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: '0.9rem',
                textAlign: 'center',
                width: '100%'
              }}
            >
              © 2025 Saif Company. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;