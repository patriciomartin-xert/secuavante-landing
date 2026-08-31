import React, { useState } from 'react';
import { Building2, Navigation, Car, Monitor, Search, ShieldCheck, X, ChevronRight, Check } from 'lucide-react';
import './ServicesCorp.css';

export default function ServicesCorp({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'intramuros',
      icon: Building2,
      title: 'Seguridad Intramuros de Bienes',
      shortDesc: 'Resguardo físico profesional y control de accesos para corporativos, plantas industriales, condominios y centros comerciales.',
      fullDesc: 'Nuestro servicio intramuros provee guardias uniformados debidamente registrados ante la SSC de la CDMX. Realizan control riguroso de visitantes, contratistas y vehículos, rondines de inspección continua y prevención de siniestros.',
      bullets: ['Guardias Registrados', 'Control de Accesos Vehiculares', 'Supervisión Continua 24/7']
    },
    {
      id: 'gps',
      icon: Navigation,
      title: 'Monitoreo Satelital GPS',
      shortDesc: 'Localización y apagado remoto en tiempo real de flotillas comerciales, vehículos corporativos y particulares.',
      fullDesc: 'Vigila tus unidades de forma remota. Cuenta con sensores de pánico, apagado electrónico del motor, alertas de velocidad y creación de geocercas para rutas seguras de transporte.',
      bullets: ['Ubicación en Tiempo Real', 'Paro de Motor Remoto', 'Botón de Alerta / Pánico']
    },
    {
      id: 'eventos',
      icon: ShieldCheck,
      title: 'Eventos Sociales y Privados',
      shortDesc: 'Coordinación logística de protección, control de aforos y filtrado con arcos y raquetas detectoras de metales.',
      fullDesc: 'Brindamos seguridad especializada para eventos corporativos, bodas, masivos y conferencias con detectores de metal Garrett y personal altamente cortés entrenado en manejo de aforos.',
      bullets: ['Detectores Garrett', 'Logística de Accesos', 'Atención Profesional y Cortés']
    },
    {
      id: 'traslados',
      icon: Car,
      title: 'Protección Ejecutiva y Escoltas',
      shortDesc: 'Conductores de seguridad altamente calificados y escoltas VIP para directivos y traslados de alta prioridad.',
      fullDesc: 'Conductores entrenados en evasión y manejo defensivo con opción a vehículos blindados. Absoluta discreción y profesionalismo para resguardo ejecutivo.',
      bullets: ['Conductores Certificados', 'Custodia de Valores', 'Discreción Absoluta']
    },
    {
      id: 'monitoreo',
      icon: Monitor,
      title: 'Vigilancia CCTV y Alarmas',
      shortDesc: 'Enlace directo de cámaras y alarmas habitacionales o comerciales con nuestra central operativa continua.',
      fullDesc: 'Supervisión automatizada con respuesta rápida. Al activarse un sensor o detectarse anomalía, coordinamos inmediatamente el despacho policial en CDMX/Edomex.',
      bullets: ['Monitoreo Continuo 24/7', 'Enlace de Emergencia', 'Analíticos de Movimiento']
    },
    {
      id: 'investigacion',
      icon: Search,
      title: 'Consultoría y Análisis de Riesgo',
      shortDesc: 'Auditorías de vulnerabilidades, estudios socioeconómicos de candidatos y exámenes toxicológicos.',
      fullDesc: 'Protege tu contratación. Ofrecemos validación completa de antecedentes, pruebas de antidoping de 5 páneles y análisis físico para mitigar riesgos internos.',
      bullets: ['Estudios Socioeconómicos', 'Antidoping 5 Páneles', 'Auditoría Situacional']
    }
  ];

  return (
    <section id="servicios-corp" className="services-corp-section">
      <div className="container">
        
        <div className="section-header-corp">
          <span className="section-subtitle-corp">NUESTRAS SOLUCIONES</span>
          <h2 className="section-title-corp">Servicios Profesionales de <span className="text-red-corp">Seguridad Privada</span></h2>
          <p className="section-desc-corp">
            Soluciones robustas pero accesibles, diseñadas para salvaguardar tus bienes más valiosos con un enfoque cercano y eficiente.
          </p>
        </div>

        <div className="services-grid-corp">
          {servicesData.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="service-card-corp"
                onClick={() => setSelectedService(s)}
              >
                <div className="icon-box-corp">
                  <Icon size={24} className="text-red-corp" />
                </div>

                <h3 className="card-title-corp">{s.title}</h3>
                <p className="card-desc-corp">{s.shortDesc}</p>

                <ul className="bullets-corp-list">
                  {s.bullets.map((b, i) => (
                    <li key={i}>
                      <Check size={14} className="text-emerald" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-footer-corp">
                  <span>Saber más e Cotizar</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Corporate Style Modal */}
      {selectedService && (
        <div className="modal-corp-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-corp-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-corp-close" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>

            <h3 className="modal-corp-title">{selectedService.title}</h3>
            <p className="modal-corp-desc">{selectedService.fullDesc}</p>

            <h4 className="modal-corp-subtitle">Características Destacadas:</h4>
            <ul className="modal-corp-features">
              {selectedService.bullets.map((b, i) => (
                <li key={i}>
                  <Check size={16} className="text-red-corp" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button 
              className="btn-primary-corp w-full"
              style={{ marginTop: '24px', padding: '12px' }}
              onClick={() => {
                const s = selectedService;
                setSelectedService(null);
                onSelectService(s);
              }}
            >
              Cotizar este Servicio Ahora
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
