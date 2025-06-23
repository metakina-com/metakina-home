import bgImg from '@/assets/images/asset-financialization/bg.png';
import chanpinImg from '@/assets/images/asset-financialization/chanpin.png';
import heguiImg from '@/assets/images/asset-financialization/hegui.png';
import mobileBgImg from '@/assets/images/asset-financialization/mobile-bg.png';
import pingguImg from '@/assets/images/asset-financialization/pinggu.png';
import ysbhImg from '@/assets/images/asset-financialization/ysbh.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import CoreFeatures from '../module-digital-asset/core.tsx';
import Footer from '../module-digital-asset/footer.jsx';
import Safety from '../module-digital-asset/safety.tsx';
import CoreStrategy from './coreStrategy.jsx';

function AssetFinancialization() {
  const { t } = useTranslation();

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('assetFinancialization.header.title')}
        description={t('assetFinancialization.header.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <CoreFeatures
        title={t('assetFinancialization.coreFeatures.title')}
        features={[
          {
            icon: pingguImg,
            title: t('assetFinancialization.coreFeatures.items.0.title'),
            description: t('assetFinancialization.coreFeatures.items.0.description'),
          },
          {
            icon: chanpinImg,
            title: t('assetFinancialization.coreFeatures.items.1.title'),
            description: t('assetFinancialization.coreFeatures.items.1.description'),
          },
          {
            icon: heguiImg,
            title: t('assetFinancialization.coreFeatures.items.2.title'),
            description: t('assetFinancialization.coreFeatures.items.2.description'),
          },
          {
            icon: ysbhImg,
            title: t('assetFinancialization.coreFeatures.items.3.title'),
            description: t('assetFinancialization.coreFeatures.items.3.description'),
          },
        ]}
      />
      <CoreStrategy />
      <Safety
        title={t('assetFinancialization.safety.title')}
        contentTitle={t('assetFinancialization.safety.contentTitle')}
        contentList={[
          t('assetFinancialization.safety.contentList.0'),
          t('assetFinancialization.safety.contentList.1'),
          t('assetFinancialization.safety.contentList.2'),
          t('assetFinancialization.safety.contentList.3'),
        ]}
      />
      <Footer />
    </div>
  );
}

export default AssetFinancialization;
