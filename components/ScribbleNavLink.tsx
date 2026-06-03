"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const SCRIBBLE_PATH =
  "M 6 20 C 3 11, 14 3, 30 5 C 46 7, 54 15, 52 23 C 49 29, 34 33, 19 29 C 9 26, 6 23, 6 20 Z";

interface ScribbleNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function ScribbleNavLink({
  href,
  label,
  onClick,
  className = "",
}: ScribbleNavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [hovered, setHovered] = useState(false);
  const showScribble = isActive || hovered;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-3 py-2 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10 font-body text-[13px] font-bold uppercase tracking-[0.1em] text-brand-green-dark">
        {label}
      </span>
      <svg
        className="pointer-events-none absolute -inset-x-2 -inset-y-1 h-[calc(100%+10px)] w-[calc(100%+16px)]"
        viewBox="0 0 60 34"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={SCRIBBLE_PATH}
          stroke="var(--gs-yellow)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={false}
          animate={{
            pathLength: showScribble ? 1 : 0,
            opacity: showScribble ? 1 : 0,
          }}
          transition={{
            pathLength: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.2 },
          }}
        />
      </svg>
    </Link>
  );
}
