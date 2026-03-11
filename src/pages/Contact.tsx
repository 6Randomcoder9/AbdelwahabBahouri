import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden w-full scroll-smooth">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => navigate('/')}
        className="fixed top-20 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 backdrop-blur-sm border border-blue-500/30 rounded-full text-white transition-all duration-300"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </motion.button>
      
      {/* Main Content */}
      <main className="relative z-10 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
