import type { SiteContent, SiteSection } from "@/content/site";
import {
  Card,
  Container,
  MediaFrame,
  SectionHeading,
} from "@/components/ui/primitives";

export function DeeperSection({
  section,
  content,
}: {
  section: SiteSection;
  content: SiteContent;
}) {
  return (
    <section
      id={section.id}
      className="deeper section-pad"
      aria-labelledby="deeper-heading"
    >
      <Container>
        <SectionHeading index={3} title={section.heading} id="deeper-heading" />
        <div className="deeper__grid">
          {section.entries.map((entry, index) => (
            <Card
              key={entry.title}
              className={`deeper-card deeper-card--${index + 1}`}
            >
              {entry.images[0] ? (
                <MediaFrame
                  asset={entry.images[0]}
                  className="deeper-card__image"
                  aspectRatio="16 / 10"
                  sizes="(max-width: 760px) 100vw, 32vw"
                />
              ) : (
                <div className="deeper-card__pattern" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              <div className="deeper-card__body">
                <span className="deeper-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {content.highlights.deeper[index] && (
                  <div className="deeper-card__metric">
                    <strong>{content.highlights.deeper[index].value}</strong>
                    <span>{content.highlights.deeper[index].label}</span>
                  </div>
                )}
                <h3>{entry.title}</h3>
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
