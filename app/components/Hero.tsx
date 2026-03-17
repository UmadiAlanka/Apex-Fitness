import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" 
          alt="Gym Training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-tight">
          Achieve Your Peak <br />
          At <span className="text-yellow-400">Apex Fitness</span>
        </h1>
        
        <div className="mt-8">
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-500 transition-all transform hover:scale-105">
            Join Now
          </button>
        </div>

        <p className="mt-12 text-gray-300 max-w-xl mx-auto text-lg italic">
          "Unleash Your Full Potential. State-of-the-art facility, elite trainers, and flexible plans."
        </p>
      </div>
    </section>
  );
}