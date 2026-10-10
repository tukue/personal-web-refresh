
import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Below-the-fold sections are lazy-loaded so the initial
// bundle only contains Header + Hero (fast first paint).
const Resume = lazy(() => import('@/components/Resume'));
const Education = lazy(() => import('@/components/Education'));
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

const SectionFallback = () => (
  <div className="py-20 flex justify-center" aria-hidden="true">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Resume />
            <Education />
            <Projects />
            <About />
            <Contact />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
