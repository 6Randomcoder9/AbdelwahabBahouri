import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Link2, Code, Database, Bot, X, Maximize2 } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const ProjectsSection = () => {
  const [fullscreenProject, setFullscreenProject] = useState<number | null>(null);
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  const projects = [
    {
      title: "BI Dashboard for Sales Analysis",
      description: "2026 | Tunis, Tunisia. Goal: provide leadership with a clear sales-performance view by unifying revenue, margin, and growth KPIs in one interactive Power BI decision dashboard.",
      images: [
        "/local-uploads/sales-1.png",
        "/local-uploads/sales-2.png",
        "/local-uploads/sales-3.png"
      ],
      tech: [
        { name: "Power BI", icon: Code },
        { name: "DAX", icon: Code },
        { name: "SQL", icon: Database },
        { name: "Excel", icon: Code },
        { name: "Python", icon: Code }
      ],
      gradient: "from-orange-500 to-rose-600",
      accentColor: "bg-orange-500"
    },
    {
      title: "BestLAB - Data Analyst & Business Analyst",
      description: "Oct-Dec 2025 | Ariana, Tunisia. Goal: improve data reliability and analytics speed by integrating Data Warehouse and Data Lake flows, strengthening ETL quality, and delivering cleaner Power BI insights for business teams.",
      images: [
        "/local-uploads/bestlab-1.png",
        "/local-uploads/bestlab-2.png"
      ],
      tech: [
        { name: "Power BI", icon: Code },
        { name: "DAX", icon: Code },
        { name: "Power Query", icon: Code },
        { name: "SSIS", icon: Zap },
        { name: "Python", icon: Code },
        { name: "Pandas", icon: Code },
        { name: "SQL Server", icon: Database },
        { name: "SQL", icon: Database }
      ],
      gradient: "from-blue-500 to-cyan-600",
      accentColor: "bg-cyan-500"
    },
    {
      title: "BIAT - Data Analyst & Automation",
      description: "Feb-Jul 2025 | Tunis, Tunisia. Goal: reduce manual operational work and accelerate HR/finance reporting through automation, ML-driven analysis, and real-time KPI tracking in Power BI.",
      images: [
        "/local-uploads/biat-1.png",
        "/local-uploads/biat-2.png",
        "/local-uploads/biat-3.png",
        "/local-uploads/biat-4.png",
        "/local-uploads/biat-5.png",
        "/local-uploads/biat-6.png"
      ],
      tech: [
        { name: "Python", icon: Code },
        { name: "Power BI", icon: Code },
        { name: "Selenium", icon: Zap },
        { name: "UiPath", icon: Bot },
        { name: "PostgreSQL", icon: Database },
        { name: "DAX", icon: Code },
        { name: "FastAPI", icon: Code },
        { name: "NLP", icon: Bot },
        { name: "scikit-learn", icon: Bot }
      ],
      gradient: "from-red-500 to-blue-600",
      accentColor: "bg-red-500"
    },
    {
      title: "HR Analytics and Decision Dashboard",
      description: "2025 | Saudi Arabia. Goal: give HR decision-makers a single trusted view of workforce trends (movement, leave, performance) through integrated ETL pipelines and executive-ready dashboards.",
      images: [
        "/local-uploads/hrdash-1.png",
        "/local-uploads/hrdash-2.png",
        "/local-uploads/hrdash-3.png"
      ],
      tech: [
        { name: "Power BI", icon: Code },
        { name: "DAX", icon: Code },
        { name: "Python", icon: Code },
        { name: "PostgreSQL", icon: Database },
        { name: "Pandas", icon: Code }
      ],
      gradient: "from-emerald-500 to-cyan-600",
      accentColor: "bg-emerald-500"
    },
    {
      title: "Msign - Data Analyst & Business Analyst",
      description: "Jun-Aug 2024 | Mahdia, Tunisia. Goal: transform HR business requirements into measurable outcomes by defining KPIs, structuring analytics models, and connecting HR workflows to BI reporting.",
      images: [
        "/local-uploads/msign-1.png",
        "/local-uploads/msign-2.png",
        "/local-uploads/msign-3.png"
      ],
      tech: [
        { name: "Talend", icon: Database },
        { name: ".NET", icon: Code },
        { name: "Python", icon: Code },
        { name: "Angular", icon: Code },
        { name: "Power BI", icon: Code },
        { name: "SQL Server", icon: Database },
        { name: "Jira", icon: Code }
      ],
      gradient: "from-purple-500 to-blue-600",
      accentColor: "bg-purple-500"
    },
    {
      title: "BI Platform for Inventory Management",
      description: "2024 | Tunis, Tunisia. Goal: optimize stock and supply-chain decisions by centralizing inventory, sales, and logistics data into a BI platform with actionable KPI dashboards.",
      images: [
        "/local-uploads/sales-dashboard-1.png",
        "/local-uploads/sales-dashboard-2.png"
      ],
      tech: [
        { name: "Power BI", icon: Code },
        { name: "DAX", icon: Code },
        { name: "Talend", icon: Database },
        { name: "SQL Server", icon: Database },
        { name: "Python", icon: Code }
      ],
      gradient: "from-blue-600 to-indigo-600",
      accentColor: "bg-indigo-500"
    },
    {
      title: "Backoffice E-Commerce Platform",
      description: "2024 | Tunisia. Goal: streamline e-commerce operations with a unified backoffice for catalog, promotions, authentication, and operational monitoring to support faster business execution.",
      images: [
        "/local-uploads/backoffice-1.png",
        "/local-uploads/backoffice-2.png",
        "/local-uploads/backoffice-3.png",
        "/local-uploads/backoffice-4.png",
        "/local-uploads/backoffice-5.png"
      ],
      tech: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Code },
        { name: "Express", icon: Code },
        { name: "MongoDB", icon: Database },
        { name: "JWT Auth", icon: Zap },
        { name: "Admin Panel", icon: Database }
      ],
      gradient: "from-blue-600 to-pink-600",
      accentColor: "bg-pink-500"
    }
  ].map((project) => ({
    ...project,
    images: project.images.map(assetUrl),
  }));

  return (
    <section id="projects" className="relative bg-black">
      {/* Section Header - Fixed */}
      <div className="hidden md:block md:sticky md:top-0 z-40 bg-black/95 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-1.5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Snap Container */}
      <div className="md:snap-y md:snap-mandatory md:overflow-y-scroll md:scrollbar-hide md:h-[calc(100vh-60px)] md:-mt-32">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="md:snap-start flex items-center justify-center relative pt-20 md:pt-32 md:h-[calc(100vh-60px)]"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
            
            {/* Split Screen Layout */}
            <div className="container mx-auto px-8 lg:px-16 h-full flex items-center">
              <div className="grid lg:grid-cols-5 gap-8 items-center w-full">
                
                {/* Left Side - Visual Card (60%) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-3 relative group"
                >
                  {/* 3D Tilt Card */}
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      transform: 'perspective(1000px) rotateY(-2deg) rotateX(2deg)',
                      boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                    }}
                  >
                    {/* Image Carousel */}
                    <div className="w-full h-[450px] relative">
                      <ImageCarousel
                        images={project.images}
                        title={project.title}
                        autoplay={true}
                        interval={4000}
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60`} />
                    
                    {/* Fullscreen Button */}
                    {project.images.length > 0 && (
                      <motion.button
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                        onClick={() => setFullscreenProject(index)}
                        className="absolute bottom-6 right-6 z-10"
                      >
                        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 group`}>
                          <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm" />
                          <div className="relative text-center z-10">
                            <Maximize2 className="w-5 h-5 text-white mx-auto mb-0.5" />
                            <span className="text-white font-bold text-[9px]">Full</span>
                          </div>
                          {/* Pulse Animation */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${project.gradient} group-hover:animate-pulse opacity-20`} />
                        </div>
                      </motion.button>
                    )}
                  </div>
                </motion.div>

                {/* Right Side - Text Content (40%) */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="lg:col-span-2 space-y-4"
                >
                  {/* Accent Line */}
                  <div className={`w-16 h-1 ${project.accentColor} rounded-full`} />
                  
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-blue-400 font-semibold text-xs uppercase tracking-wider">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.4 + techIndex * 0.1 }}
                          className="flex items-center gap-1.5 px-3 py-2 bg-gray-900/80 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 group"
                        >
                          <tech.icon className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <span className="text-gray-200 font-medium text-xs">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator (only on first project) */}
            {index === 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-2 text-blue-400">
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}

      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={() => setFullscreenProject(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFullscreenProject(null)}
              className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label="Close fullscreen"
            >
              <X size={32} />
            </motion.button>

            {/* Carousel Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[95vw] h-[90vh] relative"
            >
              <ImageCarousel
                images={projects[fullscreenProject].images}
                title={projects[fullscreenProject].title}
                autoplay={true}
                interval={4000}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;

