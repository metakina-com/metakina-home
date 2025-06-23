import bgImg from '@/assets/images/market-operation/bg.png';
import gxkzImg from '@/assets/images/market-operation/gxkz.png';
import gylImg from '@/assets/images/market-operation/gyl.png';
import hxhglnImg from '@/assets/images/market-operation/hxln.png';
import jinrongImg from '@/assets/images/market-operation/jinrong.png';
import jsbsImg from '@/assets/images/market-operation/jsbs.png';
import kuajingImg from '@/assets/images/market-operation/kuajing.png';
import mobileBgImg from '@/assets/images/market-operation/mobile-bg.png';
import numberImg from '@/assets/images/market-operation/number.png';
import yhcbImg from '@/assets/images/market-operation/yhcb.png';
import zylhImg from '@/assets/images/market-operation/zylh.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import Footer from '../module-digital-asset/footer.jsx';
import DigitalAssetAdvantages from '../module-digital-asset/number.tsx';
import Compliance from '../module-process-assurance/compliance.tsx';

function MarketOperation() {
  const { t } = useTranslation();

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('marketOperation.header.title')}
        description={t('marketOperation.header.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <Compliance
        className="mt-15"
        img={hxhglnImg}
        dataList={[
          {
            title: t('marketOperation.corePhilosophy.items.0.title'),
            description: t('marketOperation.corePhilosophy.items.0.description'),
          },
          {
            title: t('marketOperation.corePhilosophy.items.1.title'),
            description: t('marketOperation.corePhilosophy.items.1.description'),
          },
        ]}
        title={t('marketOperation.corePhilosophy.title')}
      />
      <DigitalAssetAdvantages
        title={t('marketOperation.advantages.title')}
        advantages={[
          {
            icon: jsbsImg,
            title: t('marketOperation.advantages.items.0.title'),
            description: t('marketOperation.advantages.items.0.description'),
          },
          {
            icon: yhcbImg,
            title: t('marketOperation.advantages.items.1.title'),
            description: t('marketOperation.advantages.items.1.description'),
          },
          {
            icon: zylhImg,
            title: t('marketOperation.advantages.items.2.title'),
            description: t('marketOperation.advantages.items.2.description'),
          },
          {
            icon: gxkzImg,
            title: t('marketOperation.advantages.items.3.title'),
            description: t('marketOperation.advantages.items.3.description'),
          },
        ]}
      />
      <DigitalAssetAdvantages
        title={t('marketOperation.applications.title')}
        advantages={[
          {
            icon: jinrongImg,
            title: t('marketOperation.applications.items.0.title'),
            description: t('marketOperation.applications.items.0.description'),
          },
          {
            icon: numberImg,
            title: t('marketOperation.applications.items.1.title'),
            description: t('marketOperation.applications.items.1.description'),
          },
          {
            icon: gylImg,
            title: t('marketOperation.applications.items.2.title'),
            description: t('marketOperation.applications.items.2.description'),
          },
          {
            icon: kuajingImg,
            title: t('marketOperation.applications.items.3.title'),
            description: t('marketOperation.applications.items.3.description'),
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default MarketOperation;
