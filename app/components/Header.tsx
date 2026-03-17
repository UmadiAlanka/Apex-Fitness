"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // New for bonus marks
import { Sun, Moon } from 'lucide-react'; // Professional icons

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'service', 'contact'];
      const scrollPosition = window.scrollY + 120; 
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

  // Prevent hydration mismatch (don't render the toggle until mounted)
  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md px-6 py-1 border-b border-yellow-400/10 transition-colors duration-300 dark:bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="relative w-20 h-20">
          <Image 
            src="/logo.png" 
            alt="Apex Fitness Logo" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Home', 'About', 'Service', 'Contact'].map((item) => {
            const lowerItem = item.toLowerCase();
            const isActive = activeSection === lowerItem;

            return (
              <Link 
                key={item} 
                href={`#${lowerItem}`}
                className={`font-bold uppercase transition-colors text-sm ${
                  isActive 
                  ? 'text-yellow-400' 
                  : 'text-white hover:text-yellow-400' 
                }`}
              >
                {item}
              </Link>
            );
          })}

          {/* Bonus: Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 transition-all border border-yellow-400/20 active:scale-90"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-yellow-400" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}