import React from 'react';
import { Search, Brain, Award, ShieldCheck } from 'lucide-react';
import './SelectionCorp.css';

export default function SelectionCorp() {
  const steps = [
    {
      icon: Search,
      title: 'Investigación de Confianza',
      desc: 'Validamos a detalle el historial laboral, referencias y antecedentes no penales de cada guardia.'
    },
    {
      icon: Brain,
      title: 'Examen Psicométrico',
      desc: 'Evaluamos rasgos de personalidad, honestidad y control de estrés ante emergencias.'
    },
    {
      icon: ShieldCheck,
      title: 'Antidoping Riguroso',
      desc: 'Prueba toxicológica de 5 páneles obligatoria para contratación y con aplicación aleatoria periódica.'
    },
    {
      icon: Award,
      title: 'Registro Oficial STPS y SSC',
      desc: 'Alta obligatoria del expediente del elemento ante la Secretaría de Seguridad Ciudadana de la CDMX.'
    }
  ];

  return (
    <section id="seleccion-corp" className="selection-corp-section">
      <div className="container">
        
        <div className="section-header-corp">
          <span className="section-subtitle-corp">FILTROS DE CONFIANZA</span>
          <h2 className="section-title-corp">¿Cómo Seleccionamos a <span className="text-red-corp">Nuestros Guardias?</span></h2>
          <p className="section-desc-corp">
            Solo el personal más íntegro, honesto y calificado forma parte de SECUAVANTE. Conocemos la responsabilidad que depositamos en sus manos.
          </p>
        </div>

        <div className="selection-grid-corp">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="selection-card-corp">
                <div className="selection-icon-corp">
                  <Icon size={24} className="text-red-corp" />
                </div>
                <h3 className="selection-title-corp-text">{s.title}</h3>
                <p className="selection-desc-corp-text">{s.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
