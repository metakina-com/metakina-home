import groupImg from '@/assets/images/home/Group.png';
import iconBlackImg from '@/assets/images/home/icon-black.png';
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Image, Menu } from 'antd';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LayoutHeader = memo(() => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 判断是否在quotation-and-proposal页面
  const isQuotationPage = location.pathname === '/quotation-and-proposal';

  const navItems = [
    { path: '/', label: t('Header.home'), type: 'route' },
    { path: '#solutions-section', label: t('Header.solutions'), type: 'anchor' },
    { path: '#chooseUs', label: t('Header.supportedChains'), type: 'anchor' },
    { path: '#resourceCenter', label: t('Header.resourceCenter'), type: 'anchor' },
    { path: '/quotation-and-proposal', label: t('Header.cooperationMode'), type: 'route' },
  ];

  const renderLogo = () => (
    <Link to="/" className="flex items-center font-bold space-x-1">
      <Image
        alt={t('Home.name')}
        src={isQuotationPage ? iconBlackImg : groupImg}
        className="h-[41px]! max-md:h-8!"
        preview={false}
      />
      {/* <span className="pl-[5px] text-xl text-white md:text-3xl hover:text-gray-200">
        {t('Home.title')}
      </span> */}
    </Link>
  );

  const handleNavClick = (item, event) => {
    if (item.type === 'anchor') {
      event.preventDefault();

      // 如果不在首页，先跳转到首页
      if (window.location.hash !== '#/home') {
        navigate('/home');
        // 等待页面跳转完成后再滚动
        setTimeout(() => {
          const element = document.querySelector(item.path);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 600);
      } else {
        // 已经在首页，直接滚动
        const element = document.querySelector(item.path);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }
  };

  const renderNavItems = () => (
    <>
      {navItems.map((item, index) => {
        // 判断是否为当前选中的导航项
        const isActive = item.type === 'route'
          ? location.pathname === item.path || (item.path === '/' && location.pathname === '/home')
          : false;

        return item.type === 'anchor'
          ? (
              <a
                key={`${item.path}d${index}`}
                href={item.path}
                onClick={e => handleNavClick(item, e)}
                className={`flex items-center relative ${index > 0 ? 'ml-8' : ''}`}
              >
                <span className={`text-lg ${isQuotationPage ? 'text-black' : 'text-white'}`}>{item.label}</span>
              </a>
            )
          : (
              <Link
                key={`${item.path}d${index}`}
                to={item.path}
                className={`flex items-center relative ${index > 0 ? 'ml-8' : ''}`}
              >
                <span className={`text-lg ${isQuotationPage ? 'text-black' : 'text-white'}`}>{item.label}</span>
                {/* 为当前选中项添加下划线 */}
                { isActive && (
                  <span className={`absolute bottom-[-8px] left-0 h-[2px] w-1/2 translate-x-[25%] ${isQuotationPage ? 'bg-black' : 'bg-white'}`}></span>
                )}
              </Link>
            );
      })}
    </>
  );

  const renderButtons = () => (
    <div className="ml-8 flex items-center">
      <Link
        to="/apply"
        className={`flex items-center border rounded-2 px-6 py-2 transition-colors ${
          isQuotationPage
            ? 'border-black text-black hover:bg-black/10'
            : 'border-white text-white hover:bg-white/10'
        }`}
      >
        <span className="text-base">{t('Header.joinUs')}</span>
      </Link>
      <a
        href="#contact"
        onClick={e => handleNavClick({ path: '#contact', type: 'anchor' }, e)}
        className={`ml-4 flex items-center rounded-2 px-6 py-2 transition-colors cursor-pointer ${
          isQuotationPage
            ? 'bg-[#0055FF] text-white hover:bg-[#0055FF]/80'
            : 'bg-[#ffffff] text-[#0055FF] hover:bg-white/80'
        }`}
      >
        <span className="text-base">{t('Header.contactUs')}</span>
      </a>
    </div>
  );

  const handleAnchorClick = ({ key }) => {
    setMobileMenuOpen(false);

    const item = navItems.find(nav => nav.path === key);

    if (item?.type === 'anchor' || key === '#contact') {
      // 如果不在首页，先跳转到首页
      if (window.location.hash !== '#/home') {
        navigate('/');
        // 等待页面跳转完成后再滚动
        setTimeout(() => {
          const element = document.querySelector(item?.path || key);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 500);
      } else {
        // 已经在首页，直接滚动
        const element = document.querySelector(item?.path || key);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    } else {
      navigate(key);
    }
  };

  return (
    <div
      className="h-full w-[100vw] flex flex-1 items-center justify-between px-[7.5vw] max-md:w-[100vw] max-md:px-2"
      style={{
        backgroundColor: isQuotationPage ? 'white' : 'transparent',
        color: isQuotationPage ? '#000' : '#fff',
      }}
    >
      <div className="flex items-center">
        {renderLogo()}
      </div>
      <div className="ml-12 hidden items-center md:flex">
        {renderNavItems()}
        {renderButtons()}
        <div className="ml-4">
          <LanguageSwitcher isDark={isQuotationPage} />
        </div>
      </div>
      <div className="ml-2 flex md:hidden">
        <LanguageSwitcher isDark={isQuotationPage} />
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-2"
          style={{ color: isQuotationPage ? '#000' : 'white' }}
        />
      </div>
      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <div className={`absolute left-0 right-0 top-[73px] z-[10] block py-2 md:hidden ${isQuotationPage ? 'bg-white' : 'bg-[#0055FF]'}`}>
          <div className="mx-auto px-4 container">
            <Menu
              mode="inline"
              theme={isQuotationPage ? 'light' : 'dark'}
              items={[
                ...navItems.map(item => ({
                  key: item.path,
                  label: item.label,
                })),
                {
                  key: '/apply',
                  label: t('Header.joinUs'),
                },
                {
                  key: '#contact',
                  label: t('Header.contactUs'),
                },
              ]}
              style={{
                fontSize: '1rem',
                color: isQuotationPage ? '#000000' : '#ffffff',
                backgroundColor: isQuotationPage ? 'white' : '#0055FF',
              }}
              onSelect={({ key }) => handleAnchorClick({ key })}
              className={isQuotationPage ? '!bg-white !text-black' : 'white-text-menu !bg-[#0055FF] !text-white'}
            />
          </div>
        </div>
      )}
    </div>
  );
});

LayoutHeader.displayName = 'LayoutHeader';

export default LayoutHeader;
