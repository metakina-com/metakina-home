import HeaderLinks from "@/components/header/HeaderLinks";
import MobileMenu from "@/components/header/MobileMenu";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link as I18nLink } from "@/i18n/routing";
import groupImg from "@/public/home/Group.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Home");

  return (
    <header className="bg-[rgba(255,255,255,0.2)] rounded-2xl flex text-white shadow-md fixed top-5 inset-x-8 w-84 z-50">
      <div className=" flex-1 w-screen px-2 md:px-14 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <I18nLink
            href="/"
            prefetch={false}
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              alt={t("name")}
              src={groupImg.src}
              className="w-6 h-6"
              width={32}
              height={32}
            />
            <span className=" pl-[10px] dark:text-gray-200">
              {t("title")}
            </span>
          </I18nLink>
        </div>


        <div className="flex gap-x-4 md:gap-x-4 lg:gap-x-6">
          <HeaderLinks />
          <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 flex-1 justify-end">
            {/* PC */}
            <div className="hidden md:flex items-center gap-x-4">
              <LocaleSwitcher />
              {/* <ThemeToggle /> */}
            </div>
          </div>

          {/* Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
