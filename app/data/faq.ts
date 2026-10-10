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
    question: "How does NorthDemand help HVAC companies get more leads?",
    answer:
      "We help HVAC companies turn more potential customers into qualified inquiries through conversion-focused copywriting, landing pages, and acquisition improvements.",
  },
  {
    id: "02",
    number: "02",
    question: "What is the Free HVAC Acquisition Review?",
    answer:
      "We identify the three biggest opportunities where your business may be losing calls or leads and explain what you can improve. You’ll get practical recommendations tailored to your website and customer acquisition journey.",
    highlightText: "three biggest opportunities where your business may be losing calls or leads",
  },
  {
    id: "03",
    number: "03",
    question: "Is the Acquisition Review really free?",
    answer:
      "Yes. The review is free, with no obligation to buy. We’ll show you the opportunities we identify, and you can decide whether you want help implementing the recommendations.",
  },
  {
    id: "04",
    number: "04",
    question: "Can you help if I already have a website or run Google Ads?",
    answer:
      "Absolutely. We look for opportunities to improve your messaging, landing pages, calls to action, and the path from a click to a qualified inquiry. The goal is to improve what you already have where possible, not recommend a complete rebuild without a reason.",
  },
  {
    id: "05",
    number: "05",
    question: "What happens after the review?",
    answer:
      "You’ll understand the main opportunities we found and the changes we recommend. If you want help putting them into action, we can discuss a suitable scope of work covering copywriting, landing pages, or acquisition improvements.",
  },
  {
    id: "06",
    number: "06",
    question: "How much does it cost to work with NorthDemand?",
    answer:
      "Pricing depends on your goals and the work required. After reviewing your needs, we’ll discuss a clear scope and price before any paid work begins.",
  },
];