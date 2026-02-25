"use client";

// React
import { useEffect, useState } from "react";

// Componentes
import { Button } from "@/components/ui/button";

// Lucide Icons
import { ArrowUpIcon } from "lucide-react";

const SCROLL_THRESHOLD = 300;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="default"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-md transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUpIcon className="size-4" />
    </Button>
  );
}
