"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-100 dark:bg-[#1a1814] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-yellow-600 dark:text-[#ffcc00] text-6xl md:text-7xl font-black uppercase text-center mb-16 tracking-tighter"
        >
          Contact US
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-gray-300 dark:border-white/10 shadow-2xl">
          
          {/* Info Panel */}
          <div className="bg-[#d6d0bc] dark:bg-[#3e3a28] p-10 md:p-14 flex flex-col justify-between transition-colors duration-500">
            <div className="space-y-10">
              
              {/* Location Item */}
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src="/Contact-icons/location.png" alt="Location" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-yellow-700 dark:text-[#ffcc00] text-xl font-bold uppercase leading-tight">Visit our Gym</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">53, Kandy road, Yakkala</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src="/Contact-icons/phone.png" alt="Phone" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-yellow-700 dark:text-[#ffcc00] text-xl font-bold uppercase leading-tight">Call Us</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">0335643520</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src="/Contact-icons/mail.png" alt="Email" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-yellow-700 dark:text-[#ffcc00] text-xl font-bold uppercase leading-tight">Mail Us</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">Apexfitness@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              {/* Map */}
              <div className="w-full h-48 bg-black/10 dark:bg-black/40 rounded-xl overflow-hidden border border-black/10 dark:border-white/5 transition-colors duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0123456789!2d79.987654321!3d7.012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnNDQuNCJOIDc5wrA1OScyNS42IkU!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noreferrer" className="relative w-10 h-10 hover:scale-110 transition-transform">
                    <Image src="/Contact-icons/facebook.png" alt="Facebook" fill className="object-contain" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" className="relative w-10 h-10 hover:scale-110 transition-transform">
                    <Image src="/Contact-icons/whatsapp.png" alt="WhatsApp" fill className="object-contain" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" className="relative w-10 h-10 hover:scale-110 transition-transform">
                    <Image src="/Contact-icons/instagram.png" alt="Instagram" fill className="object-contain" />
                  </a>
                </div>
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Apex Fitness-2023
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Panel */}
          <div className="bg-[#c8c2a8] dark:bg-[#4a4631] p-10 md:p-14 transition-colors duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
             
              <div>
                <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2">Name</label>
                <input type="text" placeholder="Name" required className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all" />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2">Email</label>
                <input type="email" placeholder="Email" required className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all" />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2">Message</label>
                <textarea rows={4} placeholder="Message" required className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all" />
              </div>

              <button 
                type="submit"
                className={`w-full py-5 rounded-xl font-black text-3xl uppercase tracking-tighter transition-all transform active:scale-95 shadow-xl ${
                  submitted ? 'bg-green-500 text-white' : 'bg-[#ffcc00] text-black hover:bg-yellow-500'
                }`}
              >
                {submitted ? 'Sent!' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}