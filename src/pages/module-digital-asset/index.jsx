import AIImg from '@/assets/images/digital-asset/AI.png';
import aimImg from '@/assets/images/digital-asset/aim.png';
import bgImg from '@/assets/images/digital-asset/bg.png';
import fengeImg from '@/assets/images/digital-asset/fenge.png';
import ldxImg from '@/assets/images/digital-asset/ldx.png';
import mobileBgImg from '@/assets/images/digital-asset/mobile-bg.png';
import tgxlImg from '@/assets/images/digital-asset/tgxl.png';
import tmdImg from '@/assets/images/digital-asset/tmd.png';
import tuBiao_chakanxmlImg from '@/assets/images/digital-asset/tuBiao_chakanxml.png';
import znhyImg from '@/assets/images/digital-asset/znhy.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import CoreFeatures from './Core.tsx';
import DigitalAssetFooter from './Footer.jsx';
import DigitalAssetAdvantages from './Number.tsx';
import Safety from './Safety.tsx';

function DigitalAsset() {
  const { t } = useTranslation();

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('digitalAsset.header.title')}
        description={t('digitalAsset.header.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <CoreFeatures
        title={t('digitalAsset.coreFeatures.title')}
        features={[
          {
            icon: AIImg,
            title: t('digitalAsset.coreFeatures.aiEvaluation.title'),
            description: t('digitalAsset.coreFeatures.aiEvaluation.description'),
          },
          {
            icon: aimImg,
            title: t('digitalAsset.coreFeatures.tokenomicsDesign.title'),
            description: t('digitalAsset.coreFeatures.tokenomicsDesign.description'),
          },
          {
            icon: znhyImg,
            title: t('digitalAsset.coreFeatures.smartContract.title'),
            description: t('digitalAsset.coreFeatures.smartContract.description'),
          },
          {
            icon: tuBiao_chakanxmlImg,
            title: t('digitalAsset.coreFeatures.assetOnchain.title'),
            description: t('digitalAsset.coreFeatures.assetOnchain.description'),
          },
        ]}
      />
      <DigitalAssetAdvantages
        title={t('digitalAsset.advantages.title')}
        advantages={[
          {
            icon: ldxImg,
            title: t('digitalAsset.advantages.liquidity.title'),
            description: t('digitalAsset.advantages.liquidity.description'),
          },
          {
            icon: tmdImg,
            title: t('digitalAsset.advantages.transparency.title'),
            description: t('digitalAsset.advantages.transparency.description'),
          },
          {
            icon: fengeImg,
            title: t('digitalAsset.advantages.divisibility.title'),
            description: t('digitalAsset.advantages.divisibility.description'),
          },
          {
            icon: tgxlImg,
            title: t('digitalAsset.advantages.efficiency.title'),
            description: t('digitalAsset.advantages.efficiency.description'),
          },
        ]}
      />
      <Safety
        title={t('digitalAsset.safety.title')}
        contentTitle={t('digitalAsset.safety.description')}
        contentList={t('digitalAsset.safety.items', { returnObjects: true })}
      />
      <DigitalAssetFooter />
    </div>
  );
}

export default DigitalAsset;
