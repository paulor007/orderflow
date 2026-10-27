import { useState } from "react";
import { EventStream } from "./EventStream";
import { SystemTopology } from "./SystemTopology";

export function HeroSystemPreview() {
  const [running, setRunning] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  function toggleRunning() {
    setRunning((previous) => !previous);
  }

  return (
    <div className="w-full space-y-4.5">
      <SystemTopology running={running} onToggle={toggleRunning} />
      <EventStream running={running} />
    </div>
  );
}
