import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';

const Projects = () => {
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
      
      {/* Main Content */}
      <main className="relative z-10 w-full pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsSection />
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

export default Projects;
