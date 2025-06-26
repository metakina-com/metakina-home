import bgImg from '@/assets/images/cross-border-funding/bg.png';
import jdfxImg from '@/assets/images/cross-border-funding/jdfx.png';
import mobileBgImg from '@/assets/images/cross-border-funding/mobile-bg.png';
import rzxlImg from '@/assets/images/cross-border-funding/rzxl.png';
import tkzyImg from '@/assets/images/cross-border-funding/tkzy.png';
import ldxImg from '@/assets/images/digital-asset/ldx.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import Footer from '../module-digital-asset/Footer.jsx';
import Number from '../module-digital-asset/Number.tsx';
import Safety from '../module-digital-asset/Safety.tsx';
import Structure from './Structure.jsx';

function CrossBorderFunding() {
  const { t } = useTranslation();

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('crossBorderFunding.header.title')}
        description={t('crossBorderFunding.header.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <Structure />
      <Number
        title={t('crossBorderFunding.advantages.title')}
        advantages={[
          {
            icon: rzxlImg,
            title: t('crossBorderFunding.advantages.items.0.title'),
            description: t('crossBorderFunding.advantages.items.0.description'),
          },
          {
            icon: jdfxImg,
            title: t('crossBorderFunding.advantages.items.1.title'),
            description: t('crossBorderFunding.advantages.items.1.description'),
          },
          {
            icon: tkzyImg,
            title: t('crossBorderFunding.advantages.items.2.title'),
            description: t('crossBorderFunding.advantages.items.2.description'),
          },
          {
            icon: ldxImg,
            title: t('crossBorderFunding.advantages.items.3.title'),
            description: t('crossBorderFunding.advantages.items.3.description'),
          },
        ]}
      />
      <Safety
        title={t('crossBorderFunding.compliance.title')}
        contentTitle={t('crossBorderFunding.compliance.contentTitle')}
        contentList={[
          t('crossBorderFunding.compliance.contentList.0'),
          t('crossBorderFunding.compliance.contentList.1'),
          t('crossBorderFunding.compliance.contentList.2'),
          t('crossBorderFunding.compliance.contentList.3'),
        ]}
      />
      <Footer />
    </div>
  );
}

export default CrossBorderFunding;
