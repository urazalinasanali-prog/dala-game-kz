
import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: 'fc25',
    name: 'EA SPORTS FC 25',
    price: 12900,
    image: 'https://cdn.kanobu.ru/games/61993/c986383d-c0c4-4184-861b-75282f7b6d10.webp',
    category: 'Спорт',
    isNew: true
  },
  {
    id: 'gta5',
    name: 'GRAND THEFT AUTO V',
    price: 5900,
    image: 'https://upload.wikimedia.org/wikipedia/ru/c/c8/GTAV_Official_Cover_Art.jpg',
    category: 'Экшн'
  },
  {
    id: 'ufc5',
    name: 'EA SPORTS UFC 5',
    price: 11500,
    image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/EA_Sports_UFC_5_cover_art.jpeg',
    category: 'Спорт'
  },
  {
    id: 'mk1',
    name: 'MORTAL KOMBAT 1',
    price: 14500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbBnfc7R8HSXBd8PwjYaLLspIJ-ODn_cIUQ&s',
    category: 'Файтинг',
    isSale: true
  },
  {
    id: 'spiderman2',
    name: "MARVEL'S SPIDER-MAN 2",
    price: 15900,
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',
    category: 'Экшн'
  },
  {
    id: 'elden-ring',
    name: 'ELDEN RING',
    price: 11000,
    image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/7c/Elden_Ring_-_cover.jpg/330px-Elden_Ring_-_cover.jpg',
    category: 'Файтинг'
  }
];

export const WHATSAPP_PHONE = "77066386792";
export const CATEGORIES = ['Все', 'Спорт', 'Экшн', 'Файтинг', 'RPG'];
