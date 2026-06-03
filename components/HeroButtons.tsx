"use client";

import { useState } from "react";
import Button from "@/components/Button";
import LeadModal from "@/components/LeadModal";

export default function HeroButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <Button type="button" size="lg" onClick={() => setOpen(true)}>
          Quero ser franqueado
        </Button>
        <Button href="/lojas" variant="outlineWhite" size="lg">
          Ver lojas
        </Button>
      </div>

      <LeadModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
