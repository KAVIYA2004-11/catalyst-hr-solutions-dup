/* ─── CatalystLogo ──────────────────────────────────────────── */
/* Icon-only logo rebuilt to exactly match the provided image */
export function CatalystLogo({ size = 44, white = false }) {
  const color = white ? "#ffffff" : "#1A7B72"; // Exact matched teal color
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, display: "block" }}>
      <g stroke={color} strokeWidth="3.5" strokeLinecap="butt" strokeLinejoin="miter">
        {/* Outer Hex C */}
        <polyline points="74,22 50,10 16,27 16,73 50,90 74,78" />
        
        {/* Middle Line connecting exactly to the solid blocks */}
        <polyline points="44,26.5 27,35 27,65 44,73.5" />
        
        {/* Inner C */}
        <polyline points="62,43 50,37 38,43 38,57 50,63 62,57" />
      </g>
      
      {/* Top Thick Solid Parallelogram */}
      <polygon points="44,14 74,29 74,42 44,27" fill={color} />
      
      {/* Bottom Thick Solid Parallelogram */}
      <polygon points="44,86 74,71 74,58 44,73" fill={color} />
    </svg>
  );
}

/* ─── LogoFull ──────────────────────────────────────────────── */
/* Full logo (icon + matching typography) */
export function LogoFull({ size = 40, white = false, vertical = true }) {
  const color = white ? "#ffffff" : "#1A7B72";

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      flexDirection: vertical ? "column" : "row",
      gap: vertical ? "4px" : "14px", 
      flexShrink: 0 
    }}>
      <CatalystLogo size={size * 1.15} white={white} />
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: vertical ? "center" : "flex-start"
      }}>
        <span style={{ 
          fontWeight: 600, 
          fontSize: size * 0.52, 
          color: color,
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          letterSpacing: "1px",
          lineHeight: 1
        }}>
          CATALYST
        </span>
        <span style={{ 
          fontWeight: 600, 
          fontSize: size * 0.28, 
          color: color,
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          letterSpacing: "0.5px",
          lineHeight: 1.1,
          marginTop: vertical ? 4 : 2
        }}>
          HR SOLUTIONS
        </span>
      </div>
    </div>
  );
}
