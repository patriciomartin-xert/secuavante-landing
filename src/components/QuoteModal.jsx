import React, { useState } from 'react';
import { X, ShieldCheck, Send, CheckCircle2, Phone, Mail, Building2, MapPin, Sparkles, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, selectedService = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: selectedService?.title || 'Seguridad Intramuros de Bienes Inmuebles',
    location: 'CDMX / Área Metropolitana',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Launch celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola SECUAVANTE. Solicito cotización inmediata:\n\n` +
    `• Nombre: ${formData.name}\n` +
    `• Empresa: ${formData.company || 'Particular'}\n` +
    `• Teléfono: ${formData.phone}\n` +
    `• Correo: ${formData.email}\n` +
    `• Servicio Requerido: ${formData.service}\n` +
    `• Ubicación: ${formData.location}\n` +
    `• Detalles: ${formData.details || 'Sin detalles adicionales'}`
  );

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            <div className="quote-modal-header">
              <div className="modal-badge-tag">
                <Lock size={12} className="text-emerald" />
                <span>EXPEDIENTE SEGURO • ACCESO PRIORITARIO 24/7</span>
              </div>
              <h3 className="quote-modal-title">
                Solicitud de <span className="gradient-red">Cotización Inmediata</span>
              </h3>
              <p className="quote-modal-sub">
                Ingresa los datos para recibir una propuesta personalizada de seguridad en menos de 15 minutos.
              </p>
            </div>

            <form className="quote-modal-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Ej. Patricio Martín"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Empresa / Razón Social</label>
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Ej. Grupo Industrial CDMX"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Teléfono de Contacto (WhatsApp) *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="Ej. 55 1203 7198"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="contacto@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Servicio Requerido *</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="Seguridad Intramuros de Bienes Inmuebles">Seguridad Intramuros (Naves, Inmuebles, Plazas)</option>
                    <option value="Rastreo Satelital GPS & Telemetría">Rastreo Satelital GPS & Telemetría</option>
                    <option value="Eventos Sociales, Deportivos, Públicos o Privados">Eventos & Detección Metal GARRETT</option>
                    <option value="Traslados Ejecutivos & Protección VIP">Traslados Ejecutivos & Escoltas VIP</option>
                    <option value="Central de Monitoreo Residencial & Empresarial">Central de Monitoreo CCTV 24/7</option>
                    <option value="Investigación Privada & Análisis de Riesgo">Investigación Privada & Antidoping</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Ubicación del Servicio *</label>
                  <input 
                    type="text" 
                    name="location" 
                    required 
                    placeholder="Ej. Roma Norte, Cuauhtémoc, CDMX"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Detalles Específicos o Requerimientos</label>
                <textarea 
                  name="details" 
                  rows="3" 
                  placeholder="Número de elementos requeridos, turnos 12x12 o 24x24, número de unidades o metros cuadrados..."
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full submit-quote-btn">
                <Send size={18} />
                <span>Generar Propuesta y Enviar a Central</span>
              </button>
            </form>
          </>
        ) : (
          <div className="quote-success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={54} className="text-emerald" />
            </div>
            <h3>¡Solicitud Autenticada y Recibida!</h3>
            <p>
              Tu requerimiento de <strong>{formData.service}</strong> ha sido enviado con éxito a nuestra central operativa en CDMX.
            </p>

            <div className="success-actions">
              <a 
                href={`https://wa.me/525512037198?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp w-full"
              >
                <span>Enviar Directo por WhatsApp (Atención Inmediata)</span>
              </a>

              <button className="btn-secondary w-full" onClick={onClose} style={{ marginTop: '12px' }}>
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
