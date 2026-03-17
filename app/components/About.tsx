"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1e1b15] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Animated Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-[#ffcc00] text-5xl font-bold uppercase">About</h2>
          <p className="text-gray-300 leading-relaxed text-lg italic">
            "At Apex Fitness, we are more than just a gym; we are a dedicated local community 
            committed to helping you reach your peak physical potential. Established in 2023, 
            our facility was built to provide a high-energy environment where local athletes 
            and fitness enthusiasts can thrive."
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#ffcc00] text-black px-10 py-3 rounded-xl font-bold text-xl hover:bg-yellow-500 transition-all transform hover:scale-105"
          >
            Join Now
          </button>
        </motion.div>

        {/* Right Side: Animated Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-yellow-400/10">
              <Image src="/about-1.jpg" alt="Training" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-yellow-400/10">
              <Image src="/about-3.jpg" alt="Workout" fill className="object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 pt-12"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-yellow-400/10">
              <Image src="/about-2.jpg" alt="Bodybuilder" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-yellow-400/10">
              <Image src="/about-4.jpg" alt="Yoga" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}