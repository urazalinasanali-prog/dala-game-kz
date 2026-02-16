
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://gta5.su/wp-content/uploads/2018/03/gta_v_art_2018.jpg" 
          className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block kaspi-red-badge px-6 py-1.5 rounded-full text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-lg shadow-red-900/20">
          Рассрочка Kaspi Red
        </div>
        <h1 className="text-7xl md:text-9xl font-bold font-gaming mb-8 leading-[0.9] tracking-tighter">
          PS4 & PS5<br/>
          <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">DIGITAL</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Топовые игры в цифровом формате. Пожизненная гарантия. <br className="hidden md:block" />
          Молниеносная установка прямо в Астане.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#catalog" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all ps-blue-glow hover:scale-105 active:scale-95 text-center"
            >
              ОТКРЫТЬ КАТАЛОГ
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
