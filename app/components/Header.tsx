import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 border-b border-yellow-400/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Use the branding asset from the drive link */}
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
          {['Home', 'About', 'Service', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 font-bold uppercase transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}