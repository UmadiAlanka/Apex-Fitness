"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; 
import { Sun, Moon } from 'lucide-react'; 

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      // THE KEY: Add 'bmi' to this array
      const sections = ['home', 'about', 'service', 'bmi', 'contact'];
      const scrollPosition = window.scrollY + 150; 
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md px-6 py-1 border-b border-yellow-400/10 transition-colors duration-300 dark:bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="relative w-20 h-20">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {/* THE KEY: Add 'BMI'*/}
          {['Home', 'About', 'Service', 'BMI', 'Contact'].map((item) => {
            const lowerItem = item.toLowerCase();
            const isActive = activeSection === lowerItem;

            return (
              <Link 
                key={item} 
                href={`#${lowerItem}`}
                className={`font-bold uppercase transition-all duration-300 text-sm ${
                  isActive 
                  ? 'text-yellow-400 scale-110' 
                  : 'text-white hover:text-yellow-400' 
                }`}
              >
                {item}
              </Link>
            );
          })}

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2">
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-yellow-400" />}
          </button>
        </nav>
      </div>
    </header>
  );
}