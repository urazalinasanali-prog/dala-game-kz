import React, { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // ТВОИ НАСТРОЙКИ
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJNJu3ItvN4gbicHMmBPMEuX0iKSoi30tYKpkEMgpFlbwNXEZcgNag9JA_-mreOgiiGh4_h8Bd4QJD/pub?gid=0&single=true&output=csv";
  const WHATSAPP_PHONE = "77073244244"; 

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.text())
      .then(data => {
        // Разбиваем CSV на строки и колонки
        const rows = data.split('\n').filter(row => row.trim() !== '').slice(1);
        const parsed = rows.map(row => {
          const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          return {
            name: cols[0]?.replace(/"/g, '').trim() || 'Без названия',
            price: cols[1]?.replace(/"/g, '').trim() || '0',
            img: cols[2]?.replace(/"/g, '').trim() || ''
          };
        });
        setGames(parsed);
        setLoading(false);
      })
      .catch(err => console.error("Ошибка:", err));
  }, []);

  const sendWhatsApp = (gameName) => {
    const message = `Здравствуйте! Хочу купить игру: ${gameName}`;
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ background: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '40px 0', borderBottom: '1px solid #333', marginBottom: '40px' }}>
        <h1 style={{ color: '#00ff88', fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>DALA GAME KZ</h1>
        <p style={{ color: '#888' }}>Магазин топовых игр в твоем кармане</p>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', fontSize: '20px', color: '#00ff88' }}>Загрузка товаров...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {games.map((game, i) => (
            <div key={i} style={{ background: '#161616', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222', transition: '0.3s' }}>
              <div style={{ width: '100%', height: '350px', background: '#222' }}>
                {game.img ? (
                  <img src={game.img} alt={game.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#444' }}>Нет фото</div>
                )}
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', minHeight: '3rem' }}>{game.name}</h3>
                <div style={{ color: '#00ff88', fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '20px' }}>{game.price} ₸</div>
                <button 
                  onClick={() => sendWhatsApp(game.name)}
                  style={{ width: '100%', padding: '15px', borderRadius: '12px', border: 'none', background: '#00ff88', color: '#000', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                  КУПИТЬ ЧЕРЕЗ WHATSAPP
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;