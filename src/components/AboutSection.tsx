import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Target, Monitor } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/40" />
      
      {/* Floating Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-blue-800/30 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title with Enhanced Animation */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              About Me
            </motion.h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Enhanced Visual Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Professional Illustration */}
              <div className="relative flex justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Background Glow Effects */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl opacity-20 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Developer at Desk Image */}
                  <motion.div
                    className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-800/50 shadow-2xl shadow-blue-900/40"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.2))"
                    }}
                  >
                    <img
                      src="/local-uploads/1cf7f11d-9199-4e9f-922c-a2b644007ad7.png"
                      alt="Developer workspace"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    
                    {/* Floating Icons */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Code className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Enhanced Description Sections */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <motion.div 
                  className="bg-gradient-to-r from-blue-900/50 to-blue-800/40 p-8 rounded-xl border border-blue-600/40 shadow-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
                    <Monitor className="w-7 h-7" />
                     My Journey
                  </h3>
                  <p className="text-lg">
                    As a Data & ML Engineer passionate about web development and process automation, I specialize in building scalable ETL pipelines, creating insightful dashboards for data analysis, and integrating AI/ML solutions. I also develop web applications that bring data-driven insights to life.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-r from-blue-800/40 to-blue-900/50 p-8 rounded-xl border border-blue-600/40 shadow-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
                    <Target className="w-7 h-7" />
                     What I Do
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Build robust ETL pipelines for data processing and transformation
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Create interactive dashboards and data visualization solutions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Integrate AI/ML models into production systems
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Develop web applications with modern frameworks
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Automate processes using RPA and intelligent automation
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

