import { Link as I18nLink } from "@/i18n/routing";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MediumOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Home");
  const tCompany = useTranslations("Company");
  const tFooter = useTranslations("Footer");

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">
                {tFooter(section.title)}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <I18nLink
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      prefetch={false}
                    >
                      {tFooter(link.label)}
                    </I18nLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xl font-bold mb-4">{tFooter("followUs")}</h3>
            <div className="flex space-x-4 my-6">
              {[
                { icon: <GithubOutlined />, url: "https://github.com/dappweb" },
                {
                  icon: <TwitterOutlined />,
                  url: "https://twitter.com/dappweb",
                },
                {
                  icon: <LinkedinOutlined />,
                  url: "https://linkedin.com/company/dappweb",
                },
                {
                  icon: <MediumOutlined />,
                  url: "https://medium.com/@dappweb",
                },
              ].map((social, index) => (
                <I18nLink
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </I18nLink>
              ))}
            </div>
            <p className="text-gray-400">{tCompany("name")}</p>
            <p className="text-gray-400">{tCompany("address")}</p>
            <p className="text-gray-400">
              <MailOutlined className="mr-1.5" />
              contact@dappweb.cn
            </p>
            <p className="text-gray-400">
              <PhoneOutlined className="mr-1.5" />
              +86 177 0922 4992
            </p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-t py-10">
          <p>{tFooter("Copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  title: string;
  links: Link[];
};

type Link = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  useA?: boolean;
};

const footerLinks: FooterLink[] = [
  {
    title: "footerLinks.services.title",
    links: [
      { label: "footerLinks.services.exchange", href: "#" },
      { label: "footerLinks.services.dapp", href: "#" },
      { label: "footerLinks.services.gamefi", href: "#" },
      { label: "footerLinks.services.nft", href: "#" },
      { label: "footerLinks.services.blockchain", href: "#" },
      { label: "footerLinks.services.layer2", href: "#" },
      { label: "footerLinks.services.wallet", href: "#" },
      { label: "footerLinks.services.trustedData", href: "#" },
      { label: "footerLinks.services.ai", href: "#" },
    ],
  },
];
