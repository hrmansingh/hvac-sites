export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  highlightText?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "01",
    number: "01",
    question: "What does NorthDemand do?",
    answer:
      "We help HVAC companies in the USA get more qualified leads through conversion-focused copywriting, landing pages, and acquisition improvements. Instead of selling vague digital marketing, we focus on finding where potential customers drop off and helping turn more of them into inquiries and calls.",
  },
  {
    id: "02",
    number: "02",
    question: "What is the Free HVAC Acquisition Review?",
    answer:
      "It’s a practical review of your current online customer acquisition journey. We identify the three biggest opportunities where you may be losing calls or leads and explain what you can do to fix them. You’ll get specific recommendations based on your business, not a generic marketing checklist.",
    highlightText: "three biggest opportunities where you may be losing calls or leads",
  },
  {
    id: "03",
    number: "03",
    question: "What will I receive in the review?",
    answer:
      "We’ll walk you through the three opportunities we identify, why each one may be costing you potential leads, and the changes we recommend. The goal is to give you a clear, actionable starting point so you understand what to improve and why. We’ll confirm the review format when you request yours.",
  },
  {
    id: "04",
    number: "04",
    question: "Is the HVAC Acquisition Review really free?",
    answer:
      "Yes. The initial review is free, and there’s no obligation to purchase a service afterward. If we identify opportunities where we can help, we can discuss possible next steps. You decide whether moving forward makes sense for your business.",
  },
  {
    id: "05",
    number: "05",
    question: "What if I already have a website and run Google Ads?",
    answer:
      "That’s a useful starting point. We can look at how your messaging, landing pages, calls to action, and acquisition journey work together. The goal is to identify potential gaps between attracting prospects and converting them into qualified inquiries, rather than automatically recommending that you start over.",
  },
  {
    id: "06",
    number: "06",
    question: "What services can you help with after the review?",
    answer:
      "Depending on what your business needs, we can help with conversion-focused copywriting, landing-page creation, and improvements to your customer acquisition process, including paid advertising and related landing-page and tracking work. We focus on addressing the problems that matter most rather than selling a one-size-fits-all package.",
  },
  {
    id: "07",
    number: "07",
    question: "How much does it cost to work with NorthDemand?",
    answer:
      "It depends on the problems we identify and the work required to address them. After the review and a conversation about your goals, we can discuss a suitable scope and price. We’re developing our service packages around real HVAC business needs, so we’ll recommend an approach based on the work involved rather than forcing you into a preset package.",
  },
  {
    id: "08",
    number: "08",
    question: "Can you guarantee more calls or leads?",
    answer:
      "No agency can responsibly guarantee a specific result without accounting for factors such as demand, competition, advertising budget, and lead follow-up. Our focus is on identifying and improving the parts of your acquisition journey that may be preventing potential customers from contacting you. We aim to make improvements measurable wherever the available tracking allows.",
  },
  {
    id: "09",
    number: "09",
    question: "Do you have results or case studies I can look at?",
    answer:
      "We’re building our HVAC-specific portfolio and gathering evidence from real projects. We may share sample landing pages to demonstrate our approach, clearly labelled as samples rather than client work. As we complete projects and have permission to share the results, we’ll add genuine examples and case studies.",
  },
  {
    id: "10",
    number: "10",
    question: "How do I get started?",
    answer:
      "Start with the Free HVAC Acquisition Review. Tell us a little about your HVAC business and share your website, if you have one. We’ll use that information to identify potential improvements and discuss the next steps if there’s a good fit.",
  },
];
