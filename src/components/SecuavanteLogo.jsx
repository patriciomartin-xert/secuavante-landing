import React from 'react';

export default function SecuavanteLogo({ size = 48, className = '' }) {
  return (
    <div className={`secuavante-logo-badge ${className}`} style={{ width: size, height: size * 1.15 }}>
      <svg 
        viewBox="0 0 200 230" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Shield Outer Border */}
        <path 
          d="M100 5 L185 30 V120 C185 175 140 215 100 225 C60 215 15 175 15 120 V30 Z" 
          fill="#0B0F19" 
          stroke="#D91E2A" 
          strokeWidth="6"
        />
        <path 
          d="M100 12 L177 35 V118 C177 168 136 205 100 216 C64 205 23 168 23 118 V35 Z" 
          fill="#060913" 
          stroke="#1E295C" 
          strokeWidth="3"
        />

        {/* Top Header Banner: SECUAVANTE */}
        <path d="M30 28 H170 V52 H30 Z" fill="#D91E2A" />
        <text 
          x="100" 
          y="45" 
          fill="#FFFFFF" 
          fontSize="17" 
          fontWeight="900" 
          fontFamily="Outfit, sans-serif" 
          textAnchor="middle" 
          letterSpacing="2"
        >
          SECUAVANTE
        </text>

        {/* Central Eagle / Guerrero Shield Emblem */}
        <g transform="translate(100, 115) scale(0.95)">
          {/* Wings Left & Right */}
          <path d="M -60 -25 L -25 -5 L -55 25 L -15 10 L -45 50 L 0 25 L 45 50 L 15 10 L 55 25 L 25 -5 L 60 -25 L 30 -35 L 0 -20 L -30 -35 Z" fill="#E2E8F0" />
          <path d="M -50 -15 L -20 0 L -45 25 L -10 12 L -35 40 L 0 20 L 35 40 L 10 12 L 45 25 L 20 0 L 50 -15 Z" fill="#D91E2A" opacity="0.8" />
          
          {/* Eagle Beak & Head */}
          <path d="M 0 -55 C -15 -55 -22 -40 -20 -30 L 20 -30 C 22 -40 15 -55 0 -55 Z" fill="#FFFFFF" />
          <path d="M -8 -45 C -15 -45 -18 -35 -15 -30 L 15 -35 Z" fill="#D91E2A" />
          <circle cx="0" cy="-40" r="4" fill="#000000" />
          
          {/* Shield Center Sun/Disc */}
          <circle cx="0" cy="5" r="22" fill="#060913" stroke="#D91E2A" strokeWidth="3" />
          <circle cx="0" cy="5" r="14" fill="#1E295C" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="0,-5 5,5 -5,5" fill="#D91E2A" />
        </g>

        {/* Bottom Arc Text: SEGURIDAD PRIVADA */}
        <path id="textArc" d="M 35 155 A 75 75 0 0 0 165 155" fill="none" />
        <text fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="Outfit, sans-serif" letterSpacing="1.5">
          <textPath href="#textArc" startOffset="50%" textAnchor="middle">
            SEGURIDAD PRIVADA
          </textPath>
        </text>
      </svg>
    </div>
  );
}
