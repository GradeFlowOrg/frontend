"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

function isMobileDevice(): boolean {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(isMobileDevice());

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return isMobile;
}
