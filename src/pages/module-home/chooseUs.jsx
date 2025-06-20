import chooseBgImg from '@/assets/images/home/choose-bg.png';
import fengfuchenggongImg from '@/assets/images/home/fengfuchenggong.png';
import jinrongheguiImg from '@/assets/images/home/jinronghegui.png';
import lingxianjishuImg from '@/assets/images/home/lingxianjishu.png';
import shenduheguiImg from '@/assets/images/home/shenduhegui.png';
import shengtaiwangluoImg from '@/assets/images/home/shengtaiwangluo.png';
import tuanduiImg from '@/assets/images/home/tuandui.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';

// 特色点数据配置
function getFeaturesData(t) {
  return [
    {
      id: 'finance-compliance',
      title: t('chooseUs.features.financeCompliance.title'),
      description: t('chooseUs.features.financeCompliance.description'),
      icon: jinrongheguiImg,
      alt: t('chooseUs.features.financeCompliance.title'),
      position: 'absolute right-[63%] top-[16%] flex items-center text-center',
      layout: 'left', // 文本在左，图标在右
      mobilePosition: ' w-full',
    },
    {
      id: 'professional-team',
      title: t('chooseUs.features.professionalTeam.title'),
      description: t('chooseUs.features.professionalTeam.description'),
      icon: tuanduiImg,
      alt: t('chooseUs.features.professionalTeam.title'),
      position: 'absolute left-[63%] top-[16%] flex items-center text-center',
      layout: 'right', // 图标在左，文本在右
      mobilePosition: 'relative left-[30%] w-[75%]',
    },
    {
      id: 'risk-control',
      title: t('chooseUs.features.riskControl.title'),
      description: t('chooseUs.features.riskControl.description'),
      icon: shenduheguiImg,
      alt: t('chooseUs.features.riskControl.title'),
      position: 'absolute bottom-[50%] right-[68%] flex items-center text-center',
      layout: 'left',
      mobilePosition: 'relative left-[50%] top-[24%] w-[54%]',
    },
    {
      id: 'ecosystem-network',
      title: t('chooseUs.features.ecosystemNetwork.title'),
      description: t('chooseUs.features.ecosystemNetwork.description'),
      icon: shengtaiwangluoImg,
      alt: t('chooseUs.features.ecosystemNetwork.title'),
      position: 'absolute bottom-[50%] left-[68%] flex items-center text-center',
      layout: 'right',
      mobilePosition: 'relative left-[50%] top-[24%] w-[54%]',
    },
    {
      id: 'advanced-technology',
      title: t('chooseUs.features.advancedTechnology.title'),
      description: t('chooseUs.features.advancedTechnology.description'),
      icon: lingxianjishuImg,
      alt: t('chooseUs.features.advancedTechnology.title'),
      position: 'absolute bottom-[28%] right-[63%] flex items-center text-center',
      layout: 'left',
      mobilePosition: 'relative left-[30%] w-[75%]',
    },
    {
      id: 'success-cases',
      title: t('chooseUs.features.successCases.title'),
      description: t('chooseUs.features.successCases.description'),
      icon: fengfuchenggongImg,
      alt: t('chooseUs.features.successCases.title'),
      position: 'absolute bottom-[28%] left-[63%] flex items-center text-center',
      layout: 'right',
      mobilePosition: 'w-full',
    },
  ];
}

// 样式常量
const STYLES = {
  container: 'bg-white md:pt-[72px]',
  innerContainer: 'mx-auto w-[85vw] px-0 pt-10 lg:px-24 md:px-16',
  backgroundContainer: 'bg-position-[center_top_6rem] relative h-[600px] w-full bg-contain bg-no-repeat',
  iconContainer: 'mb-2 h-12 min-w-12 flex items-center justify-center rounded-full bg-blue-100',
  icon: 'h-8 w-8',
  title: 'mb-1 text-2xl text-gray-800 font-semibold',
  description: 'min-w-[243px] text-sm text-gray-600',
};

// 渲染单个特色点组件
function FeatureItem({ feature }) {
  const isLeftLayout = feature.layout === 'left';

  return (
    <div className={feature.position}>
      {isLeftLayout
        ? (
            <>
              <div className="mr-4 flex flex-col items-end text-right">
                <h3 className={STYLES.title}>{feature.title}</h3>
                <p className={STYLES.description}>{feature.description}</p>
              </div>
              <div className={STYLES.iconContainer}>
                <img src={feature.icon} alt={feature.alt} className={STYLES.icon} />
              </div>
            </>
          )
        : (
            <>
              <div className={STYLES.iconContainer}>
                <img src={feature.icon} alt={feature.alt} className={STYLES.icon} />
              </div>
              <div className="ml-4 flex flex-col items-start text-left">
                <h3 className={STYLES.title}>{feature.title}</h3>
                <p className={STYLES.description}>{feature.description}</p>
              </div>
            </>
          )}
    </div>
  );
}

export default function ChooseUs() {
  const { t } = useTranslation();
  const featuresData = getFeaturesData(t);

  const renderDesktopVersion = () => {
    return (
      <div
        className={`${STYLES.backgroundContainer} hidden md:block`}
        style={{
          backgroundImage: `url(${chooseBgImg})`,
          backgroundSize: '25%',
        }}
      >
        {/* 渲染所有特色点 */}
        {featuresData.map(feature => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    );
  };

  const renderMobileVersion = () => {
    return (
      <div className="block md:hidden">
        {/* 移动端背景容器 */}
        <div className="relative h-full min-h-[80vh]">
          {/* 中央六边形背景 */}
          <div className="absolute h-full w-full -left-[7.5vw]">
            <div
              className="h-full w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${chooseBgImg})`,
                backgroundSize: '140%',
                backgroundPosition: '160% 41%',
              }}
            />
          </div>

          {/* 特色点列表 */}
          <div className="relative z-10 min-h-[80vh] flex flex-col justify-between pb-10 space-y-12">
            {featuresData.map(feature => (
              <div key={feature.id} className={`flex items-start space-x-4 ${feature.mobilePosition} !m-2`}>
                {/* 图标容器 */}
                <div className="m-0 flex-shrink-0">
                  <div className={`${STYLES.iconContainer} w-[37px] h-[37px]`}>
                    <img src={feature.icon} alt={feature.alt} className="h-10 w-10" />
                  </div>
                </div>

                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="mb-2 text-base text-gray-800 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={STYLES.container}>
      <div className={STYLES.innerContainer}>
        {/* 标题部分 */}
        <SectionTitle title={t('chooseUs.title')} />
        {/* 移动端 */}
        {renderMobileVersion()}
        {/* 桌面端 */}
        {renderDesktopVersion()}
      </div>
    </div>
  );
}
