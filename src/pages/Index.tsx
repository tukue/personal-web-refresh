
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Education from '@/components/Education';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <Hero />
          <Resume />
          <Education />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
