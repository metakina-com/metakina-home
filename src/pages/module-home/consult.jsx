// 修复图片导入路径，使用相对路径
import aImg from '@/assets/images/home/a.png';
import bImg from '@/assets/images/home/b.png';
import eImg from '@/assets/images/home/e.png';
import hImg from '@/assets/images/home/h.png';
import pImg from '@/assets/images/home/p.png';
import sImg from '@/assets/images/home/s.png';
import { Button, Image } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Consult() {
  const { t } = useTranslation();

  const cooperation = [
    {
      icon: eImg,
      title: 'Consult.Ethereum',
    },
    {
      icon: pImg,
      title: 'Consult.Polygon',
    },
    {
      icon: aImg,
      title: 'Consult.Avalanche',
    },
    {
      icon: bImg,
      title: 'Consult.BNB Chain',
    },
    {
      icon: sImg,
      title: 'Consult.Solana',
    },
    {
      icon: hImg,
      title: 'Consult.Hyperledger',
    },
  ];

  return (
    <div>
      <div className="m-x-auto h-[80vh] w-[85vw] flex items-center px-8 pt-32 text-white lg:px-24 md:px-16">
        <div>
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-4xl text-[#D900FF] font-bold md:text-5xl">
              {t('Consult.logo')}
            </h1>
          </div>

          {/* 主标题 */}
          <h2 className="mb-8 text-4xl leading-tight lg:text-6xl md:text-5xl">
            {t('Consult.title')}
          </h2>

          {/* 副标题 */}
          <p className="mb-12 text-lg text-gray-300 md:text-xl">
            {t('Consult.subtitle')}
          </p>

          {/* 申请按钮 */}
          <Button
            type="primary"
            size="large"
            className="transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(180deg, #D900FF 0%, #2F4EE8 80%, #006EFF 100%)',
              boxShadow: '0 4px 20px rgba(217, 0, 255, 0.3)',
              border: 'none',
              height: 'auto',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(217, 0, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(217, 0, 255, 0.3)';
            }}
          >
            {t('Consult.button')}
          </Button>

        </div>
      </div>
      <div className="m-x-auto w-[85vw] flex flex-wrap justify-between px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
        {
          cooperation.map((item, index) => (
            <div key={`cooperation-${index}`} className="mb-8 flex items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                preview={false}
                style={{ objectFit: 'contain' }}
              />
              <p className="ml-2 text-lg font-bold">{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
