
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBlobs from '../components/FloatingBlobs';
import { PROGRAMS } from '../constants';

const ProgramPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = PROGRAMS.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-7xl font-black mb-8">404</h1>
          <p className="text-xl mb-12 opacity-60">Programme not found.</p>
          <Link to="/" className="bg-primary-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getEmailLink = (type: 'register' | 'partner') => {
    const subject = type === 'register' 
      ? `Interest in ${program.title} Registration` 
      : `Partnership Inquiry for ${program.title}`;
    const body = `Hi Urban Ministry Team,\n\nI am interested in learning more about the ${program.title} program.\n\nThank you!`;
    return `mailto:info@citybridgeurban.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src={program.mainImage} 
            alt={program.title} 
            className="w-full h-full object-cover opacity-50 scale-110 animate-float-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="reveal">
            <Link to="/" className="group inline-flex items-center gap-3 text-white/60 font-black uppercase tracking-widest text-[10px] mb-12 hover:text-primary-400 transition-all">
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Return to Center
            </Link>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85] mb-8">
              <span className="text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:2px_#1e293b]">{program.title.split(' ')[0]}</span><br />
              <span className="text-primary-600 italic">{program.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-10">
               <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-6 py-2 rounded-full shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                  <span className="text-slate-900 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse-soft">{program.schedule}</span>
               </div>
               {program.tags.map(tag => (
                 <div key={tag} className="bg-slate-100 px-6 py-2 rounded-full border border-slate-200">
                    <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">{tag}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-32 relative overflow-hidden bg-white">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="reveal">
              <h2 className="text-primary-600 text-[10px] font-black uppercase tracking-[1em] mb-8">Strategic Insight</h2>
              <p className="text-slate-500 text-2xl md:text-3xl font-light italic leading-relaxed mb-12 border-l-8 border-primary-600 pl-10">
                "{program.longDescription}"
              </p>
              
              <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-2xl mb-12">
                 <h3 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tighter mb-8">Core Pillars</h3>
                 <div className="space-y-6">
                    {program.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span className="text-slate-700 font-bold uppercase tracking-widest text-sm">{detail}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href={getEmailLink('register')} className="bg-primary-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-3xl hover:bg-primary-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                   Get Involved
                   <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>

            <div className="reveal stagger-1">
              <div className="relative group rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-900 border-[20px] border-white group-hover:scale-[1.02] transition-all duration-1000">
                 <img src={program.hoverImage} alt="Action" className="w-full aspect-[4/5] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                 <div className="absolute bottom-16 left-16 right-16">
                    <span className="text-accent-yellow font-black uppercase tracking-[0.5em] text-[8px] mb-4 block">Ground Zero Impact</span>
                    <p className="text-white text-xl font-light italic leading-relaxed">
                      "{program.impactStory}"
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
             <h2 className="text-primary-600 text-[10px] font-black uppercase tracking-[1em] mb-6">Visual Activity Log</h2>
             <h3 className="font-display text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
               Movement <span className="text-primary-600 italic">In Action.</span>
             </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {program.gallery.map((item, i) => (
              <div key={i} className={`reveal stagger-${(i % 3) + 1} group cursor-pointer`}>
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:-translate-y-4 transition-all duration-700">
                  <img src={item.url} alt={item.label} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-10 left-10 right-10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-primary-400 font-black uppercase tracking-[0.4em] text-[8px] mb-2 block">Action Log</span>
                    <p className="text-white font-bold text-sm tracking-tight">{item.label}</p>
                  </div>
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

export default ProgramPage;
