import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import RoadmapSection from './components/RoadmapSection';
import VisionSection from './components/VisionSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <RoadmapSection />
      <VisionSection />
      <AboutSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
