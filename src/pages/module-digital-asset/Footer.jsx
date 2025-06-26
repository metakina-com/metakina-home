import bgImg from '@/assets/images/digital-asset/BG-footer.png';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export default function DigitalAssetFooter() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[471px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
      <p className="text-center text-[2rem] text-white md:text-[48px]">{t('digitalAsset.footer.title')}</p>
      <p className="my-10 text-center text-[1rem] text-white md:text-[32px]">{t('digitalAsset.footer.description')}</p>
      <Button type="primary" className="h-[50px] min-w-[170px] rounded-4 bg-white text-[1rem] text-[#0055FF] md:h-[70px] md:w-[300px] md:text-[32px]">{t('digitalAsset.footer.button')}</Button>
    </div>
  );
}
