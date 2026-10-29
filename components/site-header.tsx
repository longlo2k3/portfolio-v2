"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SiteContent } from "@/content/site";
import { Button, Container } from "@/components/ui/primitives";

export function SiteHeader({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const sections = content.navigation
      .map((item) => document.getElementById(item.href.split("#")[1] ?? ""))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const headerHeight =
        document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 72;
      const marker = window.innerHeight * 0.25 + headerHeight;
      let current = sections[0]?.id ?? "about";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveId((previous) => (previous === current ? previous : current));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [content.navigation]);

  return (
    <header className="site-header" id="top">
      <Container className="site-header__inner">
        <Link className="site-brand" href="/" onClick={() => setOpen(false)}>
          <span className="site-brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{content.ui.brand}</span>
        </Link>
        <Button
          type="button"
          className="menu-toggle"
          aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-toggle__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </Button>
        <nav
          id="site-navigation"
          className={open ? "site-nav site-nav--open" : "site-nav"}
          aria-label={content.ui.navigationLabel}
        >
          {content.navigation.map((item) => {
            const id = item.href.split("#")[1];
            const active = activeId === id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "site-nav__link--active" : undefined}
                aria-current={active ? "location" : undefined}
                onClick={() => {
                  setOpen(false);
                  if (id) setActiveId(id);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
