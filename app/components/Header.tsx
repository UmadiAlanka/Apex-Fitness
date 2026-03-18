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

    // This is the "Intersection Observer" logic
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Only looks at the center 20% of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer which sections to watch
    const sections = ['home', 'about', 'service', 'bmi', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md px-6 py-1 border-b border-yellow-400/10 transition-colors duration-300 dark:bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="relative w-20 h-20">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>

        <nav className="hidden md:flex gap-8 items-center">
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

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 ml-4 bg-yellow-400/10 rounded-full border border-yellow-400/20 active:scale-90">
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-yellow-400" />}
          </button>
        </nav>
      </div>
    </header>
  );
}