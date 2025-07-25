import React, { useState } from 'react';
import { useAuth } from 'wasp/client/auth';
import daBoi from '../client/static/da-boi.webp';
import { generateTicketImage } from 'wasp/client/operations';

export default function TicketPage() {
  const { data: user, isLoading, error } = useAuth();
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);
  const [imageNumber, setImageNumber] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // NOTE(matija): "ticket" route is (should be) for authenticated users only, we set that in main.wasp
  if (error || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Authentication Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please log in to access your tickets.
          </p>
        </div>
      </div>
    );
  }

  const username = user.username || 'User';
  console.log(user)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full flex flex-col items-center">
        <div className="mb-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome, {username || 'User'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Generate your Launch Week ticket
          </p>
        </div>

        <div className="w-full flex flex-col items-center space-y-8">
          {/* Wide ticket placeholder */}
          <div className="w-full max-w-4xl">
            <Ticket
              ticketNumber={ticketNumber}
              imageNumber={imageNumber}
              username={username}
              showOverlay={ticketNumber === null}
            />
          </div>

          <button
            className="w-full max-w-md bg-accent-amber/90 hover:bg-accent-purple/90 text-primary font-extrabold py-3 px-6 rounded-lg shadow-lg
              transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-amber focus:ring-offset-2 border border-white/20"
            onClick={async () => {
              try {
                const response = await generateTicketImage({ prompt: `Ticket for ${username}` });
                setTicketNumber(response.ticketNumber);
                setImageNumber(response.imageNumber);
                console.log('Ticket image response:', response);
              } catch (err) {
                console.error('Failed to generate ticket image:', err);
              }
            }}
          >
            Generate My Ticket
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-md">
            Your ticket will be generated with your GitHub username and a unique number
          </p>
        </div>
      </div>
    </div>
  );
}

function Ticket({
  ticketNumber,
  imageNumber,
  username,
  showOverlay,
}: {
  ticketNumber: number | null;
  imageNumber: number | null;
  username: string;
  showOverlay: boolean;
}) {
  // Construct the mascot image URL
  const mascotImageUrl = imageNumber ? `/bois/boi-${imageNumber}.png` : daBoi;

  return (
    <div className="relative flex items-center justify-center max-w-3xl min-w-[600px] mx-auto">
      {/* Blurry overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-2xl"
          style={{ pointerEvents: 'none' }}
        >
          <span className="text-2xl font-bold text-gray-700 opacity-80">
            Generate your ticket to reveal it!
          </span>
        </div>
      )}
      {/* Outer gradient border (thinner, closer to ticket) */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: '-6px',
          left: '-6px',
          right: '-6px',
          bottom: '-6px',
          borderRadius: '1.25rem',
          padding: '1.5px',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.08) 80%, rgba(255,255,255,0) 100%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      >
        <div className="w-full h-full rounded-[inherit] bg-transparent" />
      </div>
      {/* Ticket with inner border, glass, glow, and highlight */}
      <div
        className="relative bg-gradient-to-br from-accent-amber to-warning rounded-2xl shadow-2xl p-6 ring-2 ring-primary/30 w-full max-w-3xl overflow-hidden z-20"
        style={{
          boxShadow:
            '0 0 24px 3px rgba(251,191,36,0.32), 0 0 48px 6px rgba(167,139,250,0.18)',
        }}
      >
        {/* Vertical ticket number */}
        <div
          className="absolute right-3 top-1/2 z-40 select-none"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'translateY(-50%) rotate(-180deg)',
          }}
        >
          <span className="text-2xl font-mono font-bold text-white drop-shadow-lg tracking-widest">
            {ticketNumber ? `NO ${ticketNumber}` : 'NO 000000'}
          </span>
        </div>
        {/*12nner border (glass layer) */}
        <div
          className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/50 rounded-2xl z-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 2px 24px 0 rgba(255,255,255,0.25)' }}
        />
        {/* Organic top-left highlight */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: '-8%',
            top: '-6%',
            width: '60%',
            height: '38%',
            borderTopLeftRadius: '2rem',
            background: 'radial-gradient(ellipse 60% 38% at 30% 20%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.01) 100%)',
          }}
        />
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="flex flex-row items-center justify-between">
            {/* Left: Name and role */}
            <div className="min-w-0">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-wide text-left">
                {username}
              </div>
              <div className="text-xl md:text-2xl text-gray-700 mb-6 text-left italic">Wasp Launch Week #10</div>
            </div>
            {/* Right: Mascot/avatar */}
            <div className="flex items-center justify-center relative w-48 h-48 md:w-64 md:h-64 mr-4">
              <img
                src={mascotImageUrl}
                alt="Wasp Mascot"
                className="object-contain opacity-90"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
          {/* Bottom: Date and URL */}
          <div className="flex justify-between text-base text-gray-700 mt-4 font-mono w-full">
            <span>JUL 14-18</span>
            <span>WASP.SH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
