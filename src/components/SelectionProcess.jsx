import React, { useState } from 'react';
import { FileSearch, Brain, Stethoscope, Award, FileBadge, CheckCircle, Shield, UserCheck } from 'lucide-react';
import './SelectionProcess.css';

export default function SelectionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: FileSearch,
      title: 'Revisión e Investigación Documental',
      subtitle: 'Verificación exhaustiva',
      description: 'Auditamos a detalle la historia laboral, cartas de recomendación, referencias personales y validez de identificaciones oficiales de cada candidato.',
      tag: 'Fase 1'
    },
    {
      id: 2,
      icon: Brain,
      title: 'Examen Psicométrico y de Personalidad',
      subtitle: 'Evaluación de perfil psicológico',
      description: 'Aplicación de pruebas psicométricas estandarizadas para medir el control de estrés, toma de decisiones bajo presión y rasgos de personalidad enfocados al servicio.',
      tag: 'Fase 2'
    },
    {
      id: 3,
      icon: Stethoscope,
      title: 'Prueba de Antidoping (5 Páneles)',
      subtitle: 'Tolerancia cero a sustancias',
      description: 'Exámenes reactivos de laboratorio para detectar 5 tipos de sustancias no permitidas. Pruebas periódicas y aleatorias para todo el personal en activo.',
      tag: 'Fase 3'
    },
    {
      id: 4,
      icon: UserCheck,
      title: 'Examen de Conocimiento e Inteligencia',
      subtitle: 'Capacidad de reacción',
      description: 'Medición de conocimientos básicos de seguridad privada, manejo de bitácoras, prevención de riesgos, primeros auxilios y criterio situacional.',
      tag: 'Fase 4'
    },
    {
      id: 5,
      icon: Shield,
      title: 'Valoración Médica, Mental y Física',
      subtitle: 'Acondicionamiento idóneo',
      description: 'Evaluación médica integral de agudeza visual, auditiva, estado cardiovascular y condición física apta para turnos de custodia y vigilancia.',
      tag: 'Fase 5'
    },
    {
      id: 6,
      icon: FileBadge,
      title: 'Registro ante STPS y la SSC CDMX',
      subtitle: 'Acreditación legal obligatoria',
      description: 'Alta oficial del elemento en los padrones de la Secretaría del Trabajo y Previsión Social (STPS) y la Secretaría de Seguridad Ciudadana (SSC).',
      tag: 'Fase 6'
    },
    {
      id: 7,
      icon: Award,
      title: 'Antecedentes No Penales Verificados',
      subtitle: 'Garantía de honradez',
      description: 'Emisión y cotejo del Certificado de Antecedentes No Penales para asegurar la lealtad y total confiabilidad de nuestros guardias.',
      tag: 'Fase 7'
    }
  ];

  return (
    <section id="seleccion" className="section-padding selection-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">EXCELENCIA OPERATIVA</div>
          <h2 className="section-title">
            Nuestro Proceso de <span className="gradient-red">Selección de Personal</span>
          </h2>
          <p className="text-muted">
            Garantizamos la calidad de tu protección mediante un filtro médico, mental, psicológico y legal de 7 fases rigurosas.
          </p>
        </div>

        {/* Timeline Grid Container */}
        <div className="selection-timeline-wrapper">
          <div className="steps-nav-list">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <button
                  key={step.id}
                  className={`step-nav-card glass-card ${activeStep === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-number">{step.id}</div>
                  <div className="step-info">
                    <span className="step-tag">{step.tag}</span>
                    <h4 className="step-title-mini">{step.title}</h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase */}
          <div className="step-detail-card glass-panel">
            <div className="step-detail-badge">{steps[activeStep].tag} • PROCESO CERTIFICADO</div>
            
            <div className="step-detail-icon-box">
              {React.createElement(steps[activeStep].icon, { size: 40, className: 'text-red' })}
            </div>

            <h3 className="step-detail-title">{steps[activeStep].title}</h3>
            <h4 className="step-detail-sub">{steps[activeStep].subtitle}</h4>

            <p className="step-detail-desc">{steps[activeStep].description}</p>

            <div className="step-guarantee-box">
              <CheckCircle size={18} className="text-emerald" />
              <span>Garantía de Selección SECUAVANTE: 100% Personal Aprobado en Expediente.</span>
            </div>
          </div>
        </div>

        {/* Quality Values Quote */}
        <div className="quality-values-banner glass-card">
          <div className="values-header">
            <Shield size={28} className="text-red" />
            <div>
              <h3>Nuestros Valores Corporativos</h3>
              <p>Promovemos pilares inquebrantables en cada uno de nuestros elementos:</p>
            </div>
          </div>
          <div className="values-tags-grid">
            <span className="value-tag">Lealtad</span>
            <span className="value-tag">Profesionalismo</span>
            <span className="value-tag">Disciplina</span>
            <span className="value-tag">Honradez</span>
            <span className="value-tag">Discreción</span>
            <span className="value-tag">Espíritu de Cuerpo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
