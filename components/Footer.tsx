
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'TikTok', 
      path: 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.93 1.27-.92 2.82-1.41 4.39-1.42.13 0 .26 0 .39.01v4.03c-1.11-.04-2.25.18-3.23.76-1.03.62-1.69 1.74-1.81 2.93-.16 1.19.44 2.45 1.45 3.09.83.55 1.83.74 2.81.6 1.13-.16 2.15-.9 2.7-1.92.31-.58.45-1.24.45-1.91V.02z',
      hoverClass: 'hover:bg-black hover:text-[#25f4ee] hover:shadow-[0_0_20px_rgba(37,244,238,0.5)]'
    },
    { 
      name: 'Instagram', 
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:shadow-[0_0_20px_rgba(238,42,123,0.5)]'
    }
  ];

  return (
    <footer className="relative min-h-[600px] bg-slate-950 text-slate-400 overflow-hidden flex flex-col justify-end">
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center pointer-events-none opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2500')` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center pb-20 border-b border-white/5 mb-16 reveal">
          <div className="space-y-4">
            <h4 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tighter">Get Involved Today</h4>
            <p className="text-slate-300 text-base font-light italic opacity-80">Whether through mentorship, volunteering, or financial partnership—every hand helps build the community.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="mailto:info@citybridgeurban.org?subject=I%20want%20to%20volunteer" className="group bg-primary-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-primary-500 hover:-translate-y-1 transition-all shadow-xl flex items-center gap-2">
              Volunteer
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="#" className="group bg-white text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 hover:-translate-y-1 transition-all shadow-xl flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-600 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Donate Now
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          <div className="col-span-2 reveal stagger-1">
            <div className="flex items-center gap-4 mb-6 group cursor-pointer">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-all group-hover:rotate-6 group-hover:scale-110">CB</div>
              <span className="font-display font-black text-white text-2xl tracking-tighter uppercase leading-none">
                CityBridge<br /><span className="text-primary-600 font-light italic">Urban Center</span>
              </span>
            </div>
            <p className="text-lg leading-relaxed max-w-sm mb-8 text-slate-100 font-light italic opacity-80">
              "Connecting urban potential with infinite possibilities through creative innovation and hope."
            </p>
            
            <div className="flex gap-3 mb-8">
              {socialLinks.map((s) => (
                <a 
                  key={s.name} 
                  href="#" 
                  className={`w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-500 hover:-translate-y-2 hover:rotate-12 shadow-md group ${s.hoverClass}`}
                  title={s.name}
                >
                  <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-125" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="space-y-4">
               <h5 className="text-white font-black uppercase tracking-[0.4em] text-[8px] opacity-60">Connect via WhatsApp</h5>
               <div className="flex flex-col gap-3">
                  <a 
                    href="https://wa.me/254742655163" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg group-hover:scale-110 group-hover:rotate-6">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.012 3.823 1.54 5.96 1.54h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Keith Tadiwanashe</span>
                      <span className="text-white text-xs font-bold">+254 742 655 163</span>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/254726126061" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg group-hover:scale-110 group-hover:rotate-6">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.012 3.823 1.54 5.96 1.54h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Pastor Roy Mugambi</span>
                      <span className="text-white text-xs font-bold">+254 726 126 061</span>
                    </div>
                  </a>
               </div>
            </div>
          </div>
          
          <div className="reveal stagger-2">
            <h5 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[8px] opacity-60">Directory</h5>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-2 duration-300">Base Camp</a></li>
              <li><a href="/#programs" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-2 duration-300">Programmes</a></li>
              <li><a href="/#team" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-2 duration-300">Our Team</a></li>
              <li><a href="/#partner" className="text-slate-400 hover:text-primary-400 transition-all uppercase tracking-widest block transform hover:translate-x-2 duration-300">Partner Portal</a></li>
            </ul>
          </div>

          <div className="reveal stagger-3">
            <h5 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[8px] opacity-60">Contact</h5>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-lg group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <circle cx="12" cy="11" r="3" stroke="currentColor" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pt-1 group-hover:text-white transition-colors">Urban District<br />Kandisi, Kenya</p>
              </div>
              <a href="mailto:info@citybridgeurban.org" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-lg group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p className="text-slate-300 text-sm pt-2 group-hover:text-white transition-colors">info@citybridgeurban.org</p>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 reveal">
          <div className="text-[8px] uppercase tracking-[0.5em] font-black text-slate-600">
            &copy; {new Date().getFullYear()} CityBridge Urban Center • All Rights Reserved
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-accent-yellow via-primary-600 to-accent-teal"></div>
    </footer>
  );
};

export default Footer;
