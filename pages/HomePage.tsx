
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBlobs from '../components/FloatingBlobs';
import { PROGRAMS, TEAM_MEMBERS } from '../constants';

const STRATEGY_PILLARS = [
  { 
    id: 'home-visits',
    title: "Home Visits", 
    desc: "Bringing prayers and food hampers to each family, turning distance into close bond relationships.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    focus: "Bond Core 01",
    angle: -90
  },
  { 
    id: 'youth',
    title: "Youth Formation", 
    desc: "Coaching community youth in discipleship, compassion, and hope (Weekend Schedule).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
    focus: "Growth Hub 02",
    angle: -30
  },
  { 
    id: 'engagement',
    title: "City Engagement", 
    desc: "Partnering with local leaders to build a safer, more unified urban environment through action.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    focus: "Action Cell 03",
    angle: 30
  },
  { 
    id: 'professional',
    title: "Marketplace Leadership", 
    desc: "Mentorship programs that connect faith values with professional excellence in the marketplace.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    focus: "Influence Unit 04",
    angle: 90
  },
  { 
    id: 'skill-launchpad',
    title: "Skill Launchpad", 
    desc: "Helping business owners expand through music, painting, and string art mastery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    focus: "Economic Engine 05",
    angle: 150
  },
  { 
    id: 'crib',
    title: "Creative Arts", 
    desc: "Mastering media and arts at Crib Connection to share the true voice of the community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    focus: "Vision Lab 06",
    angle: 210
  }
];

const CULTURE_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1517732359359-616da94528ec?auto=format&fit=crop&q=80&w=1600",
    title: "Urban Life",
    subtitle: "STREET SCENES",
    desc: "The heartbeat of Kandisi is found in the daily connections on every street corner."
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600",
    title: "Youth Engagement",
    subtitle: "NEXT GENERATION",
    desc: "Empowering the next generation with hope, purpose, and spiritual foundation."
  },
  {
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600",
    title: "Creative Arts",
    subtitle: "STUDIO VIBES",
    desc: "Unlocking professional mastery through the studio at Crib Connection."
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600",
    title: "Community Bond",
    subtitle: "UNITY & HOPE",
    desc: "Restoring hope by building unbreakable relationships within our community."
  }
];

const HomePage: React.FC = () => {
  const [activeDNA, setActiveDNA] = useState<typeof STRATEGY_PILLARS[0]>(STRATEGY_PILLARS[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === CULTURE_SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? CULTURE_SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-primary-500 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/BACK1.jpg')` }}
        >
          <div className="absolute inset-0 bg-primary-950/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.9)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="inline-block mb-10 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-pulse-soft">
            <span className="text-accent-yellow text-[10px] font-black uppercase tracking-[0.5em] drop-shadow-md">Faith • Work • Hope</span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.85] uppercase tracking-tighter drop-shadow-2xl animate-fade-in-up">
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Restoring</span> <br />
            <div className="mt-2 animate-fade-in [animation-delay:400ms] inline-block">
               <span className="text-accent-yellow italic">Hope.</span>
            </div>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-14 leading-relaxed font-light drop-shadow-lg animate-fade-in-up [animation-delay:600ms]">
            CityBridge helps our <span className="text-primary-400 font-bold">community</span> find their potential through spiritual bond, creative mastery, and real action.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up [animation-delay:800ms]">
            <a href="mailto:partner@citybridgeurban.org" className="group bg-primary-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-2xl hover:bg-primary-500 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
              Partner with Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7m7-7H3"/></svg>
            </a>
            <a href="#programs" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-8 py-3.5 rounded-full font-bold text-base transition-all hover:-translate-y-1">See our Work</a>
          </div>
        </div>
      </header>

      {/* STRATEGY SECTION (DNA WHEEL) */}
      <section id="dna" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] animate-spin-slow" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-600/10 blur-[150px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-accent-yellow text-[10px] font-black uppercase tracking-[1em] mb-4">Core Strategy</h2>
            <h3 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Restoration</span> <span className="text-primary-500 italic">DNA</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base uppercase tracking-[0.4em] font-light max-w-2xl mx-auto leading-relaxed">Centres of Influence radiating restoration from the studio to the home.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Wheel */}
            <div className="lg:col-span-7 flex justify-center py-10 relative lg:min-h-[550px]">
              <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] flex items-center justify-center">
                <div className="absolute inset-0 border border-primary-600/10 rounded-full animate-orbit"></div>
                <div className="relative z-50 group cursor-default">
                  <div className="absolute inset-0 bg-primary-600/30 rounded-full blur-2xl animate-pulse scale-150"></div>
                  <div 
                    className="relative z-10 w-32 h-36 md:w-44 md:h-52 bg-slate-900 border-2 md:border-4 border-primary-600 flex flex-col items-center justify-center text-center p-5 transition-all duration-700 hover:rotate-[5deg] shadow-2xl"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black text-xl mb-3 shadow-lg animate-bounce-slow">CB</div>
                    <span className="text-white font-display font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] leading-tight">CityBridge<br/>Urban Center</span>
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
                        <line 
                          x1={x1} y1={y1} x2={x2} y2={y2} 
                          stroke={isActive ? '#3b82f6' : 'rgba(255,255,255,0.05)'} 
                          strokeWidth={isActive ? '1' : '0.3'} 
                          strokeDasharray={isActive ? "2,2" : "none"} 
                          className={`transition-all duration-500 ${isActive ? 'animate-flow-dash' : ''}`}
                        />
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
                      <button 
                        onMouseEnter={() => setActiveDNA(pillar)} 
                        className={`w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center transition-all duration-500 relative ${isActive ? 'bg-primary-600 scale-110 shadow-2xl animate-hex-pulse' : 'bg-slate-900 border border-primary-600/10 hover:border-primary-600/50 hover:bg-slate-800'}`} 
                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                      >
                        <span className={`mb-1 transition-transform duration-500 ${isActive ? 'text-white scale-110' : 'text-primary-400 group-hover:scale-110'}`}>
                          {pillar.icon}
                        </span>
                        <span className={`text-[6px] md:text-[8px] font-black uppercase tracking-tighter text-center leading-[1.1] px-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {pillar.title}
                        </span>
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
                    <p className="text-slate-200 text-lg md:text-xl font-light italic leading-relaxed italic border-l-2 border-primary-600 pl-6 mb-10">"{activeDNA.desc}"</p>
                    {activeDNA.id === 'crib' && (
                      <Link to="/crib-connection" className="inline-block text-accent-yellow font-black uppercase tracking-widest text-[9px] border-b border-accent-yellow/50 hover:border-accent-yellow transition-all">Visit Dedicated Crib Page</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES SECTION - ENHANCED WITH FLOATING BLOBS */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-32 reveal">
            <h2 className="text-[10px] font-black text-primary-600 uppercase tracking-[1em] mb-4">Roadmap to Restoration</h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
               <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">Our</span> <span className="text-primary-600 italic">Programmes</span>
            </h3>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-600 to-primary-200 -translate-x-1/2 opacity-30"></div>

            <div className="space-y-48 lg:space-y-64">
              {PROGRAMS.map((p, idx) => {
                const isReversed = idx === 1 || idx === 2;
                return (
                  <div 
                    key={p.id} 
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 reveal ${isReversed ? 'lg:flex-row-reverse' : ''} relative`}
                  >
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                      <div className="w-12 h-12 bg-white border-4 border-primary-600 rounded-full shadow-xl flex items-center justify-center text-primary-600">
                        {p.id === 'home-visits' ? (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        ) : p.id === 'next-gen' ? (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        )}
                      </div>
                    </div>

                    <div className={`flex-1 w-full relative group ${isReversed ? 'lg:pl-16' : 'lg:pr-16'}`}>
                      <Link to={`/program/${p.id}`} className="block">
                        <div className="relative h-[400px] lg:h-[550px] w-full rounded-[3.5rem] overflow-hidden shadow-3xl border-[16px] border-slate-50 group-hover:-translate-y-4 transition-all duration-1000 group-hover:shadow-primary-600/20">
                          <img 
                            src={p.mainImage} 
                            alt={p.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 grayscale-[0.2] group-hover:opacity-0 group-hover:scale-110" 
                          />
                          <img 
                            src={p.hoverImage} 
                            alt={`${p.title} action`} 
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100" 
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                          <div className="absolute bottom-12 left-12 right-12">
                            <span className="text-accent-yellow font-black uppercase tracking-[0.4em] text-[8px] mb-2 block">Restoration Hub</span>
                            <h5 className="text-white font-display font-black text-3xl uppercase tracking-tighter leading-none">{p.title}</h5>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className={`flex-1 space-y-8 ${isReversed ? 'text-left lg:text-left' : 'text-left lg:text-left'}`}>
                      <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-6 py-2 rounded-full group/weekend shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                         <div className="relative w-2 h-2">
                           <span className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                         </div>
                         <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] animate-pulse-soft">{p.schedule}</span>
                      </div>
                      
                      <h4 className="font-display font-black text-5xl md:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.9]">{p.title}</h4>
                      <p className="text-slate-500 text-xl md:text-2xl font-light italic leading-relaxed max-w-xl">"{p.description}"</p>
                      
                      <div className="pt-6">
                        <Link 
                          to={`/program/${p.id}`} 
                          className="group inline-flex items-center gap-8 bg-slate-950 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-primary-600 transition-all active:scale-95"
                        >
                          Explore Activity Log
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE CAROUSEL */}
      <section className="relative min-h-[90vh] bg-slate-950 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {CULTURE_SLIDES.map((slide, idx) => (
            <div 
              key={`bg-${idx}`}
              className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                idx === currentSlide ? 'opacity-40 scale-110 blur-sm' : 'opacity-0 scale-125 blur-xl'
              }`}
            >
              <img src={slide.image} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,transparent_0%,rgba(15,23,42,0.8)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative overflow-hidden py-20 cursor-pointer group/content"
              onClick={nextSlide}
            >
              <div className="mb-12 reveal active">
                <h2 className="text-primary-500 text-[10px] font-black uppercase tracking-[1em] mb-4">Community Pulse</h2>
                <h3 className="font-display text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none group-hover/content:text-primary-400 transition-colors duration-500">
                  <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Our</span> <span className="text-primary-500 italic group-hover/content:text-white">Culture.</span>
                </h3>
              </div>

              <div className="relative h-[300px] md:h-[400px]">
                {CULTURE_SLIDES.map((slide, idx) => (
                  <div 
                    key={`content-${idx}`}
                    className={`absolute inset-0 transition-all duration-1000 flex flex-col justify-center ${
                      idx === currentSlide 
                        ? 'opacity-100 translate-y-0 translate-x-0' 
                        : idx < currentSlide 
                          ? 'opacity-0 -translate-y-10 -translate-x-10' 
                          : 'opacity-0 translate-y-10 translate-x-10'
                    }`}
                  >
                    <span className="text-accent-yellow font-black uppercase tracking-[0.4em] text-[10px] mb-4 block animate-fade-in">{slide.subtitle}</span>
                    <h4 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-6 leading-none">
                      {slide.title}
                    </h4>
                    <p className="text-slate-300 text-xl md:text-2xl font-light italic leading-relaxed max-w-lg border-l-4 border-primary-600 pl-8 group-hover/content:border-accent-yellow transition-colors duration-500">
                      "{slide.desc}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-12" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2">
                  {CULTURE_SLIDES.map((_, idx) => (
                    <button 
                      key={`nav-dot-${idx}`}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 transition-all duration-700 rounded-full ${
                        idx === currentSlide ? 'bg-primary-500 w-12 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-white/20 w-3 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div 
              className="relative group/image perspective-1000 hidden lg:block cursor-pointer"
              onClick={nextSlide}
            >
               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4rem] shadow-3xl border-[20px] border-white/5 backdrop-blur-3xl group-hover/image:scale-[1.02] group-hover/image:border-white/10 transition-all duration-1000">
                  {CULTURE_SLIDES.map((slide, idx) => (
                    <div 
                      key={`img-box-${idx}`}
                      className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                        idx === currentSlide 
                          ? 'opacity-100 scale-100 rotate-0' 
                          : 'opacity-0 scale-125 -rotate-6'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        className="w-full h-full object-cover grayscale-[0.3] group-hover/image:grayscale-0 group-hover/image:scale-110 transition-all duration-1000" 
                        alt="" 
                      />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION - ENHANCED WITH FLOATING BLOBS */}
      <section id="team" className="py-24 bg-white relative overflow-hidden">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-[10px] font-black text-primary-600 uppercase tracking-[1em] mb-4">Leadership</h2>
            <h3 className="font-display text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
               <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">The</span> <span className="text-primary-600 italic">Team</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="reveal group bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border-4 border-slate-50 group-hover:border-primary-100 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tighter leading-none mb-2">{member.name}</h4>
                <p className="text-primary-600 text-[9px] font-black uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
