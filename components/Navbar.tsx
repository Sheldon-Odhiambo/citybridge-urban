
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Strategy', href: '/#dna' },
    { name: 'Programmes', href: '/#programs' },
    { name: 'Culture', href: '/#culture' },
    { name: 'Team', href: '/#team' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:rotate-12">UM</div>
              <span className={`font-display font-black text-xl tracking-tighter uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Urban<span className="text-primary-600 font-light italic">Ministry</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[9px] font-black uppercase tracking-widest transition-all hover:text-primary-500 relative group ${
                  scrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/#partner"
              onClick={(e) => handleLinkClick(e, '/#partner')}
              className="bg-primary-600 text-white px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-primary-700 transition-all shadow-md active:scale-95"
            >
              Partner
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2 rounded-xl transition-colors`}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          isOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-10 space-y-6 text-center bg-white/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-slate-900 hover:text-primary-600 px-4 py-3 text-xl font-black uppercase tracking-tighter border-b border-slate-50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#partner"
            onClick={(e) => handleLinkClick(e, '/#partner')}
            className="block w-full text-center bg-primary-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm"
          >
            Partner
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
