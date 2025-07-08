import React from 'react';
import { useAuth } from 'wasp/client/auth';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';

export function NotFoundPage() {
  const { data: user } = useAuth();

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold  mb-4'>404</h1>
        <p className='text-lg text-bodydark mb-8'>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}
