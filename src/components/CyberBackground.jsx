import React, { useEffect, useRef } from 'react';
import './CyberBackground.css';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    // Store click pulse waves
    let shockwaves = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Trigger shockwave ONLY on discrete explicit click (not while scrolling on mobile)
    const handleClick = (e) => {
      triggerPulse(e.clientX, e.clientY);
    };

    const triggerPulse = (cx, cy) => {
      shockwaves.push({
        x: cx,
        y: cy,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.5,
        opacity: 0.9,
        lineWidth: 2.5,
        label: 'ALERTA DE SEGURIDAD • EMP PULSE ACTIVADO'
      });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Cyber characters pool
    const hexChars = '0123456789ABCDEFSECUREENCRYPTEDPROTCDMXREPSE6026GARRETT';
    const secretKeywords = ['CLASSIFIED', 'SECUAVANTE', 'ENCRYPTED_256', 'REPSE_APPROVED', 'VERIFIED_0304-22', 'SHIELD_ACTIVE', '0%_RISK', 'ACCESS_GRANTED'];

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let gridData = [];

    const initGrid = () => {
      columns = Math.floor(width / fontSize);
      gridData = [];
      for (let i = 0; i < columns; i++) {
        gridData[i] = {
          x: i * fontSize,
          y: Math.random() * height,
          speed: 0.8 + Math.random() * 1.5,
          char: hexChars[Math.floor(Math.random() * hexChars.length)],
        };
      }
    };

    initGrid();

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 12, 20, 0.22)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize - 3}px "Outfit", monospace`;

      // 1. Draw shockwaves from explicit clicks
      for (let w = shockwaves.length - 1; w >= 0; w--) {
        const wave = shockwaves[w];
        wave.radius += 12;
        wave.opacity -= 0.015;

        if (wave.opacity <= 0 || wave.radius >= wave.maxRadius) {
          shockwaves.splice(w, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${wave.opacity})`;
        ctx.lineWidth = wave.lineWidth;
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 12;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, Math.max(0, wave.radius - 30), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 57, 70, ${wave.opacity * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (wave.opacity > 0.4) {
          ctx.fillStyle = `rgba(16, 185, 129, ${wave.opacity})`;
          ctx.font = '10px "Outfit", sans-serif';
          ctx.fillText(`[ PULSO DE ESCÁNER EN (${Math.round(wave.x)}, ${Math.round(wave.y)}) • PERÍMETRO PROTEGIDO ]`, wave.x - 120, wave.y - 15);
        }
      }

      ctx.font = `${fontSize - 3}px "Outfit", monospace`;

      // 2. Draw matrix grid characters
      for (let i = 0; i < gridData.length; i++) {
        const item = gridData[i];

        const dx = mouse.x - item.x;
        const dy = mouse.y - item.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isMouseNear = dist < mouse.radius;

        let isHitByWave = false;
        for (let w = 0; w < shockwaves.length; w++) {
          const wave = shockwaves[w];
          const wdx = wave.x - item.x;
          const wdy = wave.y - item.y;
          const wdist = Math.sqrt(wdx * wdx + wdy * wdy);
          if (Math.abs(wdist - wave.radius) < 25) {
            isHitByWave = true;
            break;
          }
        }

        if (isHitByWave) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#10B981';
          ctx.fillStyle = '#10B981';
          item.char = secretKeywords[Math.floor(Math.random() * secretKeywords.length)][0];
        } else if (isMouseNear) {
          const glowRatio = 1 - dist / mouse.radius;
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
          ctx.fillStyle = `rgba(125, 211, 252, ${0.3 + glowRatio * 0.5})`;
          
          if (Math.random() < 0.05) {
            item.char = hexChars[Math.floor(Math.random() * hexChars.length)];
          }
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(100, 116, 139, 0.1)';
          
          if (Math.random() < 0.02) {
            item.char = hexChars[Math.floor(Math.random() * hexChars.length)];
          }
        }

        ctx.fillText(item.char, item.x, item.y);

        item.y += isMouseNear ? item.speed * 1.5 : item.speed;

        if (item.y > height) {
          item.y = -fontSize;
          item.speed = 0.8 + Math.random() * 1.5;
        }
      }

      // 3. Subtle cursor indicator aura
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 5, mouse.x, mouse.y, mouse.radius);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        gradient.addColorStop(0.7, 'rgba(30, 41, 92, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cyber-bg-canvas" />;
}
