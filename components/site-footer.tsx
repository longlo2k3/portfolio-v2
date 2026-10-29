import type { SiteContent } from "@/content/site";
import { Container } from "@/components/ui/primitives";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <span className="site-footer__brand">{content.ui.brand}</span>
        <a href="#top">
          {content.ui.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </Container>
    </footer>
  );
}
