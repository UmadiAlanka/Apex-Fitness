"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Personal Training",
    description: "Focus on custom plans",
    icon: "/Service-icons/personal-training.png",
  },
  {
    title: "Group Classes",
    description: "Dynamic, energetic sessions",
    icon: "/Service-icons/group-classes.png",
  },
  {
    title: "Strength & Conditioning",
    description: "Optimize performance",
    icon: "/Service-icons/strength.png",
  },
  {
    title: "Membership Plans",
    description: "Transparent, flexible options",
    icon: "/Service-icons/membership.png",
  },
];

export default function Service() {
  return (
    <section id="service" className="relative py-24 px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      
      {/* Background Image Container - EXACT MATCH TO HOME */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/bg.jpg" 
          alt="Gym Background" 
          fill 
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent dark:from-black dark:via-black/40 dark:to-transparent transition-all duration-500"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-yellow-600 dark:text-[#ffcc00] text-6xl md:text-7xl font-black uppercase text-center mb-16 tracking-tighter"
        >
          Service
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-[#d9d9d9] backdrop-blur-sm p-10 rounded-3xl flex flex-col items-center text-center shadow-2xl border border-gray-200 dark:border-white/10 transition-colors duration-500"
            >
              {/* Icon Container */}
              <div className="relative w-24 h-24 mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  fill 
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-yellow-700 dark:text-[#b38f00] text-2xl font-black uppercase mb-2 leading-none">
                {service.title}
              </h3>
              <p className="text-gray-900 dark:text-black text-lg font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}