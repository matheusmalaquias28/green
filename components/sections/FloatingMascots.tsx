"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

/* ─── Config ─────────────────────────────────────────────────
   left/right: anchored near the page edges (% of viewport)
   top:        vertical position within the wrapper
   rotate:     resting rotation of each sticker
   floatY:     float amplitude in px
   floatRot:   additional rotation during float
   duration:   float loop duration in seconds
   delay:      animation start delay
──────────────────────────────────────────────────────────── */

interface MascotConfig {
  src: string;
  alt: string;
  label: string;     // shown only when image is unavailable
  side: "left" | "right";
  sideValue: string; // CSS left or right value
  top: string;       // CSS top within wrapper
  rotate: number;    // resting rotation (deg)
  floatY: number;    // float amplitude (px)
  floatRot: number;  // extra rotation during float (deg)
  duration: number;  // loop duration (s)
  delay: number;     // delay before starting (s)
  hoverRotate: number; // tilt on hover (deg, applied to resting)
}

const MASCOTS: MascotConfig[] = [
  {
    src: "/brand/mascots/mascot-tomatito.png",
    alt: "",
    label: "Tomatito",
    side: "left",
    sideValue: "0%",
    // top in vh — wrapper has height:0 so % of parent = 0; vh anchors to viewport
    top: "-68vh",
    rotate: -10,
    floatY: 10,
    floatRot: 3,
    duration: 5.2,
    delay: 0,
    hoverRotate: -18,
  },
  {
    src: "/brand/mascots/mascot-brocolino.png",
    alt: "",
    label: "Brocolino",
    side: "right",
    sideValue: "0%",
    top: "-32vh",
    rotate: 8,
    floatY: 8,
    floatRot: -2,
    duration: 6.6,
    delay: 0.8,
    hoverRotate: 18,
  },
  {
    src: "/brand/mascots/mascot-milhito.png",
    alt: "",
    label: "Milhito",
    side: "left",
    sideValue: "0%",
    top: "6vh",
    rotate: -6,
    floatY: 12,
    floatRot: 2.5,
    duration: 7.1,
    delay: 1.6,
    hoverRotate: -14,
  },
];

/* Size ×3 original (aumentar EM 200%) — responsive via clamp */
const SIZE = "clamp(200px, 25vw, 380px)";

/* ─── Single sticker ─────────────────────────────────────── */

function Mascot({ config, animate }: { config: MascotConfig; animate: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      /* Outer: float loop — animate prop directly avoids variant type issues */
      animate={
        animate
          ? {
              y: [0, -config.floatY, 0],
              rotate: [config.rotate, config.rotate + config.floatRot, config.rotate],
            }
          : { y: 0, rotate: config.rotate }
      }
      transition={
        animate
          ? {
              duration: config.duration,
              delay: config.delay,
              repeat: Infinity,
              repeatType: "loop" as const,
              ease: [0.45, 0, 0.55, 1], // easeInOut cubic bezier
            }
          : undefined
      }
      style={{
        position: "absolute",
        [config.side]: config.sideValue,
        top: config.top,
        width: SIZE,
        height: SIZE,
        pointerEvents: "auto",
        zIndex: 10,
        filter: "drop-shadow(0 12px 16px rgba(14,31,26,0.18))",
        maxWidth: "clamp(200px, 25vw, 380px)",
      }}
      aria-hidden="true"
    >
      {/* Inner: hover tilt — separate element so it doesn't interfere with float */}
      <motion.div
        animate={hovered ? { rotate: config.hoverRotate - config.rotate, scale: 1.05 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{ width: "100%", height: "100%", cursor: "default" }}
      >
        <Image
          src={config.src}
          alt={config.alt}
          fill
          sizes="(max-width: 480px) 200px, (max-width: 768px) 30vw, 25vw"
          style={{ objectFit: "contain" }}
          priority={false}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Main export ────────────────────────────────────────── */

export default function FloatingMascots() {
  const reduced = useReducedMotion();

  return (
    /*
      Wrapper: relative + zero height so it doesn't push content.
      Pointer-events blocked on the wrapper; each mascot re-enables its own.
      overflow-x hidden guards against any edge bleed on mobile.
    */
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        height: 0,
        overflow: "visible",
        pointerEvents: "none",
        /* Clip horizontal only — use a pseudo-wrapper if needed */
        zIndex: 10,
      }}
    >
      {/* Mobile guard: hide the left-bottom mascot on narrow screens */}
      <style>{`
        @media (max-width: 1024px) {
          .gs-mascot--root { max-width: 22vw !important; }
        }
        @media (max-width: 768px) {
          .gs-mascot--hide-mobile { display: none !important; }
          .gs-mascot--root { max-width: 28vw !important; }
        }
        @media (max-width: 640px) {
          .gs-mascot--root { display: none !important; }
        }
      `}</style>

      {MASCOTS.map((m, i) => (
        <div
          key={m.label}
          /* Hide the third mascot (index 2) on mobile to avoid covering text */
          className={`gs-mascot--root${i === 2 ? " gs-mascot--hide-mobile" : ""}`}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <Mascot config={m} animate={!reduced} />
        </div>
      ))}
    </div>
  );
}
