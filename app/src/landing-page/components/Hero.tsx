import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
import illustration from '../../client/static/public-exposure.png';
import { DocsUrl } from '../../shared/common';
import { githubSignInUrl } from 'wasp/client/auth';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative pt-36 w-full">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col justify-center text-left lg:pr-8">
              <h1 className="text-3xl font-bold sm:text-5xl text-gray-800 dark:text-white drop-shadow-md font-satoshi text-left">
                Wasp Launch Week <span className="text-accent-amber">#10</span>
              </h1>
              <p className="mt-8 mx-0 max-w-2xl text-lg leading-8 text-secondary dark:text-gray-200 flex flex-col items-start font-satoshi">
                <span className="font-extrabold text-4xl text-accent-amber mb-8 font-satoshi">Jul 14 – 18</span>
                <span className="font-semibold text-primary dark:text-white font-satoshi flex flex-wrap gap-2 items-center justify-start">
                  Kick-off at{' '}
                  <span className="inline-block rounded-full px-3 py-1 bg-accent-purple/20 text-accent-purple font-satoshi font-semibold">7:30 AM PT</span>
                  <span className="text-secondary dark:text-gray-400 font-satoshi">/</span>
                  <span className="inline-block rounded-full px-3 py-1 bg-accent-blue/20 text-accent-blue font-satoshi font-semibold">10:30 AM EDT</span>
                  <span className="text-secondary dark:text-gray-400 font-satoshi">/</span>
                  <span className="inline-block rounded-full px-3 py-1 bg-accent-purple/20 text-accent-purple font-satoshi font-semibold">4:30 PM CET</span>
                </span>
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href={githubSignInUrl}
                  className="rounded-md bg-accent-amber/80 backdrop-blur-md bg-opacity-80 px-8 py-4 text-xl font-extrabold text-primary shadow-lg hover:bg-accent-purple/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-amber transition-colors duration-200 flex items-center justify-center gap-3 font-satoshi"
                >
                  <FaGithub className="w-6 h-6" aria-hidden="true" />
                  Claim your ticket
                </a>
              </div>
            </div>
            {/* Right: Illustration */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src={illustration}
                  alt="Public Roadmap Illustration"
                  className="w-full h-auto rounded-3xl object-cover"
                  style={{ boxShadow: 'none', background: 'none' }}
                />
              </div>
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