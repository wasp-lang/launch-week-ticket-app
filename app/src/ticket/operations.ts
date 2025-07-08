import { HttpError } from 'wasp/server';
import type { GenerateTicketImage } from 'wasp/server/operations';

// Define input and output types for clarity
export type GenerateTicketImageInput = { prompt: string };
export type GenerateTicketImageOutput = { imageNumber: number; ticketNumber: number };

export const generateTicketImage: GenerateTicketImage<GenerateTicketImageInput, GenerateTicketImageOutput> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'Not authenticated');
  }

  // Generate a random 6-digit ticket number
  const ticketNumber = Math.floor(100000 + Math.random() * 900000);

  // Select a random mascot image number (1-44)
  const randomMascotNumber = Math.floor(Math.random() * 44) + 1;

  return {
    imageNumber: randomMascotNumber,
    ticketNumber,
  };
}; 