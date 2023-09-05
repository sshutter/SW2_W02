"use client";

import React from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onCardHover(event: React.SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.add("bg-neutral-300");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.remove("bg-neutral-300");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.add("bg-white");
    }
  }
  return (
    <div
      className="w-1/4 h-[600px] rounded-lg shadow-lg bg-white"
      onMouseOver={(event) => onCardHover(event)}
      onMouseOut={(event) => onCardHover(event)}
    >
      {children}
    </div>
  );
}
