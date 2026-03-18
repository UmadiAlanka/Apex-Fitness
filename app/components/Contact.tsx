"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_me14rt9',
        'template_mtee82r',
        formRef.current!,
        '7bUBUWoLYx7xUUkfr'
      );
      setSubmitted(true);
    } catch (err: any) {
      const message = err?.text || err?.status || JSON.stringify(err);
      console.error('EmailJS Error:', message);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
          
          {/* Left Side: Info Panel */}
          <div className="bg-[#d6d0bc] dark:bg-[#3e3a28] p-10 md:p-14 flex flex-col justify-between transition-colors duration-500">
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src="/Contact-icons/location.png" alt="Location" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-yellow-700 dark:text-[#ffcc00] text-xl font-bold uppercase leading-tight">Visit our Gym</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">53, Kandy road, Yakkala</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src="/Contact-icons/phone.png" alt="Phone" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-yellow-700 dark:text-[#ffcc00] text-xl font-bold uppercase leading-tight">Call Us</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">0335643520</p>
                </div>
              </div>

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
              <div className="w-full h-48 bg-black/10 dark:bg-black/40 rounded-xl overflow-hidden border border-black/10 dark:border-white/5 transition-colors duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.349633634567!2d79.9926868750438!3d7.08540959291753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb9f2c6e736b%3A0x6b6937e2831e5f8e!2sYakkala!5e0!3m2!1sen!2slk!4v1710740000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-4">
                  <a href="#" className="relative w-10 h-10 hover:scale-110 transition-transform"><Image src="/Contact-icons/facebook.png" alt="Facebook" fill className="object-contain" /></a>
                  <a href="#" className="relative w-10 h-10 hover:scale-110 transition-transform"><Image src="/Contact-icons/whatsapp.png" alt="WhatsApp" fill className="object-contain" /></a>
                  <a href="#" className="relative w-10 h-10 hover:scale-110 transition-transform"><Image src="/Contact-icons/instagram.png" alt="Instagram" fill className="object-contain" /></a>
                </div>
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Apex Fitness-2023</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Panel */}
          <div className="bg-[#c8c2a8] dark:bg-[#4a4631] p-10 md:p-14 transition-colors duration-500 flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  
                  <input
                    type="hidden"
                    name="subject"
                    value="New Inquiry from Apex Fitness Website"
                  />

                  <div>
                    <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2 uppercase">Name</label>
                    
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2 uppercase">Email</label>
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all autofill:shadow-[0_0_0_100px_#a8a28e_inset] dark:autofill:shadow-[0_0_0_100px_#8b8771_inset]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-800 dark:text-white text-lg font-bold mb-2 uppercase">Message</label>
                    
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-red-500 font-semibold text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-[#ffcc00] text-black hover:bg-yellow-500 rounded-xl font-black text-3xl uppercase tracking-tighter transition-all transform active:scale-95 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </motion.form>
              ) : (
                /* Success Message */
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 dark:text-[#ffcc00] uppercase tracking-tighter">Awesome!</h3>
                  <p className="text-gray-800 dark:text-gray-200 text-xl font-medium">Your message has been sent. <br/> We'll get back to you soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-yellow-900 dark:text-yellow-400 font-bold uppercase underline hover:scale-105 transition-transform"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}