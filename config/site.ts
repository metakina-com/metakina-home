import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.dev";

export const siteConfig: SiteConfig = {
  name: "Next Forge",
  tagLine: "Multilingual Next.js 15 Starter",
  description:
    "A multilingual Next.js 15 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.",
  url: BASE_URL,

  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  defaultNextTheme: "system", // next-theme option: system | dark | light
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png", // apple-touch-icon.png
  },
};
