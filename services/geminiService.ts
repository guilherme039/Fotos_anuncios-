import { GoogleGenAI, Modality } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateAdMockup = async (
  base64ImageData: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageBytes: string = part.inlineData.data;
          const imageMimeType: string = part.inlineData.mimeType;
          return `data:${imageMimeType};base64,${base64ImageBytes}`;
        }
      }
    }
    
    throw new Error('Nenhuma imagem foi gerada pela API.');

  } catch (error) {
    console.error('Error generating ad mockup:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';
    throw new Error(`Falha ao gerar anúncio: ${errorMessage}. Por favor, tente novamente.`);
  }
};