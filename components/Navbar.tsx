
import React from 'react';
import { WHATSAPP_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const handleConsultation = () => {
    const message = "Саламатсыз ба! Консультация алғым келеді.";
    const url = "https://api.whatsapp.com/send?phone=" + WHATSAPP_PHONE + "&text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center ps-blue-glow rotate-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>
        </div>
        <span className="text-2xl font-bold tracking-tighter font-gaming">DALA GAME</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest items-center">
        <a href="#catalog" className="hover:text-blue-500 transition-colors">Каталог</a>
        <a href="#ai-assistant" className="hover:text-blue-500 transition-colors">Помощник</a>
        <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold animate-pulse">Kaspi Red 0-0-12</span>
        </div>
      </div>
      <button 
        onClick={handleConsultation}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95"
      >
        КОНСУЛЬТАЦИЯ
      </button>
    </nav>
  );
};

export default Navbar;
