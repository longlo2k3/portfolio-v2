import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JourneySection } from "@/components/sections/journey-section";
import { DevicesSection } from "@/components/sections/devices-section";
import { DeeperSection } from "@/components/sections/deeper-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { PersonalSection } from "@/components/sections/personal-section";
import { ScrollEffects } from "@/components/scroll-effects";
import { site } from "@/content/site";

export default function HomePage() {
  const [journey, devices, deeper, impact, personal] = site.sections;
  return (
    <>
      <a className="skip-link" href="#main">
        {site.ui.skipLink}
      </a>
      <SiteHeader content={site} />
      <ScrollEffects />
      <main id="main">
        <JourneySection section={journey} content={site} />
        <DevicesSection section={devices} content={site} />
        <DeeperSection section={deeper} content={site} />
        <ImpactSection section={impact} content={site} />
        <PersonalSection section={personal} />
      </main>
      <SiteFooter content={site} />
    </>
  );
}
