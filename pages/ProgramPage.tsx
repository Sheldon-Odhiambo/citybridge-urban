
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAMS } from '../constants';

const ProgramPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = PROGRAMS.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-8">404</h1>
          <p className="text-lg mb-12 opacity-60">Programme not found.</p>
          <Link to="/" className="bg-primary-600 px-8 py-3 rounded-full font-bold">Back to Home</Link>
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
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img src={program.mainImage} alt={program.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-black uppercase tracking-widest text-[8px] mb-6 hover:gap-4 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {program.tags.map(tag => (
              <span key={tag} className="bg-primary-600 text-white text-[7px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
            {program.title}
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-light text-slate-600 italic leading-relaxed">
            "{program.description}"
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12 reveal">
              <div className="space-y-6">
                <h2 className="font-display font-black text-base uppercase tracking-widest text-slate-900 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-primary-600 rounded-full"></span>
                  Restoration Blueprint
                </h2>
                <div className="text-base text-slate-600 leading-relaxed font-light space-y-4">
                  {program.longDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Impact Card */}
              <div className="relative bg-slate-950 p-8 rounded-[2rem] overflow-hidden text-white shadow-2xl">
                <div className="relative z-10">
                   <span className="block text-[7px] font-black text-accent-yellow uppercase tracking-[0.4em] mb-3">Impact Highlight</span>
                   <p className="text-slate-100 text-lg font-light italic leading-relaxed mb-4">
                     "{program.impactStory}"
                   </p>
                   <div className="w-6 h-0.5 bg-accent-yellow rounded-full"></div>
                </div>
              </div>

              {/* Visual Journey */}
              <div className="grid grid-cols-2 gap-4">
                {program.gallery.map((img, i) => (
                  <div key={i} className={`rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-slate-50 ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-6 sticky top-24 reveal">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6 shadow-xl">
                <div>
                  <h3 className="text-[8px] font-black text-primary-600 uppercase tracking-widest mb-4">Focus Areas</h3>
                  <div className="space-y-3">
                    {program.details.map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-center">
                        <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full"></div>
                        <span className="text-slate-900 font-bold text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-[8px] font-black text-primary-600 uppercase tracking-widest mb-1.5">Schedule</h3>
                  <p className="text-slate-900 font-black text-xs uppercase tracking-tighter">{program.schedule}</p>
                </div>

                <div className="pt-4 space-y-2">
                  <a href={getEmailLink('register')} className="block w-full bg-primary-600 text-white text-center py-2.5 rounded-xl font-black uppercase tracking-widest text-[8px] shadow-lg hover:bg-primary-500 transition-all">Get Registered</a>
                  <a href={getEmailLink('partner')} className="block w-full border border-slate-300 text-slate-800 text-center py-2.5 rounded-xl font-black uppercase tracking-widest text-[8px] hover:bg-white transition-all">Partner with Program</a>
                </div>
              </div>

              <div className="bg-slate-950 rounded-[2rem] p-8 text-white shadow-2xl">
                <h4 className="font-display font-black text-sm uppercase tracking-widest mb-3">Rebuild with Us</h4>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed mb-4 opacity-80">Help us scale these initiatives to every street in the district.</p>
                <Link to="/#partner" className="text-accent-yellow font-black uppercase tracking-widest text-[7px] border-b border-accent-yellow/40 hover:border-accent-yellow transition-all">Join the Movement</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramPage;
