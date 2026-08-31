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

// Corporate Human-Centric Version Components
import NavbarCorp from './components/corporate/NavbarCorp';
import HeroCorp from './components/corporate/HeroCorp';
import ServicesCorp from './components/corporate/ServicesCorp';
import SelectionCorp from './components/corporate/SelectionCorp';
import TrustCorp from './components/corporate/TrustCorp';
import ContactCorp from './components/corporate/ContactCorp';

import { Sparkles, Users } from 'lucide-react';

export default function App() {
  const [landingVersion, setLandingVersion] = useState('corporate'); // 'corporate' | 'cyber'
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
    <div className={`app-root theme-${landingVersion}`}>
      {/* 1. Cyber-Only Elements */}
      {landingVersion === 'cyber' && (
        <>
          <CyberBackground />
          {showIntro && <LockIntro onComplete={() => setShowIntro(false)} />}
        </>
      )}

      {/* Cyber Code Glitch & Matrix Explosion Overlay (Active in both to preserve awesome experience!) */}
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

      {/* 2. Toggle Version Floating Switcher (Fixed Bottom-Left) */}
      <div className="version-switcher-pill">
        <span>Versión Activa:</span>
        <button 
          className={`switcher-btn ${landingVersion === 'corporate' ? 'active' : ''}`}
          onClick={() => setLandingVersion('corporate')}
        >
          👔 Corporativa
        </button>
        <button 
          className={`switcher-btn ${landingVersion === 'cyber' ? 'active' : ''}`}
          onClick={() => setLandingVersion('cyber')}
        >
          🚀 Ciber
        </button>
      </div>

      {/* 3. Conditionally render the selected Landing Version */}
      {landingVersion === 'cyber' ? (
        <>
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
        </>
      ) : (
        <>
          <NavbarCorp 
            onOpenQuote={() => handleTriggerQuote()} 
            onSwitchVersion={() => setLandingVersion('cyber')}
          />
          <main className="corp-main-wrapper">
            <HeroCorp onOpenQuote={() => handleTriggerQuote()} />
            <ServicesCorp onSelectService={(service) => handleTriggerQuote(service)} />
            <SelectionCorp />
            <TrustCorp />
          </main>
          <ContactCorp />
        </>
      )}
    </div>
  );
}
