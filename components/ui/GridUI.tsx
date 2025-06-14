"use client"

import { cn } from "@/lib/utils";
import React from "react";

export default function GridUI() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:99.6px_99.6px]",
          "[background-image:linear-gradient(to_right,#000319_1px,transparent_1px),linear-gradient(to_bottom,#000319_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#000328_3px,transparent_3px),linear-gradient(to_bottom,#000328_3px,transparent_3px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
    </div>
  );
}
