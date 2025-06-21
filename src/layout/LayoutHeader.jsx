import groupImg from '@/assets/images/home/Group.png';
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Image, Menu } from 'antd';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const LayoutHeader = memo(() => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: t('Header.home') },
    { path: '/', label: t('Header.solutions') },
    { path: '/', label: t('Header.supportedChains') },
    { path: '/', label: t('Header.resourceCenter') },
    { path: '/', label: t('Header.cooperationMode') },
  ];

  const renderLogo = () => (
    <Link to="/" className="flex items-center font-bold space-x-1">
      <Image
        alt={t('Home.name')}
        src={groupImg}
        className="h-[41px]! max-md:h-8!"
        preview={false}
      />
      {/* <span className="pl-[5px] text-xl text-white md:text-3xl hover:text-gray-200">
        {t('Home.title')}
      </span> */}
    </Link>
  );

  const renderNavItems = () => (
    <>
      {navItems.map((item, index) => (
        <Link
          key={`${item.path}d${index}`}
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
        to="/apply"
        className="flex items-center border border-white rounded-2 px-6 py-2 text-white transition-colors hover:bg-white/10"
      >
        <span className="text-base">{t('Header.joinUs')}</span>
      </Link>
      <Link
        to="/"
        className="ml-4 flex items-center rounded-2 bg-[#ffffff] px-6 py-2 text-[#0055FF] transition-colors hover:bg-white/80"
      >
        <span className="text-base">{t('Header.contactUs')}</span>
      </Link>
    </div>
  );

  const handleAnchorClick = ({ _key, path }) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="mx-auto h-full w-[85vw] flex flex-1 items-center justify-between px-2 max-md:w-[90vw] md:px-8">
      <div className="flex items-center">
        {renderLogo()}
      </div>
      <div className="ml-12 hidden items-center md:flex">
        {renderNavItems()}
        {renderButtons()}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="ml-2 flex md:hidden">
        <LanguageSwitcher />
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-2"
          style={{ color: 'white' }}
        />
      </div>
      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-[73px] z-[10] block bg-[#0055FF] py-2 md:hidden">
          <div className="mx-auto px-4 container">
            <Menu
              mode="inline"
              theme="dark"
              items={navItems}
              style={{ fontSize: '1rem', color: '#ffffff' }}
              onSelect={({ key }) => handleAnchorClick({ key, path: '/' })}
              className="white-text-menu !bg-[#0055FF] !text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
});

LayoutHeader.displayName = 'LayoutHeader';

export default LayoutHeader;
