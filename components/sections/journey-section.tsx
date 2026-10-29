import type { SiteContent, SiteSection } from "@/content/site";
import {
  Card,
  Container,
  MediaFrame,
  SectionHeading,
} from "@/components/ui/primitives";

export function JourneySection({
  section,
  content,
}: {
  section: SiteSection;
  content: SiteContent;
}) {
  const entry = section.entries[0];
  const [workshop, build, vietnam, worldsTeam, worldsRobot, camp, expo] =
    entry.images;
  const storyImages = [build, vietnam, camp];

  return (
    <section className="journey" aria-labelledby="about-heading">
      <div id="about" className="journey-hero">
        <Container className="journey-hero__grid">
          <div className="journey-hero__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" />
              {content.about.title}
            </p>
            <h1 id="about-heading">{content.about.headline}</h1>
            <div className="journey-hero__introduction">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a className="text-link text-link--light" href="#journey">
              {content.ui.explore}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="journey-hero__visual">
            <MediaFrame
              asset={worldsTeam}
              className="journey-hero__main-image"
              aspectRatio="5 / 6"
              priority
              sizes="(max-width: 800px) 90vw, 42vw"
            />
            <MediaFrame
              asset={worldsRobot}
              className="journey-hero__detail-image"
              aspectRatio="4 / 3"
              sizes="(max-width: 800px) 42vw, 18vw"
            />
            <MediaFrame
              asset={workshop}
              className="journey-hero__workshop-image"
              aspectRatio="1 / 1"
              sizes="(max-width: 800px) 32vw, 12vw"
            />
            <div
              className="journey-hero__stat"
              aria-label={`${content.hero.statistic.value} ${content.hero.statistic.label}`}
            >
              <strong>{content.hero.statistic.value}</strong>
              <span>{content.hero.statistic.label}</span>
            </div>
          </div>
        </Container>
        <div className="journey-hero__grid-lines" aria-hidden="true" />
      </div>

      <div id={section.id} className="journey-story">
        <Container>
          <SectionHeading
            index={1}
            title={section.heading}
            id="robotics-heading"
          />
          <div className="journey-story__lead">
            <p>{entry.paragraphs[0]}</p>
            <div className="journey-story__metrics">
              {content.highlights.journey.map((highlight, index) => (
                <div key={`${highlight.value}-${index}`}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="journey-story__rows">
            {entry.paragraphs.map((paragraph, index) => (
              <Card key={paragraph} className="journey-story__row">
                <span className="journey-story__row-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{paragraph}</p>
                <MediaFrame
                  asset={storyImages[index]}
                  aspectRatio="4 / 3"
                  sizes="(max-width: 760px) 100vw, 27vw"
                />
              </Card>
            ))}
          </div>
          <div className="journey-story__end">
            <MediaFrame
              asset={expo}
              aspectRatio="16 / 9"
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <p>{entry.title}</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
