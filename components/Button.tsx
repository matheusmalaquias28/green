import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-brand-yellow text-brand-text border-brand-text shadow-[4px_4px_0_#0E1F1A] hover:shadow-[5px_5px_0_#0E1F1A]",
  green:
    "bg-brand-green text-white border-brand-text shadow-[4px_4px_0_#0E1F1A] hover:shadow-[5px_5px_0_#0E1F1A]",
  outlineGreen:
    "bg-brand-bg text-brand-green border-brand-green shadow-[4px_4px_0_#01994E] hover:bg-brand-green hover:text-white hover:border-brand-text hover:shadow-[4px_4px_0_#0E1F1A]",
  outlineWhite:
    "bg-transparent text-white border-white shadow-[4px_4px_0_rgba(14,31,26,0.5)] hover:bg-white/10 hover:shadow-[4px_4px_0_#0E1F1A]",
} as const;

const sizes = {
  sm: "px-6 py-[0.71875rem] text-[13px]",
  md: "px-8 py-4 text-[15px]",
  lg: "px-8 py-4 text-[15px]",
  xl: "px-10 py-5 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buttonClassName({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: Pick<BaseProps, "variant" | "size" | "fullWidth" | "className">) {
  return cn(
    "btn-premium inline-flex items-center justify-center gap-2.5 rounded-pill border-2 font-display font-bold whitespace-nowrap tracking-[-0.01em]",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    children,
    ...rest
  } = props;

  const classes = buttonClassName({ variant, size, fullWidth, className });

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as Omit<ButtonAsLink, keyof BaseProps>;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
