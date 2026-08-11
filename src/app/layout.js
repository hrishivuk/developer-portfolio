import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import AmbientBackground from "./components/AmbientBackground";
import CustomCursor from "./components/CustomCursor";

// Get site URL from environment variable or use default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hrishivuk.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Hrishikesh Varma - Frontend & Full-Stack Developer",
  description:
    "Dublin-based frontend-focused full-stack developer building thoughtful web and mobile products with React, Next.js and TypeScript.",
  keywords:
    "Frontend Developer, Full-Stack Developer, React, Next.js, TypeScript, PostgreSQL, Product Engineering, UX, Dublin",
  authors: [{ name: "Hrishikesh Varma" }],
  creator: "Hrishikesh Varma",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Hrishikesh Varma - Frontend & Full-Stack Developer",
    description:
      "Dublin-based frontend-focused full-stack developer building thoughtful web and mobile products with React, Next.js and TypeScript.",
    url: siteUrl,
    siteName: "Hrishikesh Varma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hrishikesh Varma - Frontend & Full-Stack Developer",
    description:
      "Dublin-based frontend-focused full-stack developer building thoughtful web and mobile products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <>
          <AmbientBackground />
          <CustomCursor />
          {children}
          <Analytics />
        </>
      </body>
    </html>
  );
}
