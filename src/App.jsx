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
import CyberExplosionOverlay from './components/CyberExplosionOverlay';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExploding, setIsExploding] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(null);

  const handleTriggerQuote = (service = null) => {
    if (service) {
      setSelectedServiceForQuote(service);
    }
    // Launch Glitch, Unscramble and Cyber Particle Explosion Effect
    setIsExploding(true);
  };

  const handleExplosionComplete = () => {
    setIsExploding(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="app-root">
      {/* Interactive Encrypted Cyber Stream Background */}
      <CyberBackground />

      {/* Cyber Code Glitch & Matrix Explosion Overlay */}
      <CyberExplosionOverlay 
        isActive={isExploding} 
        onComplete={handleExplosionComplete} 
      />

      {/* Pop-Up Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        selectedService={selectedServiceForQuote}
      />

      {/* Intro Cyber Lock Animation */}
      {showIntro && (
        <LockIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Landing App */}
      <Navbar onOpenQuote={() => handleTriggerQuote()} />
      <main>
        <Hero onOpenQuote={() => handleTriggerQuote()} />
        <Services onSelectService={(service) => handleTriggerQuote(service)} />
        <SelectionProcess />
        <TrustBadges />
        <QuoteCalculator 
          preselectedService={selectedServiceForQuote} 
          onOpenQuote={() => handleTriggerQuote()}
        />
      </main>
      <ContactFooter onOpenQuote={() => handleTriggerQuote()} />
    </div>
  );
}
