import React from "react";
import { cn } from "@/lib/utils";

export default function SecondTitle({ title, className }: { title: string, className?: string }) {
  return (
    <h2 className={cn("text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-[120%] text-center mb-9", className)}>
      {title}
    </h2>
  );
}
