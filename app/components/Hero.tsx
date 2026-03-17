"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

  return (
    <header className="fixed top-0 w-full z-20 bg-black/20 backdrop-blur-md px-6 py-1 border-b border-yellow-400/10">
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
        <nav className="hidden md:flex gap-6 items-center">
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
        </nav>
      </div>
    </header>
  );
}