
import { Component, lazy, Suspense, type ReactNode } from 'react';
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

// Isolates chunk-load/render failures to a single section so one
// failing lazy import can't block or crash the rest of the page.
class SectionErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Failed to load page section:', error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const LazySection = ({ children }: { children: ReactNode }) => (
  <SectionErrorBoundary>
    <Suspense fallback={<SectionFallback />}>{children}</Suspense>
  </SectionErrorBoundary>
);

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <Hero />
          <LazySection>
            <Resume />
          </LazySection>
          <LazySection>
            <Education />
          </LazySection>
          <LazySection>
            <Projects />
          </LazySection>
          <LazySection>
            <About />
          </LazySection>
          <LazySection>
            <Contact />
          </LazySection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
