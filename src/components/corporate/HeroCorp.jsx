import React from 'react';
import { Shield, FileCheck, CheckCircle2, Award, Users, HeartHandshake } from 'lucide-react';
import './HeroCorp.css';

export default function HeroCorp({ onOpenQuote }) {
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

        {/* Right: Modern, Clean Metrics Panel (No sci-fi, human trust elements) */}
        <div className="hero-corp-panel">
          <div className="hero-corp-image-container">
            <img src="/friendly_security.png" alt="Personal de Seguridad Certificado" className="friendly-guard-img" />
            <div className="guard-overlay-badge">
              <Users size={14} className="text-red-corp" />
              <span>Personal Certificado y Confiable</span>
            </div>
          </div>

          <div className="trust-main-card">
            <div className="shield-glow-box-corp">
              <Shield size={36} className="text-red-corp" />
            </div>

            <h3 className="trust-panel-title">SECUAVANTE S.A. DE C.V.</h3>
            <p className="trust-panel-sub">Registro Federal y Local Oficial</p>

            <div className="permits-corp-list">
              <div className="permit-corp-item">
                <FileCheck size={16} className="text-blue-corp" />
                <div>
                  <span className="permit-corp-label">Secretaría del Trabajo:</span>
                  <strong className="permit-corp-val">Registro REPSE AR129038/2024</strong>
                </div>
              </div>
              <div className="permit-corp-item">
                <Award size={16} className="text-blue-corp" />
                <div>
                  <span className="permit-corp-label">Secretaría de Seguridad CDMX:</span>
                  <strong className="permit-corp-val">Permiso Oficial N° 0304-22</strong>
                </div>
              </div>
            </div>

            <div className="stats-corp-mini">
              <div className="stat-corp-box">
                <span className="stat-corp-num">100%</span>
                <span className="stat-corp-lbl">Socioeconómico</span>
              </div>
              <div className="stat-corp-box">
                <span className="stat-corp-num">24/7</span>
                <span className="stat-corp-lbl">Soporte Directo</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
