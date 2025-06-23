import jiegouImg from '@/assets/images/cross-border-funding/jiegou.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';

function Structure() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-[90vw] px-4 py-10 sm:w-[80vw] sm:px-0 sm:py-20">
      <SectionTitle title={t('crossBorderFunding.structure.title')} />

      <div className="mt-8 flex flex-col gap-6 sm:mt-16 lg:flex-row lg:gap-12 sm:gap-8">
        {/* 图片区域 */}
        <div className="w-full flex justify-center lg:w-auto lg:justify-start">
          <img
            src={jiegouImg}
            alt={t('crossBorderFunding.structure.title')}
            className="h-auto max-w-md w-full rounded-lg object-cover lg:h-[399px] lg:max-w-none sm:max-w-lg"
          />
        </div>

        {/* 内容区域 */}
        <div className="flex flex-1 flex-col gap-4 lg:justify-between sm:gap-6">
          {/* 香港有限合伙基金 */}
          <div className="cursor-pointer rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:bg-blue-600 sm:p-6 hover:text-white">
            <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">{t('crossBorderFunding.structure.lpf.title')}</h3>
            <p className="text-sm leading-relaxed sm:text-base">
              {t('crossBorderFunding.structure.lpf.description')}
            </p>
          </div>

          {/* 陕西合格境外有限合伙人 */}
          <div className="cursor-pointer rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:bg-blue-600 sm:p-6 hover:text-white">
            <h3 className="mb-2 text-lg text-gray-800 font-bold sm:mb-3 sm:text-xl hover:text-white">{t('crossBorderFunding.structure.qflp.title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed sm:text-base hover:text-white">
              {t('crossBorderFunding.structure.qflp.description')}
            </p>
          </div>

          {/* 定制化结构设计 */}
          <div className="cursor-pointer rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:bg-blue-600 sm:p-6 hover:text-white">
            <h3 className="mb-2 text-lg text-gray-800 font-bold sm:mb-3 sm:text-xl hover:text-white">{t('crossBorderFunding.structure.custom.title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed sm:text-base hover:text-white">
              {t('crossBorderFunding.structure.custom.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structure;
