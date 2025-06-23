import bgImg from '@/assets/images/customization/bg.png';
import fnImg from '@/assets/images/customization/fn.png';
import hbImg from '@/assets/images/customization/hb.png';
import mobileBgImg from '@/assets/images/customization/mobile-bg.png';
import stImg from '@/assets/images/customization/st.png';
import yzImg from '@/assets/images/customization/yz.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import CoreFeatures from '../module-digital-asset/core.tsx';
import Footer from '../module-digital-asset/footer.jsx';
import Safety from '../module-digital-asset/safety.tsx';

function MarketOperation() {
  const { t } = useTranslation();

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('customization.header.title')}
        description={t('customization.header.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <CoreFeatures
        title={t('customization.coreFeatures.title')}
        features={[
          {
            icon: fnImg,
            title: t('customization.coreFeatures.empowerDevelopers.title'),
            description: t('customization.coreFeatures.empowerDevelopers.description'),
          },
          {
            icon: yzImg,
            title: t('customization.coreFeatures.qualityApps.title'),
            description: t('customization.coreFeatures.qualityApps.description'),
          },
          {
            icon: hbImg,
            title: t('customization.coreFeatures.industryPartnership.title'),
            description: t('customization.coreFeatures.industryPartnership.description'),
          },
          {
            icon: stImg,
            title: t('customization.coreFeatures.ecosystemBuilding.title'),
            description: t('customization.coreFeatures.ecosystemBuilding.description'),
          },
        ]}
      />
      <Safety
        title={t('customization.advantages.title')}
        contentTitle={t('customization.advantages.description')}
        contentList={t('customization.advantages.items', { returnObjects: true })}
      />
      <Footer />
    </div>
  );
}

export default MarketOperation;
