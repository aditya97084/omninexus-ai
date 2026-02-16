import { GoogleGenAI } from "@google/genai";
export class GeminiService {
  private static getAI() { return new GoogleGenAI({ apiKey: process.env.API_KEY }); }
  static async chat(prompt: string) {
    const ai = this.getAI();
    const res = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: [{role:'user', parts:[{text:prompt}]}] });
    return { text: res.text };
  }
}