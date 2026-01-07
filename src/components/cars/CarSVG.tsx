"use client";

export function Tank300SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tank 300 - Boxy SUV Side View */}
      <g>
        {/* Body */}
        <path d="M120 180 L120 120 L180 120 L200 90 L580 90 L620 120 L680 120 L680 180 L120 180 Z" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
        
        {/* Windows */}
        <path d="M210 95 L250 95 L250 115 L215 115 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M260 95 L400 95 L400 115 L260 115 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M410 95 L560 95 L560 115 L410 115 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M570 95 L610 115 L570 115 Z" fill="#1a3a5c" opacity="0.8"/>
        
        {/* Roof rails */}
        <rect x="200" y="85" width="400" height="5" rx="2" fill="#444"/>
        
        {/* Door lines */}
        <line x1="330" y1="95" x2="330" y2="175" stroke="#333" strokeWidth="1"/>
        <line x1="480" y1="95" x2="480" y2="175" stroke="#333" strokeWidth="1"/>
        
        {/* Door handles */}
        <rect x="290" y="130" width="25" height="6" rx="2" fill="#666"/>
        <rect x="440" y="130" width="25" height="6" rx="2" fill="#666"/>
        
        {/* Headlight */}
        <rect x="125" y="130" width="30" height="15" rx="3" fill="#fff" opacity="0.9"/>
        <rect x="125" y="130" width="30" height="15" rx="3" stroke="#ddd" strokeWidth="1" fill="none"/>
        
        {/* Tail light */}
        <rect x="645" y="125" width="30" height="20" rx="3" fill="#ff3333"/>
        
        {/* Front grille */}
        <rect x="115" y="150" width="15" height="25" rx="2" fill="#333"/>
        <rect x="117" y="152" width="11" height="21" rx="1" fill="#222"/>
        
        {/* Wheel wells */}
        <path d="M160 180 Q160 140 200 140 Q240 140 240 180" fill="#0a0a0a"/>
        <path d="M560 180 Q560 140 600 140 Q640 140 640 180" fill="#0a0a0a"/>
        
        {/* Wheels */}
        <circle cx="200" cy="185" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="200" cy="185" r="28" fill="#2a2a2a"/>
        <circle cx="200" cy="185" r="15" fill="#444"/>
        <circle cx="200" cy="185" r="8" fill="#222"/>
        
        <circle cx="600" cy="185" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="600" cy="185" r="28" fill="#2a2a2a"/>
        <circle cx="600" cy="185" r="15" fill="#444"/>
        <circle cx="600" cy="185" r="8" fill="#222"/>
        
        {/* Side step */}
        <rect x="250" y="175" width="300" height="8" rx="2" fill="#333"/>
        
        {/* Front bumper */}
        <rect x="110" y="165" width="20" height="18" rx="3" fill="#222"/>
        
        {/* Rear bumper */}
        <rect x="670" y="165" width="15" height="18" rx="3" fill="#222"/>
        
        {/* Spare tire on back */}
        <circle cx="695" cy="140" r="25" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
        <circle cx="695" cy="140" r="18" fill="#222"/>
        <circle cx="695" cy="140" r="8" fill="#333"/>
      </g>
    </svg>
  );
}

export function Tank500SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tank 500 - Larger luxury SUV */}
      <g>
        {/* Body - longer and more premium */}
        <path d="M100 180 L100 115 L160 115 L185 85 L620 85 L660 115 L720 115 L720 180 L100 180 Z" fill="#f5f5f5" stroke="#ddd" strokeWidth="2"/>
        
        {/* Windows */}
        <path d="M195 90 L240 90 L240 110 L200 110 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M250 90 L420 90 L420 110 L250 110 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M430 90 L590 90 L590 110 L430 110 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M600 90 L650 110 L600 110 Z" fill="#1a3a5c" opacity="0.8"/>
        
        {/* Chrome roof rails */}
        <rect x="185" y="80" width="450" height="5" rx="2" fill="#c0c0c0"/>
        
        {/* Door lines */}
        <line x1="340" y1="90" x2="340" y2="175" stroke="#ccc" strokeWidth="1"/>
        <line x1="510" y1="90" x2="510" y2="175" stroke="#ccc" strokeWidth="1"/>
        
        {/* Chrome door handles */}
        <rect x="295" y="125" width="30" height="6" rx="2" fill="#c0c0c0"/>
        <rect x="460" y="125" width="30" height="6" rx="2" fill="#c0c0c0"/>
        
        {/* LED Headlight */}
        <rect x="105" y="125" width="40" height="18" rx="4" fill="#fff"/>
        <rect x="108" y="128" width="34" height="12" rx="2" fill="#e0e8ff"/>
        
        {/* Tail light */}
        <rect x="680" y="120" width="35" height="25" rx="4" fill="#ff2222"/>
        
        {/* Front grille - larger chrome */}
        <rect x="95" y="148" width="20" height="30" rx="3" fill="#c0c0c0"/>
        <rect x="98" y="151" width="14" height="24" rx="2" fill="#333"/>
        
        {/* Wheel wells */}
        <path d="M150 180 Q150 135 195 135 Q240 135 240 180" fill="#0a0a0a"/>
        <path d="M580 180 Q580 135 625 135 Q670 135 670 180" fill="#0a0a0a"/>
        
        {/* Wheels - larger */}
        <circle cx="195" cy="185" r="45" fill="#1a1a1a" stroke="#c0c0c0" strokeWidth="3"/>
        <circle cx="195" cy="185" r="32" fill="#2a2a2a"/>
        <circle cx="195" cy="185" r="18" fill="#444"/>
        <circle cx="195" cy="185" r="10" fill="#222"/>
        
        <circle cx="625" cy="185" r="45" fill="#1a1a1a" stroke="#c0c0c0" strokeWidth="3"/>
        <circle cx="625" cy="185" r="32" fill="#2a2a2a"/>
        <circle cx="625" cy="185" r="18" fill="#444"/>
        <circle cx="625" cy="185" r="10" fill="#222"/>
        
        {/* Chrome side trim */}
        <rect x="240" y="145" width="340" height="3" rx="1" fill="#c0c0c0"/>
        
        {/* Side step - chrome */}
        <rect x="250" y="175" width="320" height="8" rx="2" fill="#c0c0c0"/>
      </g>
    </svg>
  );
}

export function JolionSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jolion - Compact crossover */}
      <g>
        {/* Body - sleeker crossover shape */}
        <path d="M130 185 L130 130 L170 130 L220 95 L550 95 L610 130 L670 130 L670 185 L130 185 Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2"/>
        
        {/* Roof curve */}
        <path d="M220 95 Q385 75 550 95" stroke="#1e40af" strokeWidth="2" fill="none"/>
        
        {/* Windows */}
        <path d="M230 100 L275 100 L275 125 L235 125 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M285 100 L420 100 L420 125 L285 125 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M430 100 L530 100 L530 125 L430 125 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M540 100 L595 125 L540 125 Z" fill="#1a3a5c" opacity="0.8"/>
        
        {/* Door lines */}
        <line x1="350" y1="100" x2="350" y2="180" stroke="#1d4ed8" strokeWidth="1"/>
        
        {/* Door handles */}
        <rect x="300" y="135" width="25" height="5" rx="2" fill="#1e40af"/>
        <rect x="450" y="135" width="25" height="5" rx="2" fill="#1e40af"/>
        
        {/* LED Headlight - sleek */}
        <path d="M135 140 L165 135 L165 155 L135 160 Z" fill="#fff"/>
        
        {/* Tail light - wrap around */}
        <rect x="640" y="130" width="25" height="20" rx="3" fill="#ff3333"/>
        
        {/* Front grille */}
        <rect x="125" y="155" width="18" height="25" rx="3" fill="#1e40af"/>
        
        {/* Wheel wells */}
        <path d="M165 185 Q165 150 205 150 Q245 150 245 185" fill="#0a0a0a"/>
        <path d="M555 185 Q555 150 595 150 Q635 150 635 185" fill="#0a0a0a"/>
        
        {/* Wheels */}
        <circle cx="205" cy="190" r="38" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="205" cy="190" r="26" fill="#2a2a2a"/>
        <circle cx="205" cy="190" r="14" fill="#444"/>
        <circle cx="205" cy="190" r="7" fill="#222"/>
        
        <circle cx="595" cy="190" r="38" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="595" cy="190" r="26" fill="#2a2a2a"/>
        <circle cx="595" cy="190" r="14" fill="#444"/>
        <circle cx="595" cy="190" r="7" fill="#222"/>
        
        {/* Side skirt */}
        <rect x="250" y="180" width="300" height="6" rx="2" fill="#1e40af"/>
      </g>
    </svg>
  );
}

export function H6SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* H6 - Mid-size SUV */}
      <g>
        {/* Body */}
        <path d="M120 185 L120 125 L175 125 L210 90 L570 90 L615 125 L680 125 L680 185 L120 185 Z" fill="#dc2626" stroke="#b91c1c" strokeWidth="2"/>
        
        {/* Windows */}
        <path d="M220 95 L260 95 L260 120 L225 120 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M270 95 L410 95 L410 120 L270 120 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M420 95 L550 95 L550 120 L420 120 Z" fill="#1a3a5c" opacity="0.8"/>
        <path d="M560 95 L605 120 L560 120 Z" fill="#1a3a5c" opacity="0.8"/>
        
        {/* Roof rails */}
        <rect x="210" y="85" width="380" height="5" rx="2" fill="#991b1b"/>
        
        {/* Door lines */}
        <line x1="340" y1="95" x2="340" y2="180" stroke="#b91c1c" strokeWidth="1"/>
        <line x1="480" y1="95" x2="480" y2="180" stroke="#b91c1c" strokeWidth="1"/>
        
        {/* Door handles */}
        <rect x="295" y="130" width="25" height="5" rx="2" fill="#991b1b"/>
        <rect x="435" y="130" width="25" height="5" rx="2" fill="#991b1b"/>
        
        {/* Headlight */}
        <rect x="125" y="130" width="35" height="18" rx="4" fill="#fff"/>
        
        {/* Tail light */}
        <rect x="645" y="125" width="30" height="22" rx="3" fill="#7f1d1d"/>
        <rect x="648" y="128" width="24" height="16" rx="2" fill="#ff0000"/>
        
        {/* Front grille */}
        <rect x="115" y="152" width="20" height="28" rx="3" fill="#7f1d1d"/>
        
        {/* Wheel wells */}
        <path d="M160 185 Q160 145 200 145 Q240 145 240 185" fill="#0a0a0a"/>
        <path d="M560 185 Q560 145 600 145 Q640 145 640 185" fill="#0a0a0a"/>
        
        {/* Wheels */}
        <circle cx="200" cy="190" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="200" cy="190" r="28" fill="#2a2a2a"/>
        <circle cx="200" cy="190" r="15" fill="#444"/>
        <circle cx="200" cy="190" r="8" fill="#222"/>
        
        <circle cx="600" cy="190" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3"/>
        <circle cx="600" cy="190" r="28" fill="#2a2a2a"/>
        <circle cx="600" cy="190" r="15" fill="#444"/>
        <circle cx="600" cy="190" r="8" fill="#222"/>
        
        {/* Side trim */}
        <rect x="245" y="150" width="310" height="3" rx="1" fill="#b91c1c"/>
      </g>
    </svg>
  );
}
