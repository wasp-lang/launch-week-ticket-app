import React from 'react';
import { useAuth } from 'wasp/client/auth';
import daBoi from '../client/static/da-boi.webp';

export default function TicketPage() {
  const { data: user, isLoading, error } = useAuth();

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
          <div className="w-full max-w-2xl">
            <EmptyTicketPlaceholder />
          </div>

          <button
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg 
              transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => {
              // TODO: Implement ticket generation
              console.log('Generate ticket clicked');
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

function EmptyTicketPlaceholder() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-boxdark rounded-2xl shadow-2xl p-8 ring-2 ring-primary/30 max-w-2xl mx-auto overflow-hidden">
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left: Name and role */}
          <div className="flex-1 min-w-0">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide text-left truncate">Your Name Here</div>
            <div className="text-lg md:text-xl text-gray-400 mb-4 text-left">Designer — Country <span role="img" aria-label="flag">🏳️</span></div>
          </div>
          {/* Right: Mascot/avatar */}
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-400/30 to-orange-500/20 rounded-xl">
            <img
              src={daBoi}
              alt="Wasp Mascot"
              className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-xl shadow-lg bg-white/80"
            />
          </div>
        </div>
        {/* Bottom: Date and URL */}
        <div className="flex justify-between text-xs text-gray-500 mt-8 font-mono w-full">
          <span>JUL 14-18</span>
          <span>WASP.SH</span>
        </div>
      </div>
    </div>
  );
}
