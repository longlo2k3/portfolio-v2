"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading",
  ".journey-story__lead",
  ".journey-story__row",
  ".journey-story__end",
  ".device-card",
  ".deeper-card",
  ".impact__copy",
  ".impact__visual",
  ".impact__volunteering",
  ".personal-card",
].join(", ");

export function ScrollEffects() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress) {
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, fraction))})`;
      }
    };

    const requestProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);
    requestProgress();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return () => {
        window.removeEventListener("scroll", requestProgress);
        window.removeEventListener("resize", requestProgress);
        window.cancelAnimationFrame(frame);
      };
    }

    const elements = document.querySelectorAll<HTMLElement>(revealSelector);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
      observer.observe(element);
    });
    document.documentElement.classList.add("motion-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      elements.forEach((element) => {
        element.classList.remove("reveal-on-scroll", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
