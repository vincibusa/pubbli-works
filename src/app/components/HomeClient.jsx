'use client'

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

export default function HomeClient() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className=""
      >
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </motion.div>
    </div>
  );
} 