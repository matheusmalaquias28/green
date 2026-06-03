"use client";

import { useState } from "react";
import Button, { type ButtonSize, type ButtonVariant } from "@/components/Button";
import LeadModal from "@/components/LeadModal";

type Props = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export default function OpenModalButton({
  label,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
      >
        {label}
      </Button>
      <LeadModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
