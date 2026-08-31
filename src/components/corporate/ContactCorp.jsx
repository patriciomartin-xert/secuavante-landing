import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import SecuavanteLogo from '../SecuavanteLogo';
import './ContactCorp.css';

export default function ContactCorp() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Seguridad Intramuros',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contacto-corp" className="contact-corp-section">
      <div className="container contact-corp-container-inner">
        
        <div className="contact-corp-grid">
          
          {/* Left Column: Brief brand info & Direct details */}
          <div className="contact-corp-brand-column">
            <div className="brand-logo-corp-row">
              <SecuavanteLogo size={48} />
              <div className="brand-corp-text">
                <h3>SECUAVANTE</h3>
                <p>Seguridad Profesional, Soluciones Personales</p>
              </div>
            </div>

            <p className="brand-corp-summary">
              Ofrecemos soluciones integrales de seguridad privada adaptadas a las necesidades específicas de tu empresa o residencia, operando con rigurosa legalidad y el mejor personal certificado.
            </p>

            <div className="contact-corp-links-list">
              <div className="contact-corp-link-item">
                <MapPin size={20} className="text-red-corp" />
                <div>
                  <strong>Dirección Corporativa:</strong>
                  <span>Calle Querétaro 238, Despacho 203, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, CDMX.</span>
                </div>
              </div>

              <div className="contact-corp-link-item">
                <Phone size={20} className="text-red-corp" />
                <div>
                  <strong>Teléfonos de Operación:</strong>
                  <div className="corp-phones-inline">
                    <a href="tel:5512037198">55 1203 7198</a>
                    <span>•</span>
                    <a href="tel:5574174021">55 7417 4021</a>
                  </div>
                </div>
              </div>

              <div className="contact-corp-link-item">
                <Mail size={20} className="text-red-corp" />
                <div>
                  <strong>Ventas y Atención:</strong>
                  <a href="mailto:ventas@secuavante.com">ventas@secuavante.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="contact-corp-form-column">
            {sent ? (
              <div className="corp-sent-success">
                <ShieldCheck size={48} className="text-emerald" />
                <h3>¡Mensaje Recibido!</h3>
                <p>Tu solicitud ha sido registrada de manera segura. Un asesor se pondrá en contacto contigo a la brevedad.</p>
                <button className="btn-secondary-corp-large" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="corp-contact-form">
                <h3>Solicita Presupuesto Formal</h3>
                <p>Ingresa tus datos y recibe una propuesta formal detallada en pocas horas.</p>

                <div className="form-group-corp">
                  <label>Nombre o Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ej. Patricio Martín"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-row-2-corp">
                  <div className="form-group-corp">
                    <label>Teléfono de Contacto *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="55 1203 7198"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group-corp">
                    <label>Correo Electrónico *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group-corp">
                  <label>Servicio de Interés</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Seguridad Intramuros">Seguridad Intramuros (Bienes e Inmuebles)</option>
                    <option value="GPS">Monitoreo Satelital GPS</option>
                    <option value="Eventos">Eventos Especiales y Metal GARRETT</option>
                    <option value="Traslados">Traslados Ejecutivos & Protección VIP</option>
                    <option value="Monitoreo">Central de Monitoreo CCTV</option>
                  </select>
                </div>

                <div className="form-group-corp">
                  <label>Detalles o Comentarios Adicionales</label>
                  <textarea 
                    rows="3" 
                    placeholder="Dinos cómo podemos ayudarte..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-corp submit-corp-btn-block">
                  <Send size={16} />
                  <span>Enviar Requerimiento</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal bar */}
        <div className="footer-legal-corp">
          <span><strong>SECUAVANTE, S.A. DE C.V.</strong> • Permiso REPSE AR129038/2024 • Autorización SSC CDMX N° 0304-22 • Expediente 6026-23</span>
          <p>© {new Date().getFullYear()} SECUAVANTE. Todos los derechos reservados. Seguridad Profesional, Soluciones Personales.</p>
        </div>

      </div>
    </footer>
  );
}
