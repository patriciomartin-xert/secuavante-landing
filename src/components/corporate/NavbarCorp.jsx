import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import SecuavanteLogo from '../SecuavanteLogo';
import './NavbarCorp.css';

export default function NavbarCorp({ onOpenQuote, onSwitchVersion }) {
  return (
    <header className="navbar-corp">
      <div className="container navbar-corp-container">
        {/* Brand Logo */}
        <a href="#hero-corp" className="navbar-brand-corp">
          <SecuavanteLogo size={40} />
          <div className="navbar-brand-text-corp">
            <span className="brand-name-corp">SECU<span className="text-red-corp">AVANTE</span></span>
            <span className="brand-sub-corp">SEGURIDAD PRIVADA S.A. DE C.V.</span>
          </div>
        </a>

        {/* Corporate Menu */}
        <nav className="navbar-nav-corp">
          <a href="#hero-corp" className="nav-link-corp">Inicio</a>
          <a href="#servicios-corp" className="nav-link-corp">Servicios</a>
          <a href="#seleccion-corp" className="nav-link-corp">Filtros de Confianza</a>
          <a href="#acreditaciones-corp" className="nav-link-corp">Acreditaciones</a>
          <a href="#contacto-corp" className="nav-link-corp">Contacto</a>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions-corp">
          <a href="tel:5512037198" className="phone-badge-corp">
            <Phone size={14} />
            <span>55 1203 7198</span>
          </a>
          <button className="btn-primary-corp" onClick={onOpenQuote}>
            <span>Cotizar Servicio</span>
          </button>
          
          {/* Quick Switch Version */}
          <button className="version-toggle-btn" onClick={onSwitchVersion} title="Cambiar a versión Ciberseguridad">
            <span>Ver Modo Ciber 🚀</span>
          </button>
        </div>
      </div>
    </header>
  );
}
