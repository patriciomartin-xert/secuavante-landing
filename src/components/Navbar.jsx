import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import SecuavanteLogo from './SecuavanteLogo';
import './Navbar.css';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Selección de Personal', href: '#seleccion' },
    { name: 'Validez Oficial', href: '#acreditaciones' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <SecuavanteLogo size={42} />
          <div className="navbar-brand-text">
            <span className="brand-name">SECU<span className="text-red">AVANTE</span></span>
            <span className="brand-sub">SEGURIDAD PRIVADA S.A. DE C.V.</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions desktop-only">
          <a href="tel:5512037198" className="phone-badge">
            <Phone size={15} />
            <span>55 1203 7198</span>
          </a>
          <button className="btn-primary btn-sm" onClick={onOpenQuote}>
            <span>Cotizar Servicio</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <a href="tel:5512037198" className="btn-secondary w-full">
                <Phone size={18} />
                <span>Llamar: 55 1203 7198</span>
              </a>
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
              >
                <span>Cotizar Servicio</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
