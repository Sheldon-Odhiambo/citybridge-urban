
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBlobs from '../components/FloatingBlobs';
import { CRIB_PROGRAMS, CRIB_COHORTS, MINISTRIES, CRIB_TEAM, CRIB_VOLUNTEERS } from '../constants';

const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
];

const TESTIMONIAL_VIDEOS = [
  {
    id: 1,
    name: "Samuel K.",
    cohort: "Cohort 1",
    title: "Finding My Rhythm",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URLs
  },
  {
    id: 2,
    name: "Faith M.",
    cohort: "Cohort 1",
    title: "The Lens of Hope",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URLs
  }
];

const CribIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'skill-exchange':
      return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      );
    case 'game-nights':
      return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'classroom-cohorts':
      return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      );
    default:
      return null;
  }
};

const CribPage: React.FC = () => {
  const cohort = CRIB_COHORTS[0];
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const highlightsCount = cohort.visualHighlights.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === highlightsCount - 1 ? 0 : prev + 1));
  }, [highlightsCount]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? highlightsCount - 1 : prev - 1));
  }, [highlightsCount]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => {
      clearInterval(timer);
      clearInterval(heroTimer);
    };
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out bg-fixed bg-cover bg-center grayscale-[0.5] ${
                idx === heroIndex ? 'opacity-40' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            >
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-50"></div>
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <div className="absolute top-[15%] left-[10%] animate-drift">
              <div className="w-[40vw] h-[40vw] bg-primary-600/20 blur-[120px] animate-morph"></div>
            </div>
            <div className="absolute bottom-[20%] right-[10%] animate-drift [animation-delay:-7s]">
              <div className="w-[30vw] h-[30vw] bg-accent-yellow/10 blur-[150px] animate-morph [animation-delay:-4s]"></div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-20">
          <div className="reveal active">
            <div className="inline-block mb-10 px-8 py-2.5 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
              <span className="text-white text-[11px] font-black uppercase tracking-[0.6em] animate-pulse">The Creative Hub</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-10 uppercase tracking-tighter leading-[0.82] drop-shadow-2xl">
              <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">CRIB</span> <br />
              <span className="text-primary-500 italic drop-shadow-[0_15px_40px_rgba(59,130,246,0.4)]">CONNECTION</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-2xl font-light italic leading-relaxed px-4">
              Where urban culture finds its voice, and <span className="text-white font-bold underline decoration-primary-500 decoration-4 underline-offset-8">creative potential</span> meets eternal hope.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
           <div className="w-[1px] h-24 bg-gradient-to-b from-primary-500 to-transparent animate-bounce"></div>
        </div>
      </section>

      {/* MINISTRY CONNECTIONS OVERVIEW */}
      <section className="py-32 bg-white relative overflow-hidden">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-primary-600 text-[10px] font-black uppercase tracking-[1em] mb-6">Ministry Connections Overview</h2>
            <h3 className="font-display text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
              <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">A Unified</span> <span className="text-primary-600 italic">Vision.</span>
            </h3>
            <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-light italic leading-relaxed">
              True restoration happens when spiritual roots meet creative action. Our partnership ensures every skill mastered is grounded in community restoration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {MINISTRIES.map((m, idx) => (
              <div key={idx} className="reveal stagger-1 bg-slate-50/80 backdrop-blur-md p-12 rounded-[4rem] border border-slate-100 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="flex items-center gap-6 mb-10">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform ${idx === 0 ? 'bg-primary-600' : 'bg-slate-900'}`}>
                      {idx === 0 ? (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      )}
                   </div>
                   <div>
                      <h4 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tighter leading-tight">{m.name}</h4>
                      <p className="text-primary-600 text-[10px] font-black uppercase tracking-widest">{m.leader}</p>
                   </div>
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-slate-600 text-lg font-light leading-relaxed">
                    <span className="text-slate-900 font-bold uppercase tracking-widest text-[10px] block mb-2">Mission Parameters</span>
                    {m.mission}
                  </p>
                  <div className="pt-8 border-t border-slate-200">
                    <p className="text-slate-400 text-sm font-light italic">
                      {m.connection}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COHORT 1 VISUAL SPOTLIGHT */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f615_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 reveal">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-10 h-0.5 bg-accent-yellow rounded-full"></span>
                <span className="text-accent-yellow text-[10px] font-black uppercase tracking-[0.5em]">Legacy Track</span>
              </div>
              <h3 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-10">
                <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Cohort</span> <span className="text-primary-500 italic">One.</span>
              </h3>
              <p className="text-slate-300 text-xl font-light italic leading-relaxed mb-12 border-l-4 border-primary-600 pl-8">
                "{cohort.details}"
              </p>
              
              <div className="space-y-6">
                {cohort.stories.map((story, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all duration-500 group">
                    <p className="text-slate-200 text-lg font-light italic mb-6 leading-relaxed">"{story.quote}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center font-black text-xs text-primary-400 shadow-lg group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">{story.name[0]}</div>
                       <div>
                          <span className="block font-bold text-sm text-white">{story.name}</span>
                          <span className="block text-primary-400 text-[9px] uppercase tracking-widest">{story.role}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full reveal stagger-1">
              <div className="relative group rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] aspect-square bg-slate-900 border-8 border-white/5">
                {cohort.visualHighlights.map((slide, idx) => (
                  <div 
                    key={idx} 
                    className={`absolute inset-0 transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                      idx === activeSlide ? 'opacity-100 translate-x-0' : idx < activeSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <img 
                      src={slide.url} 
                      className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${idx === activeSlide ? 'scale-110' : 'scale-100'}`} 
                      alt={slide.caption} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 p-12 transition-all duration-700 delay-300 ${idx === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                       <div className="max-w-md bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                          <span className="text-primary-400 text-[8px] font-black uppercase tracking-[0.4em] mb-4 block">Milestone {idx + 1}</span>
                          <p className="text-white font-medium text-lg leading-relaxed italic">"{slide.caption}"</p>
                       </div>
                    </div>
                  </div>
                ))}
                
                <div className="absolute top-1/2 -translate-y-1/2 left-8 right-8 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button onClick={prevSlide} className="w-14 h-14 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center hover:bg-primary-600 transition-all text-white border border-white/20 active:scale-90">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button onClick={nextSlide} className="w-14 h-14 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center hover:bg-primary-600 transition-all text-white border border-white/20 active:scale-90">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                  {cohort.visualHighlights.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 transition-all duration-700 rounded-full ${
                        idx === activeSlide ? 'bg-primary-500 w-12' : 'bg-white/20 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUB FUNCTIONS */}
      <section className="py-32 bg-white relative overflow-hidden">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-primary-600 text-[10px] font-black uppercase tracking-[1em] mb-6">Pillars of Action</h2>
            <h3 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">Hub</span> <span className="text-primary-600 italic">Functions.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {CRIB_PROGRAMS.map((prog, idx) => (
              <div key={prog.id} className="reveal stagger-1 flex flex-col group h-full">
                <div className="relative h-[250px] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl border-4 border-slate-50 transition-all duration-700 group-hover:shadow-primary-600/20 group-hover:-translate-y-2">
                  <img src={prog.image} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110" alt={prog.title} />
                  <img src={prog.hoverImage} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100" alt={`${prog.title} action`} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-primary-600 border border-white/20 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-400 transition-all duration-500 shadow-xl z-10">
                    <CribIcon type={prog.id} />
                  </div>
                </div>
                <div className="px-6 space-y-4">
                  <h5 className="font-display font-black text-3xl text-slate-900 uppercase tracking-tighter leading-none">{prog.title}</h5>
                  <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-4 border-primary-500 pl-6 transition-colors group-hover:border-accent-yellow">
                    "{prog.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#1e3a8a33_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-primary-500 text-[10px] font-black uppercase tracking-[1em] mb-6">Testimonials</h2>
            <h3 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none">
               <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Hear Their</span> <span className="text-primary-600 italic">Stories.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div key={video.id} className="reveal stagger-1 group">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 shadow-3xl group-hover:-translate-y-2 transition-all duration-700">
                  <img 
                    src={video.thumbnail} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]" 
                    alt={video.title} 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setPlayingVideo(video.videoUrl)}
                      className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group/play"
                    >
                      <svg className="w-8 h-8 ml-1 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-primary-400 mb-4 border border-white/10">
                      Featured Story
                    </span>
                    <h4 className="text-2xl font-display font-black uppercase tracking-tighter">{video.title}</h4>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-6 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-600/20 flex items-center justify-center font-black text-primary-400 border border-primary-500/20">
                    {video.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white">{video.name}</h5>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">{video.cohort} Participant</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {playingVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-fade-in">
          <button 
            onClick={() => setPlayingVideo(null)}
            className="absolute top-10 right-10 text-white hover:text-primary-400 transition-all z-10 p-4 bg-white/5 rounded-full"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <iframe 
              src={playingVideo} 
              className="w-full h-full" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* CRIB TEAM SECTION */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
             <h2 className="text-primary-600 text-[10px] font-black uppercase tracking-[1em] mb-6">Human Infrastructure</h2>
             <h3 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
                <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">The Crib</span> <span className="text-primary-600 italic">Team.</span>
             </h3>
             <p className="text-slate-400 text-sm italic font-light tracking-wide">Connecting Vision with Action • Kandisi Urban Network</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-32">
            {CRIB_TEAM.map((member, idx) => (
              <div 
                key={idx} 
                className={`reveal stagger-1 group relative flex flex-col items-center text-center p-8 rounded-[4rem] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] ${idx === 6 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 shadow-3xl bg-slate-200 border-[12px] border-white group-hover:border-primary-100 group-hover:shadow-primary-600/10 transition-all duration-700">
                   <img 
                    src={member.image} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    alt={member.name} 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="w-full px-4">
                  <h4 className="font-display font-black text-3xl text-slate-900 uppercase tracking-tighter mb-1 transition-colors duration-500 group-hover:text-primary-600">{member.name}</h4>
                  <p className="text-primary-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 transition-all duration-500">{member.role}</p>
                  
                  <div className="relative overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                    <div className="pt-6 border-t border-slate-200">
                      <p className="text-slate-500 text-base font-light italic leading-relaxed px-4">
                        "{member.bio}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 p-16 pointer-events-none z-0">
              <svg 
                className="w-64 h-64 text-rose-500/10 animate-heartbeat" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center mb-20">
               <h4 className="text-white font-display font-black text-5xl uppercase tracking-tighter mb-4">
                 <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Our</span> <span className="text-primary-500 italic">Volunteers.</span>
               </h4>
               <p className="text-slate-400 text-[10px] uppercase tracking-[0.6em] font-black">CityBridge Urban Center <span className="text-rose-500 animate-pulse mx-2">♥</span> Support Network</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
              {CRIB_VOLUNTEERS.map((v, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 group hover:bg-white/10 transition-all duration-500">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-500/30 group-hover:border-primary-500 group-hover:scale-105 transition-all duration-500">
                     <img src={v.image} className="w-full h-full object-cover" alt={v.name} />
                  </div>
                  <div>
                    <h5 className="text-white font-display font-black text-2xl uppercase tracking-tighter mb-1">{v.name}</h5>
                    <p className="text-primary-400 text-[10px] font-black uppercase tracking-widest mb-6">{v.role}</p>
                    <p className="text-slate-400 text-sm italic font-light leading-relaxed">"{v.bio}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CribPage;
