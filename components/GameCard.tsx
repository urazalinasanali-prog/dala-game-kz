
import React from 'react';
import { Game } from '../types';
import { WHATSAPP_PHONE } from '../constants';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const orderGame = (name: string, price: string) => {
    const message = `Саламатсыз ба! Dala Game сайтынан жазып тұрмын. Осы ойынды алғым келеді: ${name}. Бағасы: ${price} тг. Каспи Ред-пен төлеуге бола ма?`;
    const url = "https://api.whatsapp.com/send?phone=" + WHATSAPP_PHONE + "&text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  const monthlyPrice = Math.round(game.price / 12);

  return (
    <div className="group bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-blue-500/50 hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.3)]">
      <div className="h-80 overflow-hidden relative">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {game.isNew && (
          <div className="absolute top-6 left-6 bg-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Новинка
          </div>
        )}
        
        {game.isSale && (
          <div className="absolute top-6 right-6 bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Акция
          </div>
        )}

        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <span className="text-white/60 text-xs font-gaming uppercase tracking-widest">{game.category}</span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 font-gaming tracking-wide text-white group-hover:text-blue-400 transition-colors">
          {game.name}
        </h3>
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-3xl font-bold text-white">{game.price.toLocaleString()} ₸</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">В рассрочку</p>
            <p className="text-sm font-bold text-red-500">{monthlyPrice.toLocaleString()} ₸ / мес</p>
          </div>
        </div>

        <button 
          onClick={() => orderGame(game.name, game.price.toString())}
          className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs active:scale-95"
        >
          Заказать игру
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
