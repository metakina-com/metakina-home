import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const headerLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "whyChooseUs",
    href: "/",
  },
  {
    name: "supportedChains",
    href: "/",
  },
  {
    name: "cooperationMode",
    href: "/",
  },
  // {
  //   name: "followUs",
  //   href: "/",
  // },
  // {
  //   name: "aboutUs",
  //   href: "/",
  // },
  // {
  //   name: "contactUs",
  //   href: "/",
  // },
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
          className="text-white hover:text-[#D900FF] transition-colors"
        >
          {tHeader(link.name)}
        </I18nLink>
      ))}
    </div>
  );
};
export default HeaderLinks;
