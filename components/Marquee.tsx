import Image from "next/image";
import type { CSSProperties } from "react";
import type { MarqueeItem } from "@/lib/marquee";

type MarqueeProps = {
  items: MarqueeItem[];
  /** Duração de um ciclo completo, em segundos. */
  duration?: number;
  className?: string;
};

function MarqueeSegment({ item }: { item: MarqueeItem }) {
  const imageWidth = item.image.width ?? 96;
  const imageHeight = item.image.height ?? 96;

  return (
    <div className="flex shrink-0 items-center gap-5 px-6 sm:gap-8 sm:px-10">
      <span className="relative flex size-[4.8rem] shrink-0 items-center justify-center sm:size-24">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="marquee-text whitespace-nowrap text-3xl uppercase tracking-tight text-brand-text sm:text-4xl md:text-5xl lg:text-6xl">
        {item.text}
      </span>
    </div>
  );
}

export default function Marquee({
  items,
  duration = 36,
  className = "",
}: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <section
      className={`overflow-hidden bg-brand-yellow py-5 sm:py-6 ${className}`}
      aria-label="Destaques Green Station"
    >
      <div
        className="marquee-track flex w-max motion-reduce:hidden"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {loop.map((item, index) => (
          <MarqueeSegment key={`${item.text}-${index}`} item={item} />
        ))}
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 motion-reduce:flex">
        {items.map((item) => (
          <MarqueeSegment key={item.text} item={item} />
        ))}
      </div>
    </section>
  );
}
