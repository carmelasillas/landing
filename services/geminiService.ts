
import { GoogleGenAI } from "@google/genai";

export const generateFatherDayMessage = async (name: string): Promise<string> => {
  const apiKey = process.env.API_KEY;

  // Si no hay API_KEY o es una de prueba, devolvemos un mensaje fijo elegante
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    console.warn("Ejecutando en modo demo sin API_KEY");
    return `Estimado ${name}, es un honor invitarle a descubrir el arte de vivir y la cultura en la mejor compañía. En Carmela Ocio Senior, cada día es una celebración de la experiencia.`;
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
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
