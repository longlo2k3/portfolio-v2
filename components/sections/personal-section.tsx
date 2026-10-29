import type { SiteSection } from "@/content/site";
import {
  Card,
  Container,
  MediaFrame,
  SectionHeading,
} from "@/components/ui/primitives";

export function PersonalSection({ section }: { section: SiteSection }) {
  const [aviation, music] = section.entries;
  return (
    <section
      id={section.id}
      className="personal section-pad"
      aria-labelledby="personal-heading"
    >
      <Container>
        <SectionHeading
          index={5}
          title={section.heading}
          id="personal-heading"
        />
        <div className="personal__grid">
          <Card className="personal-card personal-card--aviation">
            <MediaFrame
              asset={aviation.images[0]}
              aspectRatio="5 / 4"
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <div>
              <span className="personal-card__tag" aria-hidden="true">
                01
              </span>
              <h3>{aviation.title}</h3>
              {aviation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
          <Card className="personal-card personal-card--music">
            <div className="personal-card__record" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <span className="personal-card__tag" aria-hidden="true">
                02
              </span>
              <h3>{music.title}</h3>
              {music.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
