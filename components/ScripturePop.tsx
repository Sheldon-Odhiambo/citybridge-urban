
import React, { useState, useEffect, useCallback } from 'react';
import { BIBLE_VERSES } from '../constants';

const ScripturePop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(BIBLE_VERSES[0]);

  const showNewVerse = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * BIBLE_VERSES.length);
    setCurrentVerse(BIBLE_VERSES[randomIndex]);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    // Initial delay before the first "Pop"
    const initialTimer = setTimeout(() => {
      showNewVerse();
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, [showNewVerse]);

  useEffect(() => {
    // Use ReturnType<typeof setTimeout> to handle both browser and node environments safely
    let nextTimer: ReturnType<typeof setTimeout> | undefined;
    if (!isOpen) {
      // If closed, set a timer to pop up again after 45 seconds
      nextTimer = setTimeout(() => {
        showNewVerse();
      }, 45000);
    }
    return () => {
      if (nextTimer) {
        clearTimeout(nextTimer);
      }
    };
  }, [isOpen, showNewVerse]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-10 right-6 z-[100] w-72 sm:w-80 animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-2xl border border-primary-100 rounded-[2.5rem] p-8 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.3)] relative group overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
           <svg className="w-20 h-20 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
           </svg>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-primary-600 transition-colors bg-slate-50 rounded-full p-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
            <span className="text-primary-600 text-[9px] font-black uppercase tracking-[0.4em]">Spiritual Anchor</span>
          </div>
          
          <p className="text-slate-800 text-lg font-light italic leading-relaxed">
            "{currentVerse.text}"
          </p>
          
          <div className="flex items-center justify-between pt-5 border-t border-slate-100">
             <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{currentVerse.reference}</span>
             <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">{currentVerse.theme}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScripturePop;
