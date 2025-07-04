import React from 'react';
import { useAuth } from 'wasp/client/auth';
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
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome, {username || 'User'}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Generate your Launch Week ticket
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-boxdark-2 rounded-lg p-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🎫</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Your Ticket
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Click the button below to generate your unique Launch Week ticket
              </p>
            </div>

            <button
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => {
                // TODO: Implement ticket generation
                console.log('Generate ticket clicked');
              }}
            >
              Generate My Ticket
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your ticket will be generated with your GitHub username and a unique number
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 