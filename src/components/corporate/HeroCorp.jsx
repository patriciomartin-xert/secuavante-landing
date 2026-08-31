import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, HeartHandshake, Clock } from 'lucide-react';
import './HeroCorp.css';

export default function HeroCorp({ onOpenQuote }) {
  const [activeImg, setActiveImg] = useState(1);

  // Transitions the guard image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev === 1 ? 2 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-corp" className="hero-corp-section">
      <div className="container hero-corp-container">
        
        {/* Left: Warm Headline & Human Proposition */}
        <div className="hero-corp-content">
          <div className="badge-tag-corp">
            <HeartHandshake size={14} className="text-red-corp" />
            <span>SEGURIDAD CON SENTIDO HUMANO</span>
          </div>

          <h1 className="hero-corp-title">
            Tu tranquilidad en manos de <span className="text-red-corp">Profesionales Certificados</span>
          </h1>

          <p className="hero-corp-desc">
            Protegemos tus instalaciones, tu empresa y a tu familia con guardias altamente capacitados, filtros éticos rigurosos y supervisión directa las 24 horas. Operamos bajo regulación oficial y total apego a la ley.
          </p>

          <div className="hero-actions-corp">
            <button className="btn-primary-corp-large" onClick={onOpenQuote}>
              Solicitar Cotización Inmediata
            </button>
            <a href="#servicios-corp" className="btn-secondary-corp-large">
              Ver Servicios Corporativos
            </a>
          </div>

          <div className="hero-trust-bullets-corp">
            <div className="bullet-corp">
              <CheckCircle2 size={16} className="text-red-corp" />
              <span>Guardias capacitados ante la STPS y registrados ante la SSC</span>
            </div>
            <div className="bullet-corp">
              <CheckCircle2 size={16} className="text-red-corp" />
              <span>Tolerancia cero a sustancias nocivas (Pruebas antidoping de 5 páneles)</span>
            </div>
          </div>
        </div>

        {/* Right: Large, friendly human photo of security officer with elegant overlay tags (No cards underneath!) */}
        <div className="hero-corp-panel">
          <div className="hero-corp-image-container">
            
            {/* Overflow-hidden container for smooth cross-fading of custom guards */}
            <div className="hero-corp-image-slides-wrap">
              {/* Image 1 */}
              <img 
                src="/friendly_security.png" 
                alt="Personal de Seguridad Certificado Secuavante - Guardia 1" 
                className={`friendly-guard-img ${activeImg === 1 ? 'active' : ''}`} 
              />
              
              {/* Image 2 */}
              <img 
                src="/friendly_security_2.png" 
                alt="Personal de Seguridad Certificado Secuavante - Guardia 2" 
                className={`friendly-guard-img ${activeImg === 2 ? 'active' : ''}`} 
              />
            </div>
            
            {/* Top-Left Floating Badge */}
            <div className="guard-overlay-badge badge-top-left">
              <Clock size={16} className="text-red-corp animate-pulse" />
              <div className="badge-text-stack">
                <span className="badge-title">Atención Continua</span>
                <span className="badge-sub">Soporte Operativo 24/7</span>
              </div>
            </div>

            {/* Bottom-Right Floating Badge */}
            <div className="guard-overlay-badge badge-bottom-right">
              <ShieldCheck size={16} className="text-emerald" />
              <div className="badge-text-stack">
                <span className="badge-title">Personal Registrado</span>
                <span className="badge-sub">Filtros ante la SSC y REPSE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
