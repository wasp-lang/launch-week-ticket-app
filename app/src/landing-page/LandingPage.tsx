import { features, faqs, footerNavigation, testimonials } from './contentSections';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className='text-primary dark:text-white dark:bg-neutral-900'>
      <main className='isolate dark:bg-neutral-900'>
        <Hero />
      </main>
    </div>
  );
}
