import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
          {['Home', 'About', 'Service', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-bold uppercase transition-colors text-sm ${
                item === 'Home' 
                ? 'text-yellow-400' // This marks "Home" as active
                : 'text-white hover:text-yellow-400'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}