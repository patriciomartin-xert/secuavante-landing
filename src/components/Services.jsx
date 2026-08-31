import React, { useState } from 'react';
import { 
  Building2, 
  Navigation, 
  Car, 
  Monitor, 
  Search, 
  ShieldCheck, 
  X, 
  ChevronRight, 
  Cpu, 
  Sparkles, 
  Radio, 
  ShieldAlert, 
  Crown, 
  Activity, 
  FileSearch, 
  ArrowUpRight,
  Shield
} from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedModal, setSelectedModal] = useState(null);

  const servicesData = [
    {
      id: 'intramuros',
      category: 'intramuros',
      icon: Building2,
      title: 'Seguridad Intramuros de Bienes Inmuebles',
      shortDesc: 'Resguardo físico profesional para naves industriales, centros logísticos, corporativos, plazas comerciales y fraccionamientos residenciales.',
      fullDesc: 'Nuestro servicio de Seguridad Intramuros ofrece cobertura continua con guardias uniformados, capacitados en prevención de pérdidas, manejo de crisis y control estricto de accesos peatonales y vehiculares. Realizan rondines programados con puntos de marqueo electrónico y supervisión operativa de patrullaje en campo 24 horas.',
      equipment: ['Equipo de Radiocomunicación', 'Bitácora Digital de Accesos', 'Supervisión en Campo 24/7', 'Protocolo Antiintrusión'],
      features: [
        'Control de accesos peatonales, visitantes y contratistas',
        'Registro e inspección vehicular y de paquetería',
        'Rondines perimetrales con puntos de control digital',
        'Respuesta inmediata con unidades de supervisión en campo',
        'Alineación total con normativas STPS y SSC CDMX'
      ],
      badge: { label: 'Servicio Principal', type: 'main', icon: Sparkles }
    },
    {
      id: 'gps',
      category: 'movilidad',
      icon: Navigation,
      title: 'Rastreo Satelital GPS & Telemetría',
      shortDesc: 'Monitoreo remoto en tiempo real para vehículos particulares, corporativos, transporte de carga y flotillas comerciales.',
      fullDesc: 'Plataforma avanzada de rastreo GPS con instalación de dispositivos encubiertos. Permite la supervisión en vivo de rutas, definición de geocercas perimetrales, alertas por apertura no autorizada de puertas, desconexión de batería, excesos de velocidad y función de inmovilización (apagado remoto del motor) ante situaciones de robo.',
      equipment: ['GPS Encubierto de Alta Precisión', 'Botón de Pánico en Cabina', 'Paro de Motor Remoto', 'App Móvil y Plataforma Web'],
      features: [
        'Geolocalización satelital en tiempo real las 24 horas',
        'Apagado del motor remoto enlazado a nuestra Central',
        'Geocercas de seguridad con alertas instantáneas',
        'Reporte de velocidades, paradas y rendimiento de combustible',
        'Botón de pánico inalámbrico para el conductor'
      ],
      badge: { label: 'Tecnología GPS', type: 'tech', icon: Radio }
    },
    {
      id: 'eventos',
      category: 'vip',
      icon: ShieldAlert,
      title: 'Eventos Sociales, Deportivos, Públicos o Privados',
      shortDesc: 'Logística de protección, control de aforos masivos e inspección de seguridad con detectores de metal GARRETT.',
      fullDesc: 'Diseñamos e implementamos planes de seguridad para conciertos, exposiciones, convenciones corporativas, partidos deportivos y fiestas privadas exclusivas. Contamos con detectores de metal portátiles tipo raqueta marca GARRETT para un filtrado ágil y seguro de los asistentes.',
      equipment: ['Detectores de Metal GARRETT', 'Arcos de Seguridad', 'Radiofrecuencia Encriptada', 'Chalecos de Visibilidad'],
      features: [
        'Inspección y filtrado de accesos con equipos GARRETT',
        'Manejo de multitudes y protocolos de evacuación',
        'Resguardo de camerinos, zonas VIP y backstage',
        'Coordinación con autoridades locales y Protección Civil',
        'Personal de reacción rápida capacitado en primeros auxilios'
      ],
      badge: { label: 'Equipos GARRETT', type: 'equipment', icon: Shield }
    },
    {
      id: 'traslados',
      category: 'movilidad',
      icon: Car,
      title: 'Traslados Ejecutivos & Protección VIP',
      shortDesc: 'Escoltas ejecutivos, choferes de resguardo y transporte seguro para directivos, personalidades y traslado de valores.',
      fullDesc: 'Servicio de protección personal de alto nivel adaptado a ejecutivos y familias. Nuestros elementos de custodia están capacitados en conducción defensiva y evasiva, combate cercano, lectura de amenazas y primeros auxilios de emergencia. Disponibilidad de unidades ejecutivas y blindadas.',
      equipment: ['Conductores Certificados', 'Unidades Blindadas Opcionales', 'Botón de Pánico Silencioso', 'Rutas de Escape Planificadas'],
      features: [
        'Choferes escolta capacitados en maniobras evasivas',
        'Análisis previo de rutas y mapas de riesgo urbano',
        'Acompañamiento discreto y con absoluta confidencialidad',
        'Atención a visitantes internacionales y directivos VIP',
        'Unidades blindadas nivel III y V previa solicitud'
      ],
      badge: { label: 'Custodia Elite', type: 'vip', icon: Crown }
    },
    {
      id: 'monitoreo',
      category: 'intramuros',
      icon: Monitor,
      title: 'Central de Monitoreo Residencial & Empresarial',
      shortDesc: 'Supervisión centralizada 24/7 de videovigilancia CCTV, sensores de intrusión, cercas electrificadas y alarmas.',
      fullDesc: 'Centro de Comando Secuavante operado por técnicos especialistas que vigilan sus instalaciones mediante cámaras con Inteligencia Artificial. Al detectar cualquier actividad sospechosa, se activa la alerta de voz disuasiva y se despacha la patrulla de apoyo o fuerzas de seguridad pública.',
      equipment: ['Cálculo de Analíticos IA', 'Audio Disuasivo Remoto', 'Grabación Segura en Nube', 'Monitores de Alta Definición'],
      features: [
        'Monitoreo ininterrumpido 365 días al año',
        'Revisión en vivo de sistemas de CCTV de alta definición',
        'Verificación de señales de alarma y botones de pánico',
        'Activación inmediata de protocolos con la policía de CDMX / Edomex',
        'Reportes periódicos de novedades e incidencias'
      ],
      badge: { label: 'Centro de Comando', type: 'command', icon: Activity }
    },
    {
      id: 'investigacion',
      category: 'vip',
      icon: Search,
      title: 'Investigación Privada & Análisis de Riesgo',
      shortDesc: 'Auditorías situacionales, estudios socioeconómicos, pruebas toxicológicas y análisis de vulnerabilidades.',
      fullDesc: 'Brindamos servicios de consultoría especializada en gestión de riesgos para empresas que requieren evaluar la confiabilidad de sus empleados de confianza o detectar brechas de seguridad en sus activos. Realizamos investigaciones corporativas confidenciales con validez técnica.',
      equipment: ['Pruebas Antidoping 5 Páneles', 'Software de Investigación', 'Formatos de Auditoría STPS', 'Reportes Técnico-Legales'],
      features: [
        'Estudios socioeconómicos y verificación domiciliaria de candidatos',
        'Pruebas toxicológicas e investigaciones de antecedentes',
        'Auditorías de seguridad física y electrónica en plantas e inmuebles',
        'Asesoría técnica para cumplimiento normativo REPSE y STPS',
        'Absoluta secrecía y discreción profesional'
      ],
      badge: { label: 'Investigación', type: 'audit', icon: FileSearch }
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="servicios" className="section-padding services-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">SOLUCIONES INTEGRALES A TU MEDIDA</div>
          <h2 className="section-title">
            Catálogo Completo de <span className="gradient-red">Servicios de Seguridad</span>
          </h2>
          <p className="text-muted">
            Haz clic en cualquiera de nuestras tarjetas para consultar el equipamiento completo y especificaciones técnicas.
          </p>

          {/* Filter Categories */}
          <div className="services-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todos los Servicios
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'intramuros' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('intramuros')}
            >
              Intramuros & Monitoreo
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'movilidad' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('movilidad')}
            >
              Rastreo GPS & Traslados
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'vip' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('vip')}
            >
              Eventos & Protección VIP
            </button>
          </div>
        </div>

        {/* Services Grid - Entire card is clickable */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            const BadgeIcon = service.badge.icon;

            return (
              <div 
                key={service.id} 
                className="glass-card service-card clickable-card"
                onClick={() => setSelectedModal(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedModal(service);
                  }
                }}
              >
                {/* Card Top: Icon & High-Tech Badge Tag */}
                <div className="service-card-top">
                  <div className="service-icon-box glow-icon">
                    <IconComponent size={26} className="service-icon-svg" />
                  </div>

                  <span className={`tech-badge-tag badge-${service.badge.type}`}>
                    <BadgeIcon size={12} className="badge-icon-svg" />
                    <span>{service.badge.label}</span>
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="service-title">
                  {service.title}
                  <ArrowUpRight size={18} className="card-hover-arrow" />
                </h3>
                <p className="service-short">{service.shortDesc}</p>

                {/* Equipment Pills List */}
                <div className="equipment-pills-list">
                  {service.equipment.slice(0, 3).map((eq, i) => (
                    <span key={i} className="equipment-pill">
                      <Cpu size={11} className="text-cyan" />
                      {eq}
                    </span>
                  ))}
                </div>

                {/* Main Feature Highlights */}
                <div className="service-features-list">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="feature-mini-item">
                      <ShieldCheck size={14} className="text-red" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="card-click-prompt">
                  <span>Haz clic para ver equipamiento y especificaciones</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModal && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedModal(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="service-icon-box large glow-icon">
                <selectedModal.icon size={30} className="service-icon-svg" />
              </div>
              <div>
                <span className={`tech-badge-tag badge-${selectedModal.badge.type}`}>
                  {React.createElement(selectedModal.badge.icon, { size: 12, className: 'badge-icon-svg' })}
                  <span>{selectedModal.badge.label}</span>
                </span>
                <h3 className="modal-title">{selectedModal.title}</h3>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedModal.fullDesc}</p>
              
              <h4 className="modal-subtitle">Equipamiento y Tecnología Incluida:</h4>
              <div className="equipment-grid-modal">
                {selectedModal.equipment.map((eq, i) => (
                  <div key={i} className="equipment-modal-item">
                    <Cpu size={16} className="text-cyan" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>

              <h4 className="modal-subtitle" style={{ marginTop: '20px' }}>Coberturas Operativas Clave:</h4>
              <div className="modal-features-grid">
                {selectedModal.features.map((feat, i) => (
                  <div key={i} className="modal-feature-item">
                    <ShieldCheck size={18} className="text-emerald" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  const s = selectedModal;
                  setSelectedModal(null);
                  onSelectService(s);
                }}
              >
                <span>Solicitar Cotización de {selectedModal.title}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
