"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const calculateBMI = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    setBmi(parseFloat(bmiValue.toFixed(1)));
    
    if (bmiValue < 18.5) setMessage("Underweight - Let's build some muscle!");
    else if (bmiValue < 25) setMessage("Normal - You are in great shape!");
    else if (bmiValue < 30) setMessage("Overweight - Time to hit the cardio!");
    else setMessage("Obese - Let's start your transformation today!");
    
    setLoading(false);
  };

  return (
    <section id="bmi" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* ADDED SECTION HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-yellow-600 dark:text-[#ffcc00] text-6xl md:text-7xl font-black uppercase text-center mb-16 tracking-tighter"
        >
          BMI Calculator
        </motion.h2>

        <div className="max-w-4xl mx-auto bg-[#d6d0bc] dark:bg-[#3e3a28] rounded-3xl overflow-hidden shadow-2xl border border-gray-300 dark:border-white/10 flex flex-col md:flex-row">
          
          {/* Left Side: Info */}
          <div className="md:w-1/3 bg-yellow-500 p-10 flex flex-col justify-center items-center text-black">
            <h3 className="text-4xl font-black uppercase italic leading-none mb-4 text-center">Check Your BMI</h3>
            <p className="font-bold text-center text-sm">Track your fitness journey with precision.</p>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-2/3 p-10 md:p-14">
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 dark:text-white font-bold mb-2 uppercase text-sm tracking-widest">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175" 
                    required 
                    className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none outline-none text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-gray-800 dark:text-white font-bold mb-2 uppercase text-sm tracking-widest">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70" 
                    required 
                    className="w-full p-4 bg-[#a8a28e] dark:bg-[#8b8771] rounded-xl border-none outline-none text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 transition-all" 
                  />
                </div>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-5 bg-black dark:bg-[#ffcc00] text-white dark:text-black rounded-xl font-black uppercase text-2xl tracking-tighter hover:bg-gray-900 dark:hover:bg-yellow-500 transition-all transform active:scale-95 disabled:opacity-50"
              >
                {loading ? "Calculating..." : "Calculate Now"}
              </button>
            </form>

            {bmi && !loading && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 text-center"
              >
                <h4 className="text-gray-900 dark:text-white text-3xl font-black uppercase tracking-tighter">Your BMI: <span className="text-yellow-600 dark:text-yellow-400">{bmi}</span></h4>
                <p className="text-gray-700 dark:text-gray-300 font-bold mt-2 uppercase text-sm tracking-widest">{message}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}