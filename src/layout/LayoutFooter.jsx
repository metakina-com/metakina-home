import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LayoutFooter = memo(() => {
  const { t } = useTranslation();

  // 使用相同的链接配置和社交媒体配置
  const quickLinks = [
    { path: '/', key: 'Footer.quickLinks.solutions' },
    { path: '/', key: 'Footer.quickLinks.whyChooseUs' },
    { path: '/', key: 'Footer.quickLinks.marketDynamics' },
    { path: '/', key: 'Footer.quickLinks.supportedChains' },
    { path: '/', key: 'Footer.quickLinks.digitalCurrency' },
    { path: '/', key: 'Footer.quickLinks.resourceCenter' },
    { path: '/', key: 'Footer.quickLinks.customerSuccess' },
  ];

  const resourceLinks = [
    { path: '/privacy-policy', key: 'Footer.resources.whitepaper' },
    { path: '/', key: 'Footer.resources.serviceManual' },
    { path: '/', key: 'Footer.resources.industryInsight' },
    { path: '/', key: 'Footer.resources.faq' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/metakina',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/metakina',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/metakina',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 1 0 24 12a12 12 0 0 0-12.056-12zM16.906 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/metakina',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
  ];

  const renderAboutSection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t('Footer.about.title')}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {t('Footer.about.description')}
      </p>
    </div>
  );

  const renderQuickLinks = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t('Footer.quickLinks.title')}</h3>
      <ul className="space-y-2">
        {quickLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {t(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderResourceLinks = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t('Footer.resources.title')}</h3>
      <ul className="space-y-2">
        {resourceLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {t(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSocialLinks = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t('Footer.followUs.title')}</h3>
      <div className="flex space-x-4">
        {socialLinks.map(social => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-white"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );

  const renderCopyright = () => (
    <div className="text-center space-y-2">
      <p className="text-sm text-white">
        {t('Footer.copyright')}
        <span className="px-2">|</span>
        <Link to="/privacy-policy" className="transition-colors hover:text-white">
          {t('Footer.privacyPolicy')}
        </Link>
        <span className="px-2">|</span>
        <Link to="/terms-of-service" className="transition-colors hover:text-white">
          {t('Footer.terms')}
        </Link>
      </p>
    </div>
  );

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-4 py-12 container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {renderAboutSection()}
          {renderQuickLinks()}
          {renderResourceLinks()}
          {renderSocialLinks()}
        </div>
        <hr className="my-8 border-white" />
        {renderCopyright()}
      </div>
    </footer>
  );
});

LayoutFooter.displayName = 'LayoutFooter';

export default LayoutFooter;
