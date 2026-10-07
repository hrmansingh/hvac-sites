import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthDemand — More HVAC Calls From Google Search",
  description:
    "NorthDemand helps U.S. residential HVAC companies turn high-intent Google searches, from furnace repair to AC repair, into more qualified calls.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
