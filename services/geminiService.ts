
import { GoogleGenAI } from "@google/genai";
import { GAMES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert game consultant for "DALA GAME", a PlayStation digital store based in Astana, Kazakhstan.
Users are looking for PS4 and PS5 games.
We offer:
1. Remote digital installation.
2. Lifetime warranty.
3. Prices lower than official PS Store.
4. Kaspi Red (0-0-12) installments.

Our current catalog includes: ${GAMES.map(g => g.name).join(', ')}.

Instructions:
- Be friendly, professional, and helpful.
- Suggest games from our catalog first.
- If a user asks for a game not in our catalog, explain that we can likely get it and they should contact our manager.
- Explain the benefits of digital versions (fast loading, no discs, account sharing).
- Use Russian and Kazakh languages interchangeably if the user does, but default to Russian.
- Keep responses concise.
`;

export const getGameRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Извините, сейчас я не могу ответить. Пожалуйста, напишите нашему менеджеру в WhatsApp!";
  }
};
