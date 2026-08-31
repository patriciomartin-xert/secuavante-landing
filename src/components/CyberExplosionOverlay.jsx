import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import './CyberExplosionOverlay.css';

export default function CyberExplosionOverlay({ isActive, onComplete, initialService = null }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('idle'); // 'glitch' | 'unscramble' | 'explosion' | 'done'
  const [glitchText, setGlitchText] = useState('');

  const targetText = '[ ACCESS_GRANTED ] DESENCRIPTANDO_COTIZADOR_SECUAVANTE';
  const hexChars = '0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    if (!isActive) {
      setPhase('idle');
      return;
    }

    setPhase('glitch');
    let frame = 0;
    const maxGlitchFrames = 18;

    // 1. Chaotic Glitch Phase (~450ms)
    const glitchInterval = setInterval(() => {
      frame++;
      let scrambled = '';
      for (let i = 0; i < targetText.length; i++) {
        scrambled += hexChars[Math.floor(Math.random() * hexChars.length)];
      }
      setGlitchText(scrambled);

      if (frame >= maxGlitchFrames) {
        clearInterval(glitchInterval);
        startUnscramble();
      }
    }, 25);

    // 2. Unscramble Phase (~650ms)
    const startUnscramble = () => {
      setPhase('unscramble');
      let revealedLength = 0;

      const unscrambleInterval = setInterval(() => {
        revealedLength += 2;
        let result = '';

        for (let i = 0; i < targetText.length; i++) {
          if (i < revealedLength) {
            result += targetText[i];
          } else {
            result += hexChars[Math.floor(Math.random() * hexChars.length)];
          }
        }

        setGlitchText(result);

        if (revealedLength >= targetText.length) {
          clearInterval(unscrambleInterval);
          setGlitchText(targetText);
          setTimeout(startExplosion, 200);
        }
      }, 30);
    };

    // 3. Matrix Code Particle Explosion (~900ms)
    const startExplosion = () => {
      setPhase('explosion');
      runParticleCanvas();

      setTimeout(() => {
        setPhase('done');
        if (onComplete) onComplete();
      }, 950);
    };

    return () => {
      clearInterval(glitchInterval);
    };
  }, [isActive]);

  const runParticleCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;

    const codeSymbols = '01010101010101SECUREDECRYPTEDGARRETT030422REPSE6026CDMXSECUAVANTE';
    const particles = [];
    const particleCount = 180;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 18;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        char: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        color: Math.random() > 0.4 ? '#10B981' : Math.random() > 0.5 ? '#38BDF8' : '#FF3B4E',
        size: 14 + Math.random() * 16,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.2
      });
    }

    let waveRadius = 10;
    let animId;

    const animateParticles = () => {
      ctx.fillStyle = 'rgba(8, 12, 20, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Shockwave Ring
      waveRadius += 22;
      ctx.beginPath();
      ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${Math.max(0, 1 - waveRadius / (width * 0.8))})`;
      ctx.lineWidth = 4;
      ctx.shadowColor = '#10B981';
      ctx.shadowBlur = 20;
      ctx.stroke();

      // Render Bursting Code Particles
      let aliveCount = 0;
      for (let p of particles) {
        if (p.alpha <= 0) continue;
        aliveCount++;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `800 ${p.size}px "Outfit", monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }

      if (aliveCount > 0 && waveRadius < width) {
        animId = requestAnimationFrame(animateParticles);
      } else {
        cancelAnimationFrame(animId);
      }
    };

    animateParticles();
  };

  if (!isActive) return null;

  return (
    <div className={`cyber-explosion-wrapper phase-${phase}`}>
      <canvas ref={canvasRef} className="explosion-canvas" />

      {/* Center Glitch Box */}
      {(phase === 'glitch' || phase === 'unscramble') && (
        <div className="center-glitch-terminal glass-panel">
          <div className="terminal-header">
            <Terminal size={18} className="text-emerald animate-pulse" />
            <span>SECUAVANTE_SECURITY_KERNEL // DECRYPTING</span>
          </div>

          <div className="terminal-body">
            <span className="glitch-text-display">{glitchText}</span>
          </div>

          <div className="terminal-footer">
            <span className="decrypt-progress-bar"></span>
          </div>
        </div>
      )}
    </div>
  );
}
