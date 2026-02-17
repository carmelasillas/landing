
import { GoogleGenAI } from "@google/genai";

export const generateFatherDayMessage = async (name: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Escribe un mensaje corto y muy elegante (máximo 40 palabras) invitando a ${name} a las actividades culturales de Carmela Ocio Senior con motivo del Día del Padre. Usa un tono cálido, respetuoso y sofisticado. Carmela es un club exclusivo para seniors donde prima el ocio de calidad.`,
    });
    return response.text || "Un día especial merece una compañía excepcional. Únase a nuestra comunidad este Día del Padre.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Celebremos juntos el arte de vivir con elegancia en Carmela Ocio Senior.";
  }
};
