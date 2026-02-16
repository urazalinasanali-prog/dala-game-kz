
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import AIChatbot from './components/AIChatbot';
import { GAMES, CATEGORIES, WHATSAPP_PHONE } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredGames = selectedCategory === 'Все' 
    ? GAMES 
    : GAMES.filter(game => game.category === selectedCategory);

  const handleOrderGeneral = () => {
    const message = "Саламатсыз ба! Рассрочка туралы сұрайын деп едім.";
    const url = "https://api.whatsapp.com/send?phone=" + WHATSAPP_PHONE + "&text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Catalog Section */}
      <section id="catalog" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-5xl font-bold font-gaming uppercase tracking-tight mb-4">Каталог игр</h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-widest ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-[0_5px_15px_rgba(59,130,246,0.4)]' 
                    : 'bg-zinc-900 text-gray-500 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Kaspi Banner */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900/50 border border-red-600/30 rounded-[3rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full"></div>
            <div className="flex flex-col md:flex-row items-center gap-10 z-10">
              <div className="w-24 h-24 bg-red-600 rounded-3xl flex items-center justify-center text-4xl font-bold font-gaming shadow-[0_10px_40px_rgba(220,38,38,0.4)] rotate-12">Red</div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-bold mb-2 font-gaming italic tracking-wider">KASPI RED & KREDIT</h4>
                <p className="text-gray-400 text-lg max-w-md">Начни играть прямо сейчас — плати потом. Рассрочка 0-0-12 без переплат и скрытых комиссий.</p>
              </div>
            </div>
            <button 
              onClick={handleOrderGeneral}
              className="bg-red-600 hover:bg-red-700 px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-red-900/20 active:scale-95 z-10 text-white uppercase tracking-widest text-sm"
            >
              Оформить в рассрочку
            </button>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <AIChatbot />

      {/* Footer */}
      <footer className="py-24 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-12">
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors border border-white/5 group-hover:border-blue-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Гарантия</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors border border-white/5 group-hover:border-blue-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Скорость</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors border border-white/5 group-hover:border-blue-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Поддержка</span>
            </div>
        </div>
        <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span className="font-gaming text-xl font-bold tracking-widest">DALA GAME</span>
             </div>
             <p className="text-gray-600 uppercase tracking-[0.3em] text-[10px]">PlayStation Digital Content | 2024 | Astana, KZ</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
