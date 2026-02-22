// src/lib/animations.ts

// --- PRÉMIUM EASING GÖRBÉK ---
// Ezek a görbék adják meg a "drága" érzetet a mozgásnak.
export const easings = {
  // Apple stílusú, hosszú kifutású lassulás (Expo Out)
  apple: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Vercel stílusú snappier görbe
  fluid: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  // Nagyon finom, szinte észrevehetetlen pattanás
  softSpring: { type: "spring", stiffness: 300, damping: 30 },
} as const

// --- TARTÁLY (Vízesés / Stagger) ---
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Kicsit gyorsabb egymásutániság
      delayChildren: 0.05,
    },
  },
} as const

// --- ALAP BEÚSZÓ ELEM (Fade Up) ---
export const fadeUpItem = {
  hidden: { 
    opacity: 0, 
    y: 40,        // Nagyobb utat tesz meg (40px)
    filter: 'blur(10px)' // Enyhe homályból tisztul ki (Premium effect!)
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8,      // Kicsit lassabb, teátrálisabb beúszás
      ease: easings.apple 
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(5px)',
    transition: { duration: 0.4, ease: easings.fluid },
  },
} as const

// --- KÁRTYA HOVER MIKRO-INTERAKCIÓ ---
// Ezt beletehetjük a kártyák `whileHover` prop-jába.
export const cardHoverScale = {
  scale: 1.02,
  y: -4,
  transition: easings.softSpring
} as const
