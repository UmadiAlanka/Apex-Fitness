"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#1a1814] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/*  Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-yellow-400 text-5xl font-black uppercase tracking-tighter">
              About 
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            "At Apex Fitness, we are more than just a gym; we are a dedicated local community 
            committed to helping you reach your peak physical potential. Established in 2023, 
            our facility was built to provide a high-energy environment where local athletes 
            and fitness enthusiasts can thrive."
          </p>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/20"
          >
            Join Now
          </button>
        </motion.div>

       
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-7 row-span-2 relative rounded-3xl overflow-hidden border border-white/10"
          >
            <Image src="/about-1.jpg" alt="Gym" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-5 row-span-1 relative rounded-3xl overflow-hidden border border-white/10"
          >
            <Image src="/about-2.jpg" alt="Training" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-5 row-span-1 relative rounded-3xl overflow-hidden border border-white/10"
          >
            <Image src="/about-3.jpg" alt="Equipment" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}