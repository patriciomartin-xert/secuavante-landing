import React from 'react';
import { ShieldAlert, Award, FileCheck, CheckCircle2, ChevronRight, Activity, Eye, ShieldCheck, MapPin } from 'lucide-react';
import SecuavanteLogo from './SecuavanteLogo';
import './Hero.css';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow" />
      <div className="container hero-container">
        
        {/* Left Column: Headline & Value Proposition */}
        <div className="hero-content">
          <div className="badge-tag">
            <ShieldCheck size={16} />
            <span>EMPRESA AUTORIZADA Y REGISTRADA</span>
          </div>

          <h1 className="hero-title">
            Seguridad Profesional, <br />
            <span className="gradient-red">Soluciones Personales</span>
          </h1>

          <p className="hero-description">
            Líderes en <strong>Protección Intramuros, Rastreo Satelital GPS, Traslados Ejecutivos y Monitoreo Centralizado 24/7</strong>. Salvaguardamos tus bienes, patrimonio y tranquilidad con personal rigurosamente capacitado.
          </p>

          {/* Official Licenses Badges */}
          <div className="hero-permits-card glass-card">
            <div className="permit-item">
              <FileCheck size={18} className="text-cyan" />
              <div>
                <span className="permit-label">Permiso REPSE:</span>
                <strong className="permit-value">AR129038/2024</strong>
              </div>
            </div>
            <div className="permit-divider" />
            <div className="permit-item">
              <Award size={18} className="text-red" />
              <div>
                <span className="permit-label">Permiso SSC CDMX:</span>
                <strong className="permit-value">N° 0304-22</strong>
              </div>
            </div>
            <div className="permit-divider" />
            <div className="permit-item">
              <ShieldAlert size={18} className="text-emerald" />
              <div>
                <span className="permit-label">Expediente Oficial:</span>
                <strong className="permit-value">6026-23</strong>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button className="btn-primary" onClick={onOpenQuote}>
              <span>Solicitar Cotización Inmediata</span>
              <ChevronRight size={18} />
            </button>

            <a href="#servicios" className="btn-secondary">
              <span>Explorar Servicios</span>
            </a>
          </div>

          {/* Value Bullet Features */}
          <div className="hero-trust-bullets">
            <div className="trust-bullet">
              <CheckCircle2 size={16} className="text-red" />
              <span>Personal con Antidoping y Antecedentes Verificados</span>
            </div>
            <div className="trust-bullet">
              <CheckCircle2 size={16} className="text-red" />
              <span>Cumplimiento Estricto de Leyes y Derechos Humanos</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Interactive Cyber Shield */}
        <div className="hero-visual">
          <div className="hero-card-preview glass-panel animate-float">
            
            {/* Visual Radar Scanner */}
            <div className="radar-display">
              <div className="radar-circle ring-1" />
              <div className="radar-circle ring-2" />
              <div className="radar-circle ring-3" />
              <div className="radar-sweep" />
              
              <div className="radar-center-shield">
                <SecuavanteLogo size={68} />
              </div>

              {/* Ping Nodes */}
              <div className="ping-node node-1">
                <MapPin size={12} />
                <span>GPS Activo</span>
              </div>
              <div className="ping-node node-2">
                <Eye size={12} />
                <span>CCTV 24/7</span>
              </div>
            </div>

            {/* Realtime Metrics */}
            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Personal Filtrado</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Monitoreo Activo</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number">0%</span>
                <span className="stat-label">Tolerancia Riesgo</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-number">&lt;15 min</span>
                <span className="stat-label">Respuesta Operativa</span>
              </div>
            </div>

            <div className="hero-live-status">
              <Activity size={16} className="text-emerald animate-pulse" />
              <span>Centro de Control Operativo Secuavante Online</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
