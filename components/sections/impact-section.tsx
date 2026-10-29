import type { SiteContent, SiteSection } from "@/content/site";
import {
  Container,
  MediaFrame,
  SectionHeading,
} from "@/components/ui/primitives";

export function ImpactSection({
  section,
  content,
}: {
  section: SiteSection;
  content: SiteContent;
}) {
  const [stembridge, volunteering] = section.entries;
  return (
    <section
      id={section.id}
      className="impact section-pad"
      aria-labelledby="impact-heading"
    >
      <Container>
        <SectionHeading
          index={4}
          title={section.heading}
          id="impact-heading"
          light
        />
        <div className="impact__grid">
          <div className="impact__copy">
            <h3>{stembridge.title}</h3>
            {stembridge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="impact__metric">
              <strong>{content.highlights.impact.value}</strong>
              <span>{content.highlights.impact.label}</span>
            </div>
          </div>
          <div className="impact__visual">
            <MediaFrame
              asset={stembridge.images[0]}
              className="impact__main-image"
              aspectRatio="4 / 5"
              sizes="(max-width: 760px) 90vw, 38vw"
            />
            <MediaFrame
              asset={stembridge.images[1]}
              className="impact__side-image"
              aspectRatio="4 / 3"
              sizes="(max-width: 760px) 65vw, 18vw"
            />
          </div>
        </div>
        <div className="impact__volunteering">
          <span className="impact__volunteer-line" aria-hidden="true" />
          <h3>{volunteering.title}</h3>
          {volunteering.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
