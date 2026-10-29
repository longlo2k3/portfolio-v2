export type MediaAsset = {
  src: `/media/${string}`;
  width: number;
  height: number;
  alt: string;
};

export const media = {
  gartWorkshop: {
    src: "/media/gart-workshop.webp",
    width: 2048,
    height: 1365,
    alt: "Students working together at a robotics workshop",
  },
  gartBuild: {
    src: "/media/gart-build.webp",
    width: 2048,
    height: 1365,
    alt: "Students building a robot at a worktable",
  },
  ftcVietnam: {
    src: "/media/ftc-vietnam.webp",
    width: 1200,
    height: 800,
    alt: "Robotics team celebrating at an FTC event",
  },
  ftcWorldsTeam: {
    src: "/media/ftc-worlds-team.webp",
    width: 2200,
    height: 1650,
    alt: "Robotics team at FIRST Tech Challenge Worlds",
  },
  ftcWorldsRobot: {
    src: "/media/ftc-worlds-robot.webp",
    width: 2200,
    height: 1467,
    alt: "Robot on a FIRST Tech Challenge competition field",
  },
  gartCamp: {
    src: "/media/gart-camp.webp",
    width: 1276,
    height: 956,
    alt: "Students collaborating during GART Camp",
  },
  gartExpo: {
    src: "/media/gart-expo.webp",
    width: 2048,
    height: 1365,
    alt: "Students working on a robot at GART Expo",
  },
  envirotrackWicoPoster: {
    src: "/media/envirotrack-wico-poster.webp",
    width: 1650,
    height: 2200,
    alt: "Project presentation board at WICO",
  },
  envirotrackWicoEvent: {
    src: "/media/envirotrack-wico-event.webp",
    width: 1237,
    height: 2200,
    alt: "Presenter beside a project board at WICO",
  },
  conradEvent: {
    src: "/media/conrad-event.webp",
    width: 2200,
    height: 1650,
    alt: "Conrad Challenge venue at Johnson Space Center",
  },
  conradTeam: {
    src: "/media/conrad-team.webp",
    width: 2200,
    height: 1650,
    alt: "Team at a Conrad Challenge event",
  },
  gtsdPresentation: {
    src: "/media/gtsd-presentation.webp",
    width: 2200,
    height: 1650,
    alt: "Research presentation at a GTSD conference venue",
  },
  stembridgeFair: {
    src: "/media/stembridge-fair.webp",
    width: 2200,
    height: 1650,
    alt: "Students gathered at a Stembridge STEM fair",
  },
  xaDanWorkshop: {
    src: "/media/xa-dan-workshop.webp",
    width: 2200,
    height: 1238,
    alt: "Group at a school STEM workshop",
  },
  a320CockpitBuild: {
    src: "/media/a320-cockpit-build.webp",
    width: 2200,
    height: 2198,
    alt: "A home cockpit structure under construction",
  },
} as const satisfies Record<string, MediaAsset>;
