import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Cpu, Brain, Smartphone, Bot, Zap } from 'lucide-react';
import { FloatingIcons } from '@/components/ui/FloatingIcons';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 5 },
        { name: "Java", proficiency: 4 },
        { name: "C#", proficiency: 4 },
        { name: "JavaScript", proficiency: 4 }
      ],
      icon: Code
    },
    {
      title: "Data Engineering & Automation",
      skills: [
        { name: "ETL Pipelines", proficiency: 5 },
        { name: "Power BI", proficiency: 5 },
        { name: "Predictive & Descriptive Analysis", proficiency: 4 },
        { name: "Selenium", proficiency: 4 },
        { name: "UiPath", proficiency: 4 },
        { name: "n8n", proficiency: 4 },
      ],
      icon: Zap
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", proficiency: 5 },
        { name: "PostgreSQL", proficiency: 5 },
        { name: "MySQL", proficiency: 5 },
        { name: "MongoDB", proficiency: 4 },
        { name: "SQL Server", proficiency: 4 }
      ],
      icon: Database
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "FastAPI", proficiency: 5 },
        { name: "SpringBoot", proficiency: 5 },
        { name: "REST APIs", proficiency: 5 },
        { name: "Docker", proficiency: 4 },
        { name: "Git/GitHub", proficiency: 5 },
        { name: "CI/CD", proficiency: 4 }
      ],
      icon: Cpu
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", proficiency: 4 },
        { name: "PyTorch", proficiency: 4 },
        { name: "scikit-learn", proficiency: 5 },
        { name: "NLP", proficiency: 4 },
        { name: "GenAI", proficiency: 4 }
      ],
      icon: Brain
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", proficiency: 4 },
        { name: "Vue.js", proficiency: 4 },
        { name: "HTML5/CSS3", proficiency: 4 }
      ],
      icon: Globe
    }
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

  const cardVariants = {
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

  // Function to render proficiency dots
  const renderProficiencyDots = (proficiency) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2.5 h-2.5 rounded-full ${i < proficiency ? 'bg-blue-500' : 'bg-gray-700'}`}
          />
        ))}
      </div>
    );
  };

  // Function to render a skill bar
  const renderSkillBar = (skill, index) => {
    return (
      <motion.div
        key={skill.name}
        className="space-y-1.5"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          delay: index * 0.05,
          duration: 0.3
        }}
      >
        <div className="flex justify-between">
          <span className="text-gray-300 text-sm font-medium">
            {skill.name}
          </span>
          {renderProficiencyDots(skill.proficiency)}
        </div>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency * 20}%` }}
            transition={{ duration: 1, delay: index * 0.05 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="min-h-screen py-20 pb-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent" />
      
      {/* Floating Icons Background */}
      <FloatingIcons 
        density="medium" 
        opacity={[0.05, 0.2, 0.05]} 
        speed="slow" 
        icons={[
          { Icon: Code, color: "#3b82f6", size: 28 },
          { Icon: Database, color: "#60a5fa", size: 24 },
          { Icon: Globe, color: "#2563eb", size: 26 },
          { Icon: Cpu, color: "#60a5fa", size: 24 },
          { Icon: Brain, color: "#3b82f6", size: 28 },
          { Icon: Smartphone, color: "#2563eb", size: 24 },
          { Icon: Bot, color: "#60a5fa", size: 28 },
          { Icon: Zap, color: "#3b82f6", size: 26 }
        ]}
        className="z-0"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Skills Grid - Simple 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black rounded-lg border border-blue-800/50 p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {React.createElement(category.icon, { className: "w-6 h-6 text-blue-500 mr-3" })}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => renderSkillBar(skill, skillIndex))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-full border border-blue-800/50 cursor-hover">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">
                Data & ML Engineer • ETL Pipelines • Dashboards • AI/ML Integration • Automation
              </span>
              <Code className="w-5 h-5 text-blue-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

