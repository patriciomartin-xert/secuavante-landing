import React, { useState } from 'react';
import CyberBackground from './components/CyberBackground';
import LockIntro from './components/LockIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectionProcess from './components/SelectionProcess';
import TrustBadges from './components/TrustBadges';
import QuoteCalculator from './components/QuoteCalculator';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(null);

  const scrollToQuote = (service = null) => {
    if (service) {
      setSelectedServiceForQuote(service);
    }
    const quoteElement = document.getElementById('cotizador');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Interactive Encrypted Cyber Stream Background */}
      <CyberBackground />

      {/* Intro Cyber Lock Animation */}
      {showIntro && (
        <LockIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Landing App */}
      <Navbar onOpenQuote={() => scrollToQuote()} />
      <main>
        <Hero onOpenQuote={() => scrollToQuote()} />
        <Services onSelectService={(service) => scrollToQuote(service)} />
        <SelectionProcess />
        <TrustBadges />
        <QuoteCalculator preselectedService={selectedServiceForQuote} />
      </main>
      <ContactFooter />
    </div>
  );
}
