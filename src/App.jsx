import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Performance from './components/Performance';
import BillboardLocations from './components/BillboardLocations';
import Services from './components/Services';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero – Roadside advertising headline */}
        <Hero />

        {/* 2. Performance – Why choose Streetline / 20 Years */}
        <Performance />

        {/* 3. Billboard Locations – Featured opportunities */}
        <BillboardLocations />

        {/* 4. Services – Campaign planning, design, print, install */}
        <Services />

        {/* 5. About – Partner section with image collage */}
        <About />

        {/* 6. CTA Banner – Get your business seen */}
        <CTABanner />

        {/* 7. Contact – Enquiry form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
