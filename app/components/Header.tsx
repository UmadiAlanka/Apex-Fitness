"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; 
import { Sun, Moon, Menu, X } from 'lucide-react'; 

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
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

    const sections = ['home', 'about', 'service', 'bmi', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md px-6 py-1 border-b border-yellow-400/10 transition-colors duration-300 dark:bg-black/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="relative w-20 h-20">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>

        {/* Desktop Nav */}
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

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 ml-4 bg-yellow-400/10 rounded-full border border-yellow-400/20 active:scale-90"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-yellow-400" />}
          </button>
        </nav>

        {/* Mobile Right Side: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-yellow-400/10 rounded-full border border-yellow-400/20 active:scale-90"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-yellow-400" />}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 bg-yellow-400/10 rounded-full border border-yellow-400/20 active:scale-90"
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={20} className="text-yellow-400" />
              : <Menu size={20} className="text-yellow-400" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-1 mx-2 rounded-2xl bg-black/60 backdrop-blur-md border border-yellow-400/10 overflow-hidden">
          <nav className="flex flex-col py-2">
            {['Home', 'About', 'Service', 'BMI', 'Contact'].map((item) => {
              const lowerItem = item.toLowerCase();
              const isActive = activeSection === lowerItem;

              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(lowerItem)}
                  className={`w-full text-left px-6 py-3 font-bold uppercase text-sm tracking-widest transition-all duration-300 ${
                    isActive
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}