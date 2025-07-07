import { HttpError } from 'wasp/server';
import type { GenerateTicketImage } from 'wasp/server/operations';

// Define input and output types for clarity
export type GenerateTicketImageInput = { prompt: string };
export type GenerateTicketImageOutput = { imageUrl: string; ticketNumber: number };

export const generateTicketImage: GenerateTicketImage<GenerateTicketImageInput, GenerateTicketImageOutput> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'Not authenticated');
  }

  // Generate a random 6-digit ticket number
  const ticketNumber = Math.floor(100000 + Math.random() * 900000);

  // In a real implementation, call OpenAI or another image API here using args.prompt
  // For now, return a placeholder image
  return {
    imageUrl: '/static/da-boi.webp',
    ticketNumber,
  };
}; 