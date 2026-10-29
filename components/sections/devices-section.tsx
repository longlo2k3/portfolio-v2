import type { SiteContent, SiteSection } from "@/content/site";
import {
  Card,
  Container,
  MediaFrame,
  SectionHeading,
} from "@/components/ui/primitives";

export function DevicesSection({
  section,
  content,
}: {
  section: SiteSection;
  content: SiteContent;
}) {
  return (
    <section
      id={section.id}
      className="devices section-pad"
      aria-labelledby="devices-heading"
    >
      <Container>
        <SectionHeading
          index={2}
          title={section.heading}
          id="devices-heading"
        />
        <div className="devices__grid">
          {section.entries.map((entry, index) => (
            <Card
              key={entry.title}
              className={`device-card device-card--${index + 1}`}
            >
              <div className="device-card__top">
                <span className="device-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="device-card__metric">
                  <strong>{content.highlights.devices[index].value}</strong>
                  {content.highlights.devices[index].label}
                </span>
              </div>
              <div className="device-card__copy">
                <h3>{entry.title}</h3>
                {entry.caseStudy ? (
                  <dl className="device-card__facts">
                    {(["problem", "role", "iteration", "result"] as const).map(
                      (part) => (
                        <div key={part}>
                          <dt>{content.caseStudyLabels[part]}</dt>
                          <dd>{entry.caseStudy?.[part]}</dd>
                        </div>
                      ),
                    )}
                  </dl>
                ) : (
                  entry.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                )}
              </div>
              <div className="device-card__images">
                {entry.images.map((asset, imageIndex) => (
                  <MediaFrame
                    key={asset.src}
                    asset={asset}
                    className={
                      imageIndex === 0
                        ? "device-card__image-main"
                        : "device-card__image-side"
                    }
                    aspectRatio={index === 0 ? "4 / 5" : "4 / 3"}
                    sizes="(max-width: 760px) 80vw, 24vw"
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
