import { TransformationProject } from "../types/transformation";

export const transformationProjects: TransformationProject[] = [
  {
    id: "mcguire-controls",
    projectNumber: "01 / WEBSITE TRANSFORMATION",
    clientName: "McGuire Controls",
    originalUrl: "http://mcguirecontrols.com/",
    originalDisplayUrl: "mcguirecontrols.com",
    redesignUrl: "/mcguire-controls",
    redesignDisplayUrl: "northdemand.com/mcguire-controls",
    beforeImage: "/images/mcguire-before.png?v=2",
    afterImage: "/images/mcguire-after.png?v=2",
    beforeFullScreenshot: "/images/mcguirecontrols.com(before%20web)_.png",
    beforeMobileScreenshot: "/images/mcguirecontrols.com_before(iPhone%2016).png",
    afterFullScreenshot: "/images/mcguire-redesign-full.png",
    afterMobileScreenshot: "/images/mcguire-controls(iPhone%2016).png",
    fullScreenshot: "/images/mcguire-redesign-full.png",
    summary: "Clearer messaging. Stronger trust. A simpler path to booking.",
    keyPoints: [
      "Built around commercial & residential decision-makers",
      "Designed to turn visits into qualified engineering calls",
    ],
  },
  {
    id: "greatbay-industries",
    projectNumber: "02 / WEBSITE TRANSFORMATION",
    clientName: "Great Bay Industries",
    originalUrl: "https://greatbayindustries.com/",
    originalDisplayUrl: "greatbayindustries.com",
    redesignUrl: "/greatbay-industries",
    redesignDisplayUrl: "northdemand.com/greatbay-industries",
    beforeImage: "/images/greatbay-before.png",
    afterImage: "/images/greatbay-after.png",
    summary: "Clearer messaging. Stronger local trust. A simpler path to booking.",
    keyPoints: [
      "Built around Southern & Central Maine residential & commercial trust",
      "Designed to turn high-intent visits into scheduled service & quote calls",
    ],
  },
];
