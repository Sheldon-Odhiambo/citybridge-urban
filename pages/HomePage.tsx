
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MINISTRIES, PROGRAMS, TEAM_MEMBERS } from '../constants';

const CULTURE_IMAGES = [
  { 
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600", 
    title: "Collaborative Spirit", 
    desc: "A hub where ideas meet action and urban innovation flourishes through collective wisdom." 
  },
  { 
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1600", 
    title: "Youth Formation", 
    desc: "Empowering the next generation to lead with faith, integrity, and creative excellence." 
  },
  { 
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600", 
    title: "Skill Exchange", 
    desc: "Mastering crafts from videography to string art, turning talent into sustainable dignity." 
  },
  { 
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600", 
    title: "Faith in Action", 
    desc: "Weekly circles that bridge the gap between spiritual growth and community service." 
  },
  { 
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1600", 
    title: "Urban Expression", 
    desc: "Celebrating the vibrant culture of the city through music, arts, and entrepreneurial drive." 
  }
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === CULTURE_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev === 0 ? CULTURE_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    nextSlide();
  };

  useEffect(() => {
    let timer: number;
    if (isAutoPlay) {
      timer = window.setInterval(nextSlide, 8000);
    }
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlay]);

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2500')`,
          }}
        >
          <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.9)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-fade-in shadow-2xl">
            <span className="text-accent-yellow text-xs font-black uppercase tracking-[0.4em] drop-shadow-md">Faith in Action, Hope in the City</span>
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] uppercase tracking-tighter drop-shadow-2xl animate-fade-in-up">
            Restoring <br />
            <span className="text-accent-yellow italic">Dignity</span>.
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-100 mb-14 leading-relaxed font-light drop-shadow-lg animate-fade-in-up [animation-delay:200ms]">
            CityBridge builds bridges between faith and action, <br className="hidden md:block" />
            unlocking potential in urban spaces where <span className="font-semibold text-white underline decoration-accent-yellow decoration-2 underline-offset-8">communities thrive</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up [animation-delay:400ms]">
            <a 
              href="#partner" 
              className="group relative bg-primary-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:bg-primary-500 hover:-translate-y-1 active:scale-95 overflow-hidden text-center"
            >
              <span className="relative z-10">Start a Partnership</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#programs" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-12 py-5 rounded-full font-bold text-xl transition-all hover:-translate-y-1 active:scale-95 text-center"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </header>

      {/* Connection Network Section */}
      <section id="connection" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal translate-y-10">
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-widest mb-3">Our Roots</h2>
            <h3 className="font-display text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Ministry Connection</h3>
            <div className="w-24 h-1.5 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10">
            {MINISTRIES.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 transition-all duration-500 reveal translate-y-10 hover:bg-white hover:shadow-2xl hover:shadow-primary-900/10 group"
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                   <span className="font-display font-black text-2xl">0{idx + 1}</span>
                </div>
                <h4 className="font-display font-black text-2xl text-slate-900 mb-4 uppercase tracking-tighter">{m.name}</h4>
                <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-6">Led by {m.leader}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{m.mission}</p>
                <div className="pt-6 border-t border-slate-200 italic text-xs text-slate-400">
                  {m.connection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Discovery Hub */}
      <section id="programs" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32 reveal">
            <h2 className="text-xs font-black text-primary-600 uppercase tracking-[1em] mb-6">The Bridge Portfolio</h2>
            <h3 className="font-display text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-[0.8] mb-12">Our <br /><span className="text-primary-600 italic">Programmes</span></h3>
            <div className="w-48 h-3 bg-accent-yellow mx-auto rounded-full"></div>
          </div>

          <div className="space-y-64">
            {PROGRAMS.map((p, idx) => (
              <div key={p.id} className={`flex flex-col lg:flex-row items-center gap-20 md:gap-40 reveal ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-10 bg-slate-100 rounded-[5rem] group-hover:bg-primary-50 transition-colors duration-1000"></div>
                  <Link to={`/program/${p.id}`} className="block relative h-[500px] md:h-[750px] w-full rounded-[4.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.15)] border-[16px] border-white group-hover:-translate-y-6 transition-all duration-700 ease-out">
                    <img 
                      src={p.mainImage} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 mb-6 group-hover:animate-pulse">
                           <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                        <span className="text-white font-black uppercase tracking-[0.5em] text-xs">View Full Details</span>
                    </div>
                  </Link>
                </div>
                
                <div className="flex-1 space-y-14">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {p.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary-600 bg-primary-50 px-5 py-2 rounded-full border border-primary-100">{tag}</span>
                      ))}
                    </div>
                    <h4 className="font-display font-black text-5xl md:text-7xl text-slate-900 uppercase tracking-tighter mb-4 leading-none">{p.title}</h4>
                    <p className="text-slate-500 text-3xl leading-relaxed font-light italic opacity-80">"{p.description}"</p>
                  </div>

                  <div className="grid gap-8">
                    {p.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-8 group/item hover:translate-x-6 transition-all duration-500 cursor-default">
                        <div className="w-14 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                           <div className="w-0 h-full bg-accent-yellow group-hover/item:w-full transition-all duration-700"></div>
                        </div>
                        <span className="text-xl font-bold text-slate-800 tracking-tight group-hover/item:text-primary-600 transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Link 
                      to={`/program/${p.id}`}
                      className="group relative inline-flex items-center gap-10 bg-slate-950 text-white pl-16 pr-8 py-8 rounded-[3rem] font-black uppercase tracking-widest text-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:bg-primary-600 transition-all hover:-translate-y-3 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Explore Programme Details</span>
                      <div className="relative z-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-all group-hover:rotate-45">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Culture */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
             <div className="max-w-xl">
                <h2 className="text-sm font-black text-primary-600 uppercase tracking-widest mb-3">Urban Lifestyle</h2>
                <h3 className="font-display text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                  The Culture <br />Of <span className="text-primary-600">CityBridge</span>
                </h3>
             </div>
             <div className="flex gap-4">
                <button onClick={prevSlide} className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-xl active:scale-95 group">
                  <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-xl active:scale-95 group">
                  <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
             </div>
           </div>

           <div className="relative overflow-hidden rounded-[4rem] shadow-2xl reveal group min-h-[500px] md:h-[700px] border-[12px] border-white animate-float bg-slate-100">
              {CULTURE_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${idx === currentSlide ? 'opacity-100 translate-x-0 scale-100 z-10' : 'opacity-0 translate-x-full scale-105 pointer-events-none'}`}
                >
                  <img 
                    src={img.url} 
                    className={`w-full h-full object-cover transition-all duration-[20s] ease-in-out transform-gpu ${idx === currentSlide ? 'scale-110 translate-x-4 translate-y-2' : 'scale-100 translate-x-0 translate-y-0'} group-hover:scale-125 group-hover:-translate-x-2 group-hover:-translate-y-2`} 
                    alt={img.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
                    <div className={`max-w-3xl transition-all duration-1000 delay-300 ${idx === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                      <h4 className="text-white font-display font-black text-4xl md:text-7xl uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl">{img.title}</h4>
                      <p className="text-slate-200 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">{img.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-xs font-black text-primary-600 uppercase tracking-[1em] mb-4">The Visionaries</h2>
            <h3 className="font-display text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">Meet Our <span className="text-primary-600">Team</span></h3>
            <div className="w-24 h-1.5 bg-accent-yellow mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx} 
                className="group relative reveal translate-y-10"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl mb-10 transform-gpu transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-2">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-60"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="inline-block px-4 py-1.5 bg-accent-yellow text-slate-900 font-black text-[9px] uppercase tracking-[0.2em] rounded-full mb-3 shadow-lg">{member.specialty}</span>
                  </div>
                </div>
                <div className="px-4">
                  <h4 className="font-display font-black text-3xl text-slate-900 uppercase tracking-tighter mb-2 leading-none">{member.name}</h4>
                  <p className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-6">{member.role}</p>
                  <p className="text-slate-500 text-lg font-light leading-relaxed">{member.bio}</p>
                </div>
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
