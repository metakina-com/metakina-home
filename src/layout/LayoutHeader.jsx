import groupImg from '@/assets/images/home/Group.png';
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx';
import { Image } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LayoutHeader = memo(() => {
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('Header.home') },
    { path: '/', label: t('Header.whyChooseUs') },
    { path: '/', label: t('Header.supportedChains') },
    { path: '/', label: t('Header.cooperationMode') },
  ];

  const renderLogo = () => (
    <Link to="/" className="flex items-center font-bold space-x-1">
      <Image
        alt={t('Home.name')}
        src={groupImg}
        className="h-6 w-6"
        width={32}
        height={32}
        preview={false}
      />
      <span className="pl-[5px] text-3xl text-white hover:text-gray-200">
        {t('Home.title')}
      </span>
    </Link>
  );

  const renderNavItems = () => (
    <>
      {navItems.map((item, index) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center ${index > 0 ? 'ml-8' : ''}`}
        >
          <span className="text-lg text-white">{item.label}</span>
        </Link>
      ))}
    </>
  );

  const renderButtons = () => (
    <div className="ml-8 flex items-center">
      <Link
        to="/"
        className="flex items-center border border-white rounded-2 px-6 py-2 text-white transition-colors hover:bg-white/10"
      >
        <span className="text-base">{t('Header.joinUs')}</span>
      </Link>
      <Link
        to="/"
        className="ml-4 flex items-center rounded-2 bg-[#E000E9] px-6 py-2 text-white transition-colors hover:bg-[#C000C9]"
      >
        <span className="text-base">{t('Header.contactUs')}</span>
      </Link>
    </div>
  );

  return (
    <div className="h-full flex flex-1 items-center justify-between px-8">
      <div className="flex items-center">
        {renderLogo()}
      </div>
      <div className="ml-12 flex items-center">
        {renderNavItems()}
        {renderButtons()}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
});

LayoutHeader.displayName = 'LayoutHeader';

export default LayoutHeader;
