"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base tracking-wide text-center">
          © {currentYear} <span className="text-yellow-600 dark:text-yellow-400 font-bold">Apex Fitness.</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}