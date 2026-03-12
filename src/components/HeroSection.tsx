import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Star, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterEffect from './TypewriterEffect';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'projects') {
      navigate('/projects');
      return;
    }

    if (id === 'contact') {
      navigate('/contact');
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const words = [
    { text: "Build." },
    { text: "Design." },
    { text: "Develop." },
    { text: "Deploy." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: assetUrl("/social-icons/github-contact.svg"),
      url: "https://github.com/6Randomcoder9",
      color: "hover:text-white hover:bg-blue-800"
    },
    {
      name: "LinkedIn",
      icon: assetUrl("/social-icons/linkedin-contact.svg"),
      url: "https://www.linkedin.com/in/abdelwahab-bahouri-005386246/",
      color: "hover:text-white hover:bg-blue-800"
    },
    {
      name: "Email",
      icon: assetUrl("/social-icons/email-contact.svg"),
      url: "mailto:abdelwahab.bahouri@esprit.tn",
      color: "hover:text-white hover:bg-blue-800"
    },
    {
      name: "Location",
      icon: assetUrl("/social-icons/location-contact.svg"),
      url: "#",
      color: "hover:text-white hover:bg-blue-800"
    }
  ];

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-blue-400 text-lg mb-4"
            >
              👋 Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent"
            >
              Abdelwahab Bahouri
            </motion.h1>

            {/* Typewriter Effect */}
            <div className="text-2xl lg:text-3xl mb-6 h-20">
              <TypewriterEffect
                texts={[
                  "Data & ML Engineer",
                  "ETL Pipeline Developer",
                  "Web Developer",
                  "Process Automation Specialist",
                  "AI/ML Integration Expert"
                ]}
              />
            </div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-300 text-lg mb-8"
            >
              📍 Tunisia | Data & ML Engineer passionate about Web Dev & Automation
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                size="lg"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                size="lg"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-gray-700 ${social.color} transition-colors duration-300`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo with Animated Border */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile Photo */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center border-4 border-blue-500/30 overflow-hidden">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={assetUrl('/me1.png')} 
                      alt="Abdelwahab Bahouri" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              {[
                { icon: Code, delay: 0, radius: 120 },
                { icon: Star, delay: 2, radius: 120 },
                { icon: Zap, delay: 4, radius: 120 },
                { icon: Terminal, delay: 6, radius: 120 }
              ].map(({ icon: Icon, delay, radius }, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: `-24px`,
                    marginTop: `-24px`,
                    transformOrigin: `24px ${radius}px`
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}

              {/* Floating Code Snippets */}
              {['{ }', '< />', '&&', '||'].map((code, index) => (
                <motion.div
                  key={code}
                  className="absolute text-blue-400 font-mono text-xl font-bold"
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + index * 15}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

