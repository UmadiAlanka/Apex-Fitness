"use client";
import { useState, useEffect } from 'react'; // Added hooks
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  // --- API STATE ---
  const [quote, setQuote] = useState("Unleash Your Full Potential. State-of-the-art facility, elite trainers, and flexible plans.");
  const [loading, setLoading] = useState(true);

  // --- FETCH API DATA ---
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Using a proxy to bypass CORS issues for your demo
        const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/random')}`);
        const data = await res.json();
        const quoteData = JSON.parse(data.contents)[0];
        
        // Update the quote with the dynamic data
        setQuote(`${quoteData.q} — ${quoteData.a}`);
      } catch (error) {
        console.log("API Error, showing default text");
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.jpg" 
          alt="Gym Training"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent dark:from-black 
        dark:via-black/40 dark:to-transparent transition-all duration-500"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white uppercase leading-tight transition-colors duration-500"
        >
          Achieve Your Peak <br />
          At <span className="text-yellow-600 dark:text-yellow-400">Apex Fitness</span>
        </motion.h1>

        {/* Dynamic Quote Section */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`mt-6 max-w-xl mx-auto text-lg italic transition-colors duration-500 ${
            loading ? "text-gray-400 animate-pulse" : "text-gray-700 dark:text-gray-300"
          }`}
        >
          "{quote}"
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-10"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 dark:bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-600 dark:hover:bg-yellow-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/20"
          >
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}