import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Shield, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import SecuavanteLogo from './SecuavanteLogo';
import './ContactFooter.css';

export default function ContactFooter({ onOpenQuote }) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: 'Cotización',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <footer id="contacto" className="contact-footer-section">
      <div className="container section-padding">
        
        <div className="section-header">
          <div className="badge-tag">CONTACTO DIRECTO</div>
          <h2 className="section-title">
            Estamos Listos para Atender tus <span className="gradient-red">Necesidades de Seguridad</span>
          </h2>
          <p className="text-muted">
            Contáctanos hoy mismo para coordinar una evaluación de riesgos sin costo o solicitar tu cotización.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            
            <div className="glass-card contact-info-card">
              <div className="info-card-header">
                <div className="contact-icon-box">
                  <Phone size={24} className="text-red" />
                </div>
                <div>
                  <h4 className="info-card-title">Dirección de Operaciones</h4>
                  <p className="info-card-sub">Líneas de atención 24/7</p>
                </div>
              </div>
              <div className="phone-numbers-list">
                <a href="tel:5512037198" className="phone-link">
                  <span>55 1203 7198</span>
                </a>
                <a href="tel:5574174021" className="phone-link">
                  <span>55 7417 4021</span>
                </a>
                <a href="tel:5539754396" className="phone-link">
                  <span>55 3975 4396</span>
                </a>
              </div>
            </div>

            <div className="glass-card contact-info-card">
              <div className="info-card-header">
                <div className="contact-icon-box">
                  <Mail size={24} className="text-cyan" />
                </div>
                <div>
                  <h4 className="info-card-title">Correo Electrónico</h4>
                  <p className="info-card-sub">Ventas y Atención a Clientes</p>
                </div>
              </div>
              <a href="mailto:ventas@secuavante.com" className="email-link">
                ventas@secuavante.com
              </a>
            </div>

            <div className="glass-card contact-info-card">
              <div className="info-card-header">
                <div className="contact-icon-box">
                  <MapPin size={24} className="text-emerald" />
                </div>
                <div>
                  <h4 className="info-card-title">Oficinas Corporativas</h4>
                  <p className="info-card-sub">Atención previa cita</p>
                </div>
              </div>
              <p className="address-text">
                Calle Querétaro 238, Despacho 203<br />
                Colonia Roma Norte, Alcaldía Cuauhtémoc<br />
                C.P. 06700, Ciudad de México.
              </p>
              
              <a 
                href="https://maps.google.com/?q=Calle+Queretaro+238+Roma+Norte+CDMX" 
                target="_blank" 
                rel="noreferrer"
                className="map-link-btn"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column glass-panel">
            {formSent ? (
              <div className="form-success-message">
                <CheckCircle size={56} className="text-emerald" />
                <h3>¡Mensaje Enviado con Éxito!</h3>
                <p>
                  Gracias por comunicarte con SECUAVANTE. Nuestro equipo de atención revisará tu mensaje y responderá a la brevedad.
                </p>
                <button 
                  className="btn-secondary"
                  onClick={() => setFormSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Envíanos un Mensaje Directo</h3>
                <p className="form-sub">Respuesta garantizada en menos de 2 horas en horario hábil.</p>

                <div className="form-group">
                  <label className="form-label">Nombre Completo *</label>
                  <input 
                    type="text" 
                    required 
                    className="quote-input"
                    placeholder="Ej. Ing. Roberto Mendoza"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Teléfono de Contacto *</label>
                    <input 
                      type="tel" 
                      required 
                      className="quote-input"
                      placeholder="55 0000 0000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      required 
                      className="quote-input"
                      placeholder="correo@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">¿En qué podemos ayudarte?</label>
                  <select 
                    className="quote-input"
                    value={formData.asunto}
                    onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                  >
                    <option value="Cotización">Solicitar Cotización</option>
                    <option value="Intramuros">Seguridad Intramuros</option>
                    <option value="GPS">Rastreo Satelital GPS</option>
                    <option value="Traslado VIP">Traslados Ejecutivos / Escoltas</option>
                    <option value="Evento">Seguridad para Eventos</option>
                    <option value="General">Consulta General</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensaje o Comentarios *</label>
                  <textarea 
                    rows="4" 
                    required 
                    className="quote-input"
                    placeholder="Escribe brevemente tu requerimiento..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={18} />
                  <span>Enviar Mensaje a Operaciones</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Footer Strip */}
        <div className="footer-bottom-strip">
          <div className="footer-brand-meta">
            <SecuavanteLogo size={32} />
            <span><strong>SECUAVANTE, S.A. DE C.V.</strong> • Permiso REPSE AR129038/2024 • Permiso SSC CDMX N° 0304-22 • Expediente 6026-23</span>
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} SECUAVANTE. Todos los derechos reservados. Seguridad Profesional, Soluciones Personales.
          </p>
        </div>

      </div>
    </footer>
  );
}
