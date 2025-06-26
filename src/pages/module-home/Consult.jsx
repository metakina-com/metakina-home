import consultBgImg from '@/assets/images/home/consult-bg.png';
import consultMobileBgImg from '@/assets/images/home/mobile-home-bg.png';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Consult() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div
      style={{
        background: `url(${isMobile ? consultMobileBgImg : consultBgImg}) no-repeat center center / cover`,
      }}
      className="mt-[72px]"
    >
      <div className="m-x-auto h-[calc(100vh-72px)] w-[85vw] flex items-center px-0 text-white lg:px-24 md:px-16">
        <div className="max-md:absolute max-md:top-[3rem]">
          {/* Logo */}
          <h1 className="mb-10 text-[3rem] text-white font-bold md:text-[6rem]">
            {t('Consult.logo')}
          </h1>

          {/* 主标题 */}
          <h2 className="mb-8 text-xl leading-tight md:text-[3rem]">
            {t('Consult.title')}
          </h2>

          {/* 副标题 */}
          <p className="mb-12 w-[60%] text-xs text-gray-300 md:w-[31vw] md:text-2xl">
            {t('Consult.subtitle')}
          </p>

          {/* 申请按钮 */}
          <Button
            type="primary"
            size="large"
            className="transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(180deg, #0055FF 0%, #2F4EE8 100%)',
              border: 'none',
              height: 'auto',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: '8px',
            }}
            onClick={() => navigate('/apply')}
          >
            {t('Consult.button')}
          </Button>
        </div>
      </div>
    </div>
  );
}
