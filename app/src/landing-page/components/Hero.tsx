import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
import { DocsUrl } from '../../shared/common';
import { githubSignInUrl } from 'wasp/client/auth';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='relative pt-36 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
            <h1 className="text-4xl font-bold sm:text-6xl text-gray-800 dark:text-white drop-shadow-md font-satoshi">
              Wasp Launch Week <span className="text-accent-amber">#10</span>
            </h1>
            <p className='mt-4 mx-auto max-w-2xl text-lg leading-8 text-secondary dark:text-gray-200 flex flex-col items-center font-satoshi'>
              <span className='font-extrabold text-4xl text-accent-amber mb-2 font-satoshi'>Jul 14 – 18</span>
              <span className='font-semibold text-primary dark:text-white font-satoshi'>
                Kick-off at{' '}
                <span className='text-accent-purple dark:text-purple-300 font-satoshi'>4:30 PM CET</span>
                {' / '}
                <span className='text-accent-blue dark:text-purple-400 font-satoshi'>10:30 AM EDT</span>
                {' / '}
                <span className='text-accent-purple dark:text-purple-500 font-satoshi'>7:30 AM PT</span>
              </span>
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={githubSignInUrl}
                className='rounded-md bg-accent-amber/80 backdrop-blur-md bg-opacity-80 px-8 py-4 text-xl font-extrabold text-primary shadow-lg hover:bg-accent-purple/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-amber transition-colors duration-200 flex items-center justify-center gap-3 font-satoshi'
              >
                <FaGithub className='w-6 h-6' aria-hidden='true' />
                Claim your ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
      aria-hidden='true'
    >
      <div
        className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-accent-amber to-accent-purple opacity-40'
        style={{
          clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
      className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
      aria-hidden='true'
    >
      <div
        className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-accent-amber to-accent-purple opacity-50 w-[72.1875rem]'
        style={{
          clipPath: 'ellipse(80% 30% at 80% 50%)',
        }}
      />
    </div>
  );
}