
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAMS, TEAM_MEMBERS } from '../constants';

const CULTURE_GALLERY = [
  { 
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1600", 
    label: "Creative Spirit", 
    sub: "Innovation Lab",
    size: "col-span-2 row-span-2" 
  },
  { 
    url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200", 
    label: "Community Pulse", 
    sub: "Urban Dialogue",
    size: "col-span-1 row-span-1" 
  },
  { 
    url: "https://images.unsplash.com/photo-1471666875520-c75081f42081?auto=format&fit=crop&q=80&w=1600", 
    label: "Architectural Hope", 
    sub: "City Blueprint",
    size: "col-span-1 row-span-2" 
  },
  { 
    url: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1200", 
    label: "Shared Life", 
    sub: "Neighborhood Table",
    size: "col-span-1 row-span-1" 
  },
  { 
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600", 
    label: "Growth Cycles", 
    sub: "Youth Leadership",
    size: "col-span-2 row-span-1" 
  },
];

const STRATEGY_PILLARS = [
  { 
    id: 'missional',
    title: "Missional Communities", 
    desc: "A house-to-house movement taking restoration directly into the living rooms of our neighbors through shared life and meals.",
    icon: "🏠",
    focus: "Network Core 01",
    angle: -90
  },
  { 
    id: 'youth',
    title: "Youth Formation", 
    desc: "Coaching the next generation to lead with integrity, discovering their unique potential in the heart of the city.",
    icon: "✨",
    focus: "Growth Hub 02",
    angle: -30
  },
  { 
    id: 'engagement',
    title: "City Engagement", 
    desc: "Proactive civic involvement, partnering with local leaders to build a safer, more unified urban environment.",
    icon: "🏙️",
    focus: "Action Cell 03",
    angle: 30
  },
  { 
    id: 'professional',
    title: "Young Professional's Cohorts", 
    desc: "Elite marketplace mentorship programs that connect faith values with top-tier professional excellence.",
    icon: "💼",
    focus: "Influence Unit 04",
    angle: 90
  },
  { 
    id: 'incubation',
    title: "Entrepreneurship Incubation", 
    desc: "Incubating startups and crafts that provide sustainable livelihoods and restore economic pride to the district.",
    icon: "🚀",
    focus: "Economic Engine 05",
    angle: 150
  },
  { 
    id: 'arts',
    title: "Arts and Media", 
    desc: "Capturing the city's true narrative through technical film, design, and audio production to change global perceptions.",
    icon: "🎨",
    focus: "Vision Lab 06",
    angle: 210
  }
];

const HomePage: React.FC = () => {
  const [activeDNA, setActiveDNA] = useState<typeof STRATEGY_PILLARS[0]>(STRATEGY_PILLARS[0]);

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-primary-500 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2500')` }}
        >
          <div className="absolute inset-0 bg-primary-950/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.9)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="inline-block mb-10 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-pulse-soft">
            <span className="text-accent-yellow text-[10px] font-black uppercase tracking-[0.5em] drop-shadow-md">Faith • Work • Hope</span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.85] uppercase tracking-tighter drop-shadow-2xl animate-fade-in-up">
            Restoring <br />
            {/* Dot moved inside the span to fix alignment issues caused by the block display */}
            <span className="text-accent-yellow italic block mt-2 animate-fade-in [animation-delay:400ms]">Dignity.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-14 leading-relaxed font-light drop-shadow-lg animate-fade-in-up [animation-delay:600ms]">
            Urban Ministry helps city neighbors find their potential through <span className="font-semibold text-white underline decoration-accent-yellow decoration-4 underline-offset-8 italic">real action</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up [animation-delay:800ms]">
            <a href="#partner" className="group bg-primary-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-2xl hover:bg-primary-500 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
              Partner with Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#programs" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-8 py-3.5 rounded-full font-bold text-base transition-all hover:-translate-y-1">See our Work</a>
          </div>
        </div>
      </header>

      {/* DNA SECTION */}
      <section id="dna" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] animate-spin-slow" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-600/10 blur-[150px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-accent-yellow text-[10px] font-black uppercase tracking-[1em] mb-4">Strategy & DNA</h2>
            <h3 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Urban <span className="text-primary-500 italic">DNA</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base uppercase tracking-[0.4em] font-light max-w-2xl mx-auto leading-relaxed">Centres of Influence radiating restoration from the studio to the street.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Honeycomb */}
            <div className="lg:col-span-7 flex justify-center py-10 relative lg:min-h-[550px]">
              <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] flex items-center justify-center">
                
                {/* Orbital Glow */}
                <div className="absolute inset-0 border border-primary-600/10 rounded-full animate-orbit"></div>
                
                {/* Central Hub */}
                <div className="relative z-50 group cursor-default">
                  <div className="absolute inset-0 bg-primary-600/30 rounded-full blur-2xl animate-pulse scale-150"></div>
                  <div 
                    className="relative z-10 w-32 h-36 md:w-44 md:h-52 bg-slate-900 border-2 md:border-4 border-primary-600 flex flex-col items-center justify-center text-center p-5 transition-all duration-700 hover:rotate-[5deg] shadow-2xl"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black text-lg mb-3 shadow-lg animate-bounce-slow">UM</div>
                    <span className="text-white font-display font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] leading-tight">Urban Studio<br/>Centers of<br/>Influence</span>
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  {STRATEGY_PILLARS.map((p) => {
                    const angle = (p.angle * Math.PI) / 180;
                    const radiusStart = 20;
                    const radiusEnd = 40;
                    const x1 = 50 + radiusStart * Math.cos(angle);
                    const y1 = 50 + radiusStart * Math.sin(angle);
                    const x2 = 50 + radiusEnd * Math.cos(angle);
                    const y2 = 50 + radiusEnd * Math.sin(angle);
                    const isActive = activeDNA.id === p.id;
                    return (
                      <g key={`path-${p.id}`}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isActive ? '#3b82f6' : 'rgba(255,255,255,0.05)'} strokeWidth={isActive ? '1' : '0.3'} strokeDasharray={isActive ? "2,2" : "none"} className={`transition-all duration-500 ${isActive ? 'animate-flow-dash' : ''}`}/>
                      </g>
                    );
                  })}
                </svg>

                {STRATEGY_PILLARS.map((pillar) => {
                  const radius = window.innerWidth < 768 ? 120 : 195;
                  const angle = (pillar.angle * Math.PI) / 180;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  const isActive = activeDNA.id === pillar.id;
                  return (
                    <div key={pillar.id} className="absolute transition-all duration-700 z-40" style={{ transform: `translate(${x}px, ${y}px)` }}>
                      <button onMouseEnter={() => setActiveDNA(pillar)} className={`w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center transition-all duration-500 relative ${isActive ? 'bg-primary-600 scale-110 shadow-2xl animate-hex-pulse' : 'bg-slate-900 border border-primary-600/10 hover:border-primary-600/50 hover:bg-slate-800'}`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <span className={`text-xl md:text-2xl mb-1 transition-transform duration-500 ${isActive ? 'text-white rotate-12' : 'text-primary-400 group-hover:rotate-12'}`}>{pillar.icon}</span>
                        <span className={`text-[6px] md:text-[8px] font-black uppercase tracking-tighter text-center leading-[1.1] px-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>{pillar.title}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Detailed Display */}
            <div className="lg:col-span-5 reveal stagger-2">
              <div className="relative group">
                <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-8 md:p-12 min-h-[420px] flex flex-col justify-center shadow-3xl overflow-hidden transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="animate-fade-in" key={activeDNA.id}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-0.5 w-12 bg-accent-yellow rounded-full"></span>
                      <span className="text-accent-yellow font-black uppercase tracking-[0.5em] text-[8px]">{activeDNA.focus}</span>
                    </div>
                    <h4 className="text-white font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-6">{activeDNA.title}</h4>
                    <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-primary-600 pl-6 mb-10">"{activeDNA.desc}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES SECTION */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-[10px] font-black text-primary-600 uppercase tracking-[1em] mb-4">Core Work</h2>
            <h3 className="font-display text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.75] mb-8">Our <br /><span className="text-primary-600 italic">Programmes</span></h3>
            <div className="w-32 h-2 bg-accent-yellow mx-auto rounded-full"></div>
          </div>

          <div className="space-y-48">
            {PROGRAMS.map((p, idx) => (
              <div key={p.id} className={`flex flex-col lg:flex-row items-center gap-12 md:gap-24 reveal stagger-${(idx % 2) + 1} ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-6 bg-slate-50 rounded-[3rem] group-hover:bg-primary-50 transition-colors duration-1000"></div>
                  <Link to={`/program/${p.id}`} className="block relative h-[350px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group-hover:-translate-y-2 transition-all duration-700">
                    <img src={p.mainImage} alt={p.title} className="w-full h-full object-cover transition-all duration-[10s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h5 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tighter leading-none">{p.title}</h5>
                    </div>
                  </Link>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-display font-black text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter leading-none">{p.title}</h4>
                    <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-light italic">"{p.description}"</p>
                  </div>
                  <div className="pt-6">
                    <Link to={`/program/${p.id}`} className="group inline-flex items-center gap-6 bg-slate-950 text-white pl-8 pr-4 py-4 rounded-[2rem] font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-primary-600 transition-all hover:-translate-y-1">
                      <span>Explore Details</span>
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE: TAPESTRY */}
      <section id="culture" className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 reveal">
             <div className="max-w-2xl">
                <h2 className="text-primary-500 text-[10px] font-black uppercase tracking-[1.2em] mb-6">Urban Tapestry</h2>
                <h3 className="font-display text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">Community <br/><span className="text-primary-600 italic">Pulse</span></h3>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            {CULTURE_GALLERY.map((item, idx) => (
              <div key={idx} className={`${item.size} relative overflow-hidden group reveal stagger-${(idx % 3) + 1} rounded-2xl shadow-2xl border-4 border-white/5 bg-slate-900 transition-all duration-700 hover:border-primary-600/40 hover:-translate-y-2`}>
                <div className="absolute inset-0 transition-transform duration-[15000ms] ease-out group-hover:scale-110">
                  <img src={item.url} className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-100" alt={item.label} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-display font-black text-xl md:text-2xl uppercase tracking-tighter leading-tight">{item.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[10px] font-black text-primary-600 uppercase tracking-[1em] mb-4">Leadership</h2>
            <h3 className="font-display text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">The <span className="text-primary-600">Team</span></h3>
            <div className="w-16 h-1 bg-accent-yellow mx-auto mt-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="group relative reveal stagger-1" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 transform-gpu transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-1 border-[10px] border-slate-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-6 right-6">
                     <h4 className="font-display font-black text-2xl text-white uppercase tracking-tighter leading-none">{member.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section id="partner" className="relative py-48 md:py-64 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1444418185997-1145401101e0?auto=format&fit=crop&q=80&w=2000" alt="City" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-10000 ease-out"/>
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-600/40 to-accent-yellow/30"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center text-white reveal relative z-10">
          <h3 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12 drop-shadow-2xl">Urban Restoration <br/><span className="text-white italic opacity-80">Requires You.</span></h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="mailto:info@citybridgeurban.org" className="group flex items-center gap-8 bg-white text-primary-600 px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-3xl hover:-translate-y-2 transition-all duration-500 active:scale-95">
              Claim Your Seat
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
