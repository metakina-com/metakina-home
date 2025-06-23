import bg1Img from '@/assets/images/asset-financialization/Background (1).png';
import bg2Img from '@/assets/images/asset-financialization/Background (2).png';
import bg3Img from '@/assets/images/asset-financialization/Background (3).png';
import bg0Img from '@/assets/images/asset-financialization/Background.png';
import hxyyclImg from '@/assets/images/asset-financialization/hxyycl.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';

function CoreStrategy() {
  const { t } = useTranslation();

  const strategies = [
    {
      icon: bg0Img,
      title: t('assetFinancialization.coreStrategy.items.0.title'),
      description: t('assetFinancialization.coreStrategy.items.0.description'),
    },
    {
      icon: bg1Img,
      title: t('assetFinancialization.coreStrategy.items.1.title'),
      description: t('assetFinancialization.coreStrategy.items.1.description'),
    },
    {
      icon: bg3Img,
      title: t('assetFinancialization.coreStrategy.items.2.title'),
      description: t('assetFinancialization.coreStrategy.items.2.description'),
    },
    {
      icon: bg2Img,
      title: t('assetFinancialization.coreStrategy.items.3.title'),
      description: t('assetFinancialization.coreStrategy.items.3.description'),
    },
  ];

  return (
    <div className="mx-auto mb-20 w-[80vw] bg-white">
      <SectionTitle title={t('assetFinancialization.coreStrategy.title')} className="mb-16" />

      <div className="flex flex-col gap-12 md:flex-row">
        {/* 左侧图表区域 */}
        <div className="w-full md:w-1/2">
          <div
            className="h-96 w-full rounded-lg bg-cover"
            style={{ backgroundImage: `url(${hxyyclImg})` }}
          >
          </div>
        </div>

        {/* 右侧功能模块 */}
        <div className="flex flex-1 flex-col justify-between md:w-1/2">
          {strategies.map((strategy, index) => (
            <div key={index} className="flex items-start max-md:mb-4 space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 flex items-center justify-center rounded-full">
                  <img src={strategy.icon} alt={strategy.title} className="object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl text-gray-900 font-semibold">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreStrategy;
