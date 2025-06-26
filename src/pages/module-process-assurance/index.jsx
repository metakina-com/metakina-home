import bgImg from '@/assets/images/process-assurance/bg.png';
import hxhglnImg from '@/assets/images/process-assurance/hxhgln.png';
import mobileBgImg from '@/assets/images/process-assurance/mobile-bg.png';
import suoImg from '@/assets/images/process-assurance/suo.png';
import yinsiImg from '@/assets/images/process-assurance/yinsi.png';
import SonHeader from '@/components/SonHeader.jsx';
import { useTranslation } from 'react-i18next';
import Footer from '../module-digital-asset/Footer.jsx';
import Compliance from './Compliance.tsx';

function ProcessAssurance() {
  const { t } = useTranslation();

  const dataList = t('processAssurance.coreCompliance.items', { returnObjects: true });
  const DataSecurity = t('processAssurance.dataSecurity.items', { returnObjects: true });
  const KycAmlKybSystem = t('processAssurance.kycAmlKyb.items', { returnObjects: true });

  return (
    <div className="mt-[72px]">
      <SonHeader
        title={t('processAssurance.title')}
        description={t('processAssurance.description')}
        backgroundImage={bgImg}
        mobileBackgroundImage={mobileBgImg}
      />
      <Compliance
        className="mt-15"
        img={hxhglnImg}
        dataList={dataList}
        title={t('processAssurance.coreCompliance.title')}
      />
      <Compliance
        className="mt-15"
        img={suoImg}
        dataList={KycAmlKybSystem}
        title={t('processAssurance.kycAmlKyb.title')}
        reverse
      />
      <Compliance
        className="mt-15"
        img={yinsiImg}
        dataList={DataSecurity}
        title={t('processAssurance.dataSecurity.title')}
      />
      <Footer />
    </div>
  );
}

export default ProcessAssurance;
