import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Unlock, Key, Radio, CheckCircle, ChevronRight } from 'lucide-react';
import SecuavanteLogo from './SecuavanteLogo';
import './LockIntro.css';

export default function LockIntro({ onComplete }) {
  const [stage, setStatusStage] = useState(0); // 0: scanning, 1: authenticating, 2: unlocked, 3: fadeout
  const [progress, setProgress] = useState(0);

  const securitySteps = [
    'Iniciando protocolo de seguridad Secuavante...',
    'Verificando Permiso SSC CDMX N° 0304-22...',
    'Validando Registro REPSE AR129038/2024...',
    'Sistema de Seguridad Activado. Acceso Concedido.'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress < 30) setStatusStage(0);
    else if (progress < 70) setStatusStage(1);
    else if (progress < 100) setStatusStage(2);
    else {
      setStatusStage(2);
      // Auto trigger exit after brief unlock flash
      const timer = setTimeout(() => {
        handleUnlock();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleUnlock = () => {
    setStatusStage(3);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  if (stage === 3) {
    return <div className="lock-overlay lock-fadeout" />;
  }

  return (
    <div className="lock-overlay">
      {/* Background Matrix/Grid Grid Effects */}
      <div className="lock-bg-grid" />
      <div className="lock-glow-orb" />

      <div className="lock-card glass-panel">
        <div className="lock-badge-top">
          <Radio size={14} className="lock-pulse-icon" />
          <span>SECUAVANTE S.A. DE C.V. • SISTEMA DE ACCESO</span>
        </div>

        {/* Lock Animation Visual */}
        <div className={`lock-visual-container ${stage === 2 ? 'is-unlocked' : ''}`}>
          <div className="lock-laser-line" />
          <div className="lock-ring-outer animate-spin-slow" />
          <div className="lock-ring-inner" />
          
          <div className="lock-icon-wrapper">
            {stage === 2 ? (
              <Unlock size={64} className="lock-svg-icon unlocked" />
            ) : (
              <Lock size={64} className="lock-svg-icon locked" />
            )}
          </div>
        </div>

        {/* Brand Title with Logo */}
        <div className="lock-logo-wrapper">
          <SecuavanteLogo size={68} />
        </div>
        <h1 className="lock-brand-title">
          SECU<span className="text-red">AVANTE</span>
        </h1>
        <p className="lock-brand-sub">S.A. DE C.V. • Seguridad Profesional, Soluciones Personales</p>

        {/* Progress Bar */}
        <div className="lock-progress-wrapper">
          <div className="lock-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Terminal Status Message */}
        <div className="lock-status-box">
          <div className="lock-status-indicator">
            {progress < 100 ? (
              <span className="dot-pulse" />
            ) : (
              <CheckCircle size={16} className="text-emerald" />
            )}
            <span className="lock-status-text">
              {securitySteps[Math.min(stage, securitySteps.length - 1)]}
            </span>
          </div>
          <span className="lock-percentage">{progress}%</span>
        </div>

        {/* Instant Skip Button */}
        <button className="lock-skip-btn" onClick={handleUnlock}>
          <span>Ingresar Directamente</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
