import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';

const Skills = () => {
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
          <SkillsSection />
        </motion.div>
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 py-8 bg-gradient-to-t from-black to-blue-900/20 border-t border-blue-800/30 mt-12"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Abdelwahab Bahouri. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Skills;
