"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { successCases } from "@/lib/success-cases";
import type { SuccessCase } from "@/lib/success-cases";

const INK = "#0E1F1A";
const YELLOW = "#FAC612";

/** Card width: 280px base × 1.3 × 1.3 ≈ 473px */
const CARD_MAX_W = 473;
const CIRCLE_BASE = 355;
const ARCH_LABEL_MAX = 372;

function RibbonBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M -80 520 C 180 360, 320 430, 520 390 S 920 300, 1120 380 S 1380 420, 1520 280"
        fill="none"
        stroke={YELLOW}
        strokeWidth="56"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M -40 560 C 220 430, 360 500, 560 460 S 960 370, 1160 450 S 1420 490, 1560 350"
        fill="none"
        stroke={YELLOW}
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function ArchedLabel({ text, arcId }: { text: string; arcId: string }) {
  return (
    <svg
      viewBox="0 0 240 56"
      className="mx-auto mb-3 overflow-visible"
      style={{ width: "100%", maxWidth: ARCH_LABEL_MAX, height: "5.85rem" }}
      aria-hidden="true"
    >
      <defs>
        <path id={arcId} d="M 20 42 Q 120 6 220 42" fill="none" />
      </defs>
      <text
        fill="#FFFFFF"
        fontSize="23"
        fontWeight="700"
        fontFamily="var(--font-manrope), system-ui, sans-serif"
        letterSpacing="0.05em"
      >
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

function PolaroidPhoto({
  item,
  priority,
}: {
  item: SuccessCase;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(1,153,78,0.08), rgba(1,153,78,0.08) 12px, rgba(1,153,78,0.16) 12px, rgba(1,153,78,0.16) 24px)",
        }}
      >
        <span className="rounded-full border-2 border-brand-text bg-brand-yellow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-brand-text">
          {item.location}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={item.image}
      alt={item.imageAlt}
      fill
      priority={priority}
      sizes="(max-width: 640px) 92vw, 473px"
      className="object-cover"
      style={{ objectPosition: item.objectPosition ?? "center center" }}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}

function PolaroidCard({
  item,
  index,
  active,
  onActivate,
  reducedMotion,
}: {
  item: SuccessCase;
  index: number;
  active: boolean;
  onActivate: () => void;
  reducedMotion: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const engaged = active || hovered;
  const restingRotation = item.rotation;

  return (
    <motion.button
      type="button"
      onClick={onActivate}
      className="relative flex w-full flex-col items-center border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green"
      style={{
        maxWidth: CARD_MAX_W,
        marginTop: item.verticalOffset ?? 0,
        zIndex: engaged ? 20 : 10 - index,
        cursor: "grab",
      }}
      aria-label={`${item.location}: ${item.caption}`}
      initial={reducedMotion ? false : { opacity: 0, y: 72, rotate: restingRotation + 8 }}
      whileInView={
        reducedMotion
          ? undefined
          : { opacity: 1, y: 0, rotate: restingRotation }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
        delay: index * 0.12,
      }}
      animate={{
        rotate: engaged ? 0 : restingRotation,
        y: engaged ? -14 : 0,
        scale: engaged ? 1.04 : 1,
      }}
      drag={reducedMotion ? false : true}
      dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
      dragElastic={0.18}
      whileDrag={{
        scale: 1.06,
        rotate: 0,
        zIndex: 30,
        cursor: "grabbing",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <ArchedLabel text={item.location} arcId={`case-arc-${item.id}`} />

      <div className="relative w-full">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] -z-10 rounded-full border-2 border-brand-text"
          style={{
            width: `${CIRCLE_BASE * (item.circleScale ?? 1)}px`,
            height: `${CIRCLE_BASE * (item.circleScale ?? 1)}px`,
            background: YELLOW,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative bg-white p-5 pb-12 sm:p-6 sm:pb-[3.25rem]"
          style={{
            boxShadow: engaged
              ? `0 22px 50px rgba(14,31,26,0.28), 8px 8px 0 ${INK}`
              : "0 16px 40px rgba(14,31,26,0.22)",
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#ECECE7]">
            <PolaroidPhoto item={item} priority={index === 1} />
          </div>

          <p className="mt-6 px-1 text-center font-body text-lg font-bold leading-snug text-brand-text sm:text-[25px]">
            {item.caption}
          </p>
        </motion.div>
      </div>
    </motion.button>
  );
}

export default function CasesDeSucesso() {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: "#01994E" }}
      aria-labelledby="cases-de-sucesso-title"
    >
      <RibbonBackground />

      <div className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <header className="relative z-10 mx-auto mb-14 w-full text-center sm:mb-16">
          <h2
            id="cases-de-sucesso-title"
            className="font-display whitespace-nowrap text-[clamp(32px,8vw,76px)] leading-[0.95] tracking-tight lg:text-[clamp(60px,9vw,114px)]"
          >
            <span className="font-bold italic text-brand-yellow">deu </span>
            <span
              className="font-bold text-brand-green-dark"
              style={{ textShadow: "0 1px 0 rgba(251,251,247,0.35)" }}
            >
              Greeeeeen!
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-white/80 sm:text-lg">
            Resultados reais de franqueados em diferentes formatos e regiões do
            Brasil.
          </p>
        </header>

        <div className="relative z-10 flex w-full flex-col items-center gap-14 sm:gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-6 xl:gap-10 2xl:gap-14">
          {successCases.map((item, index) => (
            <div
              key={item.id}
              className="flex w-full flex-1 justify-center lg:max-w-none"
            >
              <PolaroidCard
                item={item}
                index={index}
                active={activeId === item.id}
                onActivate={() =>
                  setActiveId((current) => (current === item.id ? null : item.id))
                }
                reducedMotion={reducedMotion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
