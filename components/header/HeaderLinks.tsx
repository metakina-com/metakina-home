import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const headerLinks = [
  {
    name: "services",
    href: "/",
  },
  {
    name: "case",
    href: "/",
  },
  {
    name: "platform",
    href: "/",
  },
  {
    name: "blog",
    href: "/",
  },
  {
    name: "followUs",
    href: "/",
  },
  {
    name: "aboutUs",
    href: "/",
  },
  {
    name: "contactUs",
    href: "/",
  },
];

const HeaderLinks = () => {
  const tHeader = useTranslations("Header");
  // const locale = useLocale();

  return (
    <div className="hidden md:flex items-center space-x-8">
      {headerLinks.map((link) => (
        <I18nLink
          key={link.name}
          href={link.href}
          title={tHeader(link.name)}
          prefetch={false}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {tHeader(link.name)}
        </I18nLink>
      ))}
    </div>
  );
};
export default HeaderLinks;
