
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
          <h1 className="text-6xl font-black mb-8">404</h1>
          <p className="text-xl mb-12">Programme not found.</p>
          <Link to="/" className="bg-primary-600 px-8 py-4 rounded-full font-bold">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getEmailLink = (type: 'register' | 'partner') => {
    const subject = type === 'register' 
      ? `Interest in ${program.title} Registration` 
      : `Partnership Inquiry for ${program.title}`;
    const body = `Hi CityBridge Team,\n\nI am interested in learning more about the ${program.title} program. Please let me know the next steps.\n\nThank you!`;
    return `mailto:info@citybridgeurban.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img src={program.mainImage} alt={program.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-black uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Hub
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            {program.tags.map(tag => (
              <span key={tag} className="bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6 animate-fade-in-up">
            {program.title}
          </h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-light text-slate-600 italic leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            "{program.description}"
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-20 items-start">
            
            {/* Left Column: Mission & Story */}
            <div className="lg:col-span-2 space-y-20 reveal">
              <div className="space-y-8">
                <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-slate-900 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-primary-600 rounded-full"></span>
                  The Mission
                </h2>
                <div className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light space-y-6">
                  {program.longDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Impact Card */}
              <div className="relative bg-slate-950 p-12 md:p-16 rounded-[4rem] overflow-hidden text-white group shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-bl-[10rem] opacity-20 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                   <span className="block text-[10px] font-black text-accent-yellow uppercase tracking-[0.5em] mb-8">Direct Impact Story</span>
                   <p className="text-slate-200 text-3xl font-light italic leading-relaxed mb-10">
                     "{program.impactStory}"
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-accent-yellow rounded-full"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Milestone Witness</span>
                   </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="space-y-12">
                <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-slate-900 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-primary-600 rounded-full"></span>
                  Visual Journey
                </h2>
                <div className="grid grid-cols-2 gap-6 h-[600px]">
                  <div className="h-full rounded-[3rem] overflow-hidden group">
                    <img src={program.gallery[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
                  </div>
                  <div className="grid grid-rows-2 gap-6 h-full">
                    <div className="rounded-[2.5rem] overflow-hidden group">
                      <img src={program.gallery[1]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden group">
                      <img src={program.gallery[2]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="space-y-12 sticky top-32 reveal [animation-delay:400ms]">
              <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 space-y-10 shadow-xl">
                <div>
                  <h3 className="text-xs font-black text-primary-600 uppercase tracking-widest mb-6">Execution Detail</h3>
                  <div className="space-y-6">
                    {program.details.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <svg className="w-6 h-6 text-accent-yellow mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-slate-900 font-bold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-200">
                  <h3 className="text-xs font-black text-primary-600 uppercase tracking-widest mb-4">Activation Schedule</h3>
                  <p className="text-slate-900 font-black text-xl leading-tight">{program.schedule}</p>
                </div>

                <div className="pt-10 space-y-6">
                  <a href={getEmailLink('register')} className="block w-full bg-primary-600 text-white text-center py-6 rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary-600/20 hover:scale-[1.02] transition-all active:scale-95">Register Interest</a>
                  <a href={getEmailLink('partner')} className="block w-full border-4 border-slate-200 text-slate-900 text-center py-6 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">Become a Partner</a>
                </div>
              </div>

              <div className="bg-primary-900 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Background" />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <h4 className="font-display font-black text-2xl uppercase tracking-tighter">Support this Programme</h4>
                    <p className="text-slate-300 font-light leading-relaxed">Your partnership allows us to scale our impact and reach more urban youth with dignity and hope.</p>
                    <Link to="/#partner" className="inline-block text-accent-yellow font-black uppercase tracking-widest text-xs border-b-2 border-accent-yellow pb-2 group-hover:translate-x-2 transition-transform">Explore Support Options</Link>
                 </div>
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
