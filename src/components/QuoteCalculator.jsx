import React, { useState } from 'react';
import { Calculator, Shield, Building, Car, Navigation, Calendar, Send, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import './QuoteCalculator.css';

export default function QuoteCalculator({ preselectedService }) {
  const [serviceType, setServiceType] = useState(preselectedService?.id || 'intramuros');
  const [shifts, setShifts] = useState('24x24');
  const [guardCount, setGuardCount] = useState(2);
  const [location, setLocation] = useState('CDMX');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E63946', '#38BDF8', '#10B981', '#FFFFFF']
    });
  };

  const servicesList = [
    { id: 'intramuros', label: 'Seguridad Intramuros', icon: Building },
    { id: 'gps', label: 'Rastreo Satelital GPS', icon: Navigation },
    { id: 'traslados', label: 'Traslados Ejecutivos', icon: Car },
    { id: 'monitoreo', label: 'Central de Monitoreo', icon: Shield },
    { id: 'eventos', label: 'Eventos Especiales', icon: Calendar },
  ];

  return (
    <section id="cotizador" className="section-padding quote-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">COTIZADOR INTERACTIVO</div>
          <h2 className="section-title">
            Evalúa tu Nivel de Protección y <span className="gradient-red">Cotiza en Tiempo Real</span>
          </h2>
          <p className="text-muted">
            Configura las especificaciones de tu requerimiento y recibe una propuesta técnica personalizada de nuestro equipo de operaciones.
          </p>
        </div>

        <div className="quote-card-container glass-panel">
          {submitted ? (
            <div className="quote-success-box">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={64} className="text-emerald" />
              </div>
              <h3 className="success-title">¡Solicitud de Cotización Recibida!</h3>
              <p className="success-desc">
                Gracias, <strong>{clientName || 'Cliente'}</strong>. Un Asesor de Operaciones de Secuavante se comunicará contigo de inmediato al <strong>{clientPhone}</strong> o correo <strong>{clientEmail}</strong> para entregar la propuesta formal ajustada a tus requerimientos.
              </p>
              
              <div className="success-contact-direct">
                <span>¿Requieres atención urgente? Llámanos directamente:</span>
                <a href="tel:5512037198" className="phone-badge">
                  <Phone size={16} />
                  <span>55 1203 7198</span>
                </a>
              </div>

              <button 
                className="btn-secondary"
                onClick={() => setSubmitted(false)}
              >
                Realizar otra cotización
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form">
              
              {/* Step 1: Service Category Selection */}
              <div className="quote-step-group">
                <label className="quote-label">1. Selecciona el Tipo de Servicio Requerido:</label>
                <div className="services-select-grid">
                  {servicesList.map((s) => {
                    const IconComp = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        className={`service-option-btn ${serviceType === s.id ? 'is-selected' : ''}`}
                        onClick={() => setServiceType(s.id)}
                      >
                        <IconComp size={20} />
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Guard / Scale Configuration */}
              <div className="quote-step-group grid-2">
                <div>
                  <label className="quote-label">2. Esquema Operativo de Turnos:</label>
                  <select 
                    className="quote-input"
                    value={shifts} 
                    onChange={(e) => setShifts(e.target.value)}
                  >
                    <option value="12x12">Turnos 12x12 (Día / Noche)</option>
                    <option value="24x24">Turnos 24x24 (Descanso rotativo)</option>
                    <option value="24/7">Cobertura Continua 24/7 (365 días)</option>
                    <option value="event">Por Horas / Evento Específico</option>
                  </select>
                </div>

                <div>
                  <label className="quote-label">
                    3. Número de Elementos / Unidades: <strong>({guardCount})</strong>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={guardCount}
                    onChange={(e) => setGuardCount(parseInt(e.target.value))}
                    className="quote-slider"
                  />
                </div>
              </div>

              {/* Step 3: Location */}
              <div className="quote-step-group">
                <label className="quote-label">4. Ubicación de Cobertura:</label>
                <div className="radio-group">
                  <label className={`radio-label ${location === 'CDMX' ? 'is-checked' : ''}`}>
                    <input 
                      type="radio" 
                      name="location" 
                      value="CDMX" 
                      checked={location === 'CDMX'} 
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <span>Ciudad de México (CDMX)</span>
                  </label>
                  <label className={`radio-label ${location === 'Edomex' ? 'is-checked' : ''}`}>
                    <input 
                      type="radio" 
                      name="location" 
                      value="Edomex" 
                      checked={location === 'Edomex'} 
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <span>Estado de México (Edomex)</span>
                  </label>
                  <label className={`radio-label ${location === 'Nacional' ? 'is-checked' : ''}`}>
                    <input 
                      type="radio" 
                      name="location" 
                      value="Nacional" 
                      checked={location === 'Nacional'} 
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <span>Foráneo / Interior de la República</span>
                  </label>
                </div>
              </div>

              {/* Step 4: Client Contact Information */}
              <div className="quote-step-group">
                <label className="quote-label">5. Datos de Contacto para Envío de Cotización:</label>
                <div className="grid-3">
                  <input 
                    type="text" 
                    required 
                    placeholder="Nombre completo o Empresa *" 
                    className="quote-input"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                  <input 
                    type="tel" 
                    required 
                    placeholder="Teléfono móvil / WhatsApp *" 
                    className="quote-input"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Correo electrónico *" 
                    className="quote-input"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="quote-step-group">
                <textarea 
                  rows="3" 
                  placeholder="Detalles adicionales o requerimientos específicos (opcional)..." 
                  className="quote-input"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary quote-submit-btn">
                <Send size={18} />
                <span>Solicitar Cotización y Propuesta Técnica</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
