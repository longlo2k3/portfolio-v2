import { media, type MediaAsset } from "./media";

export type SiteEntry = {
  title: string;
  paragraphs: readonly string[];
  images: readonly MediaAsset[];
  caseStudy?: {
    problem: string;
    role: string;
    iteration: string;
    result: string;
  };
};

export type SiteSection = {
  id: string;
  heading: string;
  entries: readonly SiteEntry[];
};

export type SiteContent = {
  language: "en";
  title: string;
  metadata: { title: string; description: string };
  navigation: readonly { label: string; href: string }[];
  ui: {
    skipLink: string;
    navigationLabel: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    brand: string;
    explore: string;
  };
  about: {
    title: string;
    headline: string;
    paragraphs: readonly string[];
  };
  caseStudyLabels: {
    problem: string;
    role: string;
    iteration: string;
    result: string;
  };
  hero: {
    statistic: { value: string; label: string };
  };
  highlights: {
    journey: readonly { value: string; label: string }[];
    devices: readonly { value: string; label: string }[];
    deeper: readonly { value: string; label: string }[];
    impact: { value: string; label: string };
  };
  sections: readonly SiteSection[];
};

/** Facts follow Portfolio_Content_Condensed.md. About is synthesized from those facts; Achievements and Contact still lack source data. */
export const site = {
  language: "en",
  title: "Journey",
  metadata: {
    title: "Minh | Engineering Portfolio",
    description:
      "Meet Minh through robotics, self-built devices, research, STEM outreach, aviation, and music.",
  },
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Robotics — GART", href: "/#journey" },
    { label: "Self-built devices", href: "/#devices" },
    { label: "Diving Deeper", href: "/#deeper" },
    { label: "Social Impact", href: "/#impact" },
    { label: "Personal Corner", href: "/#personal" },
  ],
  ui: {
    skipLink: "Skip to content",
    navigationLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    brand: "Engineering Portfolio",
    explore: "Explore the journey",
  },
  about: {
    title: "About",
    headline: "Hi, I'm Minh. I learn best by building.",
    paragraphs: [
      "I got my start at GART with no experience. My first CAD drawings, 3D prints, CNC orders, and a competition robot built on a tight budget showed me how much I enjoy turning an idea into something real.",
      "That curiosity has taken me from FTC robotics to environmental sensors, an underwater vehicle, and power systems research. I enjoy working through the practical details, testing what I make, and learning from each iteration.",
      "Outside engineering, aviation has been a lifelong interest, from museum visits with my grandfather to building a DIY A320 cockpit. I also play electric guitar and share what I have learned through robotics training and STEM outreach.",
    ],
  },
  caseStudyLabels: {
    problem: "Problem",
    role: "Role",
    iteration: "Iteration",
    result: "Result",
  },
  hero: {
    statistic: {
      value: "16",
      label: "match win streak at FTC Vietnam Nationals",
    },
  },
  highlights: {
    journey: [
      { value: "2nd", label: "place at Mock GART" },
      { value: "16", label: "match win streak" },
      { value: "2nd", label: "overall at FTC Worlds" },
      { value: "40", label: "members led as Head of Mechanics" },
    ],
    devices: [
      { value: "25+", label: "EnviroTrack devices deployed" },
      { value: "4", label: "Conrad prototype iterations" },
    ],
    deeper: [
      { value: "1 of 10", label: "students selected for Samsung SST" },
      { value: "3 months", label: "INS power grid analytics internship" },
    ],
    impact: { value: "300", label: "students at Quan Sơn Boarding School" },
  },
  sections: [
    {
      id: "journey",
      heading: "Robotics — GART",
      entries: [
        {
          title: "GART",
          paragraphs: [
            "Started at GART with no experience, drawn in by the ability to design and build real things — first CAD drawings, 3D prints, CNC orders. As team captain in Mock GART, built our first robot on a tight budget (2nd place) — the competition that sparked my passion for engineering.",
            "Joined FIRST Tech Challenge as Head of Mechanics-CAD. Applied lessons in design simplification and simulation to win the FTC Vietnam National Round (16-match win streak) + Design Award, then placed 2nd overall (Finalist Alliance, top alliance in Edison Division) at FTC Worlds in Texas.",
            "As Head of Mechanics, led 40 members — built training curriculum on CAD, 3D printing, and manufacturing; mentored the team that later won Mock GART. Also trained 34 mentors and ran GART Camp, teaching VEX IQ to kids at the American Embassy community center, and helped organize GART Expo, an annual STEM outreach event.",
          ],
          images: [
            media.gartWorkshop,
            media.gartBuild,
            media.ftcVietnam,
            media.ftcWorldsTeam,
            media.ftcWorldsRobot,
            media.gartCamp,
            media.gartExpo,
          ],
        },
      ],
    },
    {
      id: "devices",
      heading: "Self-built devices",
      entries: [
        {
          title: "EnviroTrack",
          paragraphs: [
            "Air-quality monitoring system (public real-time display + mobile app for alerts/predictions), led a 3-person team. After feedback at WICO, redesigned into a compact deployable unit; built 25+ devices deployed across Hanoi markets/train stations and communes in Nam Định.",
          ],
          images: [media.envirotrackWicoPoster, media.envirotrackWicoEvent],
          caseStudy: {
            problem:
              "Air-quality monitoring with a public real-time display and a mobile app for alerts and predictions.",
            role: "Led a 3-person team.",
            iteration:
              "After feedback at WICO, redesigned the system into a compact deployable unit.",
            result:
              "Built 25+ devices deployed across Hanoi markets/train stations and communes in Nam Định.",
          },
        },
        {
          title: "Conrad Challenge",
          paragraphs: [
            "Autonomous underwater vehicle mapping microplastic pollution in lakes/coastal areas. Responsible for electrical systems + CAD; solved buoyancy, COG, waterproofing, signal transmission, measurement accuracy. 4 prototype iterations → selected as 1 of 25 teams (out of 1,000+) to pitch at Conrad Global Innovation Challenge, Johnson Space Center.",
          ],
          images: [media.conradEvent, media.conradTeam],
          caseStudy: {
            problem:
              "Map microplastic pollution in lakes and coastal areas with an autonomous underwater vehicle.",
            role: "Responsible for electrical systems and CAD; solved buoyancy, COG, waterproofing, signal transmission, and measurement accuracy.",
            iteration: "Completed 4 prototype iterations.",
            result:
              "Selected as 1 of 25 teams out of 1,000+ to pitch at the Conrad Global Innovation Challenge, Johnson Space Center.",
          },
        },
      ],
    },
    {
      id: "deeper",
      heading: "Diving Deeper",
      entries: [
        {
          title: "Samsung SST",
          paragraphs: [
            "1 of 10 students selected for Samsung Vietnam R&D's Science & Technology membership. Strengthened Java/DSA (Advanced cert, S/W Global Certificate Test), studied semiconductor fabrication (Innovation Campus), capstone: 3D artifact reconstruction using Gaussian Splatting.",
          ],
          images: [],
        },
        {
          title: "INS Internship",
          paragraphs: [
            "3-month internship in power grid analytics. Trained in reading RFIs, dynamic modeling of power systems under fault events (lightning, outages), using ETAP & PSS/E.",
          ],
          images: [],
        },
        {
          title: "Research",
          paragraphs: [
            "Under Assoc. Prof. Võ Thanh Hà, researched NDO-MPC control for battery/supercapacitor power distribution in vehicles; built models + MATLAB simulations. Presented at GTSD conference.",
          ],
          images: [media.gtsdPresentation],
        },
      ],
    },
    {
      id: "impact",
      heading: "Social Impact",
      entries: [
        {
          title: "Stembridge (founder)",
          paragraphs: [
            "STEM Fairs, Makerspace donations, and classes for under-resourced schools.",
            "Quan Sơn Boarding School (Lạng Sơn): built/donated a STEM lab, ran workshops + fair for 300 students.",
            "Xa Đàn School for Deaf Students: adapted activities for students with disabilities (deafness, Down syndrome, developmental needs), donated educational materials.",
          ],
          images: [media.stembridgeFair, media.xaDanWorkshop],
        },
        {
          title: "Volunteering",
          paragraphs: [
            "Water rocket/holography demos (Cosmosics), field reset volunteer at Red River Delta VEX V5 tournaments.",
          ],
          images: [],
        },
      ],
    },
    {
      id: "personal",
      heading: "Personal Corner",
      entries: [
        {
          title: "Aviation",
          paragraphs: [
            "Lifelong interest sparked by VPAF Museum visits with grandfather; collects 1:400 model planes, built a DIY A320 home cockpit (wood + 3D print + electronics), now rents it out as a small business (HomeA320) to fund other projects. Also into planespotting.",
          ],
          images: [media.a320CockpitBuild],
        },
        {
          title: "Music",
          paragraphs: [
            'Fan of 60s–90s American rock/counterculture music; plays electric guitar (gift at 14), occasional street performances near Văn Miếu Coffee. Favorite songs: "More Than a Feeling", "It\'s My Life".',
          ],
          images: [],
        },
      ],
    },
  ],
} as const satisfies SiteContent;
