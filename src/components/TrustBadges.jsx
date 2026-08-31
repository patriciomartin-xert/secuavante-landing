import React from 'react';
import { Award, ShieldCheck, FileText, Scale, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './TrustBadges.css';

export default function TrustBadges() {
  return (
    <section id="acreditaciones" className="section-padding trust-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">CUMPLIMIENTO LEGAL & NORMATIVO</div>
          <h2 className="section-title">
            Respaldo Oficial y <span className="gradient-red">Permisos Vigentes</span>
          </h2>
          <p className="text-muted">
            SECUAVANTE S.A. DE C.V. opera bajo la estricta regulación de las autoridades del Gobierno de la Ciudad de México y las dependencias federales correspondientes.
          </p>
        </div>

        {/* Permits Badges Display */}
        <div className="trust-grid">
          
          <div className="glass-card trust-badge-card">
            <div className="trust-card-top">
              <div className="trust-icon-box">
                <FileText size={28} className="text-cyan" />
              </div>
              <span className="badge-tag-cyan">Regulación Federal</span>
            </div>
            <h3 className="trust-badge-title">Permiso REPSE</h3>
            <p className="trust-badge-code">AR129038/2024</p>
            <p className="trust-badge-desc">
              Registro de Prestadoras de Servicios Especializados u Obras Especializadas ante la Secretaría del Trabajo y Previsión Social (STPS).
            </p>
            <div className="trust-check-line">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>CUMPLIMIENTO FISCAL Y LABORAL 100% AL DÍA</span>
            </div>
          </div>

          <div className="glass-card trust-badge-card highlight-card">
            <div className="trust-card-top">
              <div className="trust-icon-box red">
                <Award size={28} className="text-red" />
              </div>
              <span className="badge-tag">Secretaría de Seguridad CDMX</span>
            </div>
            <h3 className="trust-badge-title">Autorización SSC CDMX</h3>
            <p className="trust-badge-code text-red">N° 0304-22</p>
            <p className="trust-badge-desc">
              Permiso oficial de operación otorgado por la Secretaría de Seguridad Ciudadana de la CDMX para prestar servicios de seguridad privada e investigación.
            </p>
            <div className="trust-check-line">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>EXPEDIENTE OFICIAL N° 6026-23</span>
            </div>
          </div>

          <div className="glass-card trust-badge-card">
            <div className="trust-card-top">
              <div className="trust-icon-box">
                <Scale size={28} className="text-cyan" />
              </div>
              <span className="badge-tag-cyan">Marco de Derechos</span>
            </div>
            <h3 className="trust-badge-title">Derechos Humanos</h3>
            <p className="trust-badge-code">Apego Jurídico</p>
            <p className="trust-badge-desc">
              Garantizamos la protección y el respeto irrestricto a los Derechos Humanos en cada intervención y operativo de seguridad.
            </p>
            <div className="trust-check-line">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>PROTOCOLOS DE ACTUACIÓN ÉTICA</span>
            </div>
          </div>

        </div>

        {/* Quality Policy Box */}
        <div className="quality-policy-card glass-panel">
          <div className="policy-icon-wrapper">
            <HeartHandshake size={36} className="text-red" />
          </div>
          <div className="policy-content">
            <h3 className="policy-title">Nuestra Política de Calidad</h3>
            <blockquote className="policy-quote">
              "En <strong>SECUAVANTE, S.A. de C.V.</strong>, nos dedicamos a prestar servicios de protección y seguridad privada enfocados en satisfacer las expectativas de nuestros clientes mediante una gestión de riesgos efectiva, dando por resultado reducir y evitar acciones ilícitas, respetando los Derechos Humanos y cumpliendo con todas las leyes y reglamentos aplicables."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
