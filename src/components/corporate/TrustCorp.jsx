import React from 'react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';
import './TrustCorp.css';

export default function TrustCorp() {
  return (
    <section id="acreditaciones-corp" className="trust-corp-section">
      <div className="container">
        
        <div className="section-header-corp">
          <span className="section-subtitle-corp">APEGO LEGAL Y JURÍDICO</span>
          <h2 className="section-title-corp">Acreditaciones y <span className="text-red-corp">Registros Oficiales</span></h2>
          <p className="section-desc-corp">
            Operamos con estricto apego al marco regulatorio federal y estatal, garantizando certidumbre y legalidad total en tu servicio.
          </p>
        </div>

        <div className="trust-grid-corp">
          <div className="trust-card-corp-badge">
            <div className="badge-icon-box-corp">
              <FileText size={22} className="text-red-corp" />
            </div>
            <h3>Registro REPSE</h3>
            <span className="badge-code-corp">AR129038/2024</span>
            <p>Registro ante la STPS para la prestación de servicios y obras de seguridad privada especializada.</p>
          </div>

          <div className="trust-card-corp-badge highlighted-badge-corp">
            <div className="badge-icon-box-corp">
              <ShieldCheck size={22} className="text-red-corp" />
            </div>
            <h3>Autorización CDMX</h3>
            <span className="badge-code-corp">SSC CDMX N° 0304-22</span>
            <p>Permiso operativo formal otorgado por la Secretaría de Seguridad Ciudadana de la Ciudad de México.</p>
          </div>

          <div className="trust-card-corp-badge">
            <div className="badge-icon-box-corp">
              <Scale size={22} className="text-red-corp" />
            </div>
            <h3>Derechos Humanos</h3>
            <span className="badge-code-corp">Garantía Ética</span>
            <p>Protocolos formales alineados al respeto irrestricto de las garantías y derechos individuales de las personas.</p>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="quality-policy-corp-panel">
          <h4 className="quality-title-corp">Nuestra Política de Calidad</h4>
          <p className="quality-text-corp">
            "En <strong>SECUAVANTE, S.A. de C.V.</strong>, nos dedicamos a prestar servicios de protección y seguridad privada enfocados en satisfacer las expectativas de nuestros clientes mediante una gestión de riesgos efectiva, respetando los Derechos Humanos y cumpliendo con todas las leyes aplicables."
          </p>
        </div>

      </div>
    </section>
  );
}
