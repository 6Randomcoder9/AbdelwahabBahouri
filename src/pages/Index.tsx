import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingElements from '@/components/FloatingElements';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto w-full scroll-smooth">
      {/* Enhanced Particle Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <ParticleBackground />
      </div>
      
      {/* Floating Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <FloatingElements />
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Fixed Elements */}
      <ScrollProgress />
      <ThemeToggle />
      
      {/* Main Content */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
