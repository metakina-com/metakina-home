export type ThemeColor = {
  media: string;
  color: string;
};
export type SiteConfig = {
  name: string;
  tagLine: string;
  description: string;
  url: string;

  themeColors?: string | ThemeColor[];
  defaultNextTheme?: string;
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };
};
