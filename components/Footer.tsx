
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative min-h-[800px] bg-slate-950 text-slate-400 overflow-hidden flex flex-col justify-end">
      {/* Visual Layer: Fixed High-Quality Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center pointer-events-none opacity-40 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2500')` }}
      ></div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.1)_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-40 pb-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mb-32">
          
          {/* Branding & Mission */}
          <div className="col-span-2 reveal -translate-x-10">
            <div className="flex items-center gap-5 mb-10 group cursor-pointer">
              <div className="w-20 h-20 bg-primary-600 rounded-[2rem] flex items-center justify-center text-white font-black text-4xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">CB</div>
              <span className="font-display font-black text-white text-5xl tracking-tighter uppercase leading-none">
                CityBridge<br /><span className="text-primary-600 font-light italic">Urban</span>
              </span>
            </div>
            <p className="text-3xl leading-relaxed max-w-lg mb-12 text-slate-100 font-light italic opacity-90">
              "Connecting urban potential with infinite possibilities through faith and innovation."
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'Facebook', path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' },
                { name: 'YouTube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
                { name: 'LinkedIn', path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' }
              ].map((s) => (
                <a 
                  key={s.name} 
                  href="#" 
                  className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition-all duration-500 hover:-translate-y-2 group shadow-lg"
                  title={s.name}
                >
                  <svg className="w-6 h-6 fill-current transition-transform group-hover:scale-125" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Navigation Links */}
          <div className="reveal translate-y-10 [animation-delay:200ms]">
            <h5 className="text-white font-black mb-12 uppercase tracking-[0.5em] text-xs opacity-60">Directory</h5>
            <ul className="space-y-8 font-bold text-lg">
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-3 duration-300">Base Camp</a></li>
              <li><a href="/#connection" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-3 duration-300">Network Hub</a></li>
              <li><a href="/#programs" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-3 duration-300">Programmes</a></li>
              <li><a href="/#impact" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-3 duration-300">Impact Data</a></li>
              <li><a href="/#partner" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-3 duration-300">Partner Portal</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="reveal translate-y-10 [animation-delay:400ms]">
            <h5 className="text-white font-black mb-12 uppercase tracking-[0.5em] text-xs opacity-60">Global Comms</h5>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                </div>
                <div className="pt-1">
                  <span className="block font-black text-white uppercase tracking-[0.3em] text-[10px] mb-2 opacity-50">Headquarters</span>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed group-hover:text-white transition-colors">Urban Ministry District<br />Kandisi, Kenya</p>
                </div>
              </div>
              <a href="mailto:info@citybridgeurban.org" className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div className="pt-1">
                  <span className="block font-black text-white uppercase tracking-[0.3em] text-[10px] mb-2 opacity-50">Email Dispatch</span>
                  <p className="text-slate-300 text-lg font-medium group-hover:text-primary-400 transition-all border-b border-transparent group-hover:border-primary-400 pb-1">info@citybridgeurban.org</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Sub-Footer / Copyright */}
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 reveal">
          <div className="text-[10px] uppercase tracking-[0.6em] font-black text-slate-500 hover:text-slate-300 transition-colors cursor-default">
            &copy; {new Date().getFullYear()} CityBridge Urban Center • Global Ministry Network
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Artist Rights</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-accent-yellow via-primary-600 to-accent-teal"></div>
    </footer>
  );
};

export default Footer;
