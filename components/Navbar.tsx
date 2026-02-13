
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Connection', href: '#connection' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partner', href: '#partner' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-xl shadow-slate-900/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transition-transform group-hover:rotate-12">CB</div>
              <span className={`font-display font-black text-2xl tracking-tighter uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                CityBridge<span className="text-primary-600 font-light italic">Urban</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-primary-500 relative group ${
                  scrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#partner"
              className="bg-primary-600 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/30 hover:-translate-y-1 active:scale-95"
            >
              Get Involved
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2 hover:bg-white/10 rounded-xl transition-colors`}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-900 hover:text-primary-600 px-4 py-3 text-lg font-black uppercase tracking-tighter border-b border-slate-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#partner"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm"
          >
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
