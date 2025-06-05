import solution1Img from '@/assets/images/home/solution1.png';
import solution2Img from '@/assets/images/home/solution2.png';
import solution3Img from '@/assets/images/home/solution3.png';
import solution4Img from '@/assets/images/home/solution4.png';
import solution5Img from '@/assets/images/home/solution5.png';
import solution6Img from '@/assets/images/home/solution6.png';
import solutionBgImg from '@/assets/images/home/solution-bg.png';
import { Image } from 'antd';
import { useTranslation } from 'react-i18next';

export default function RWASolutionsPage() {
  const { t } = useTranslation();

  const solutions = [
    {
      key: 'assetDigital',
      title: t('solutions.assetDigital.title'),
      description: t('solutions.assetDigital.description'),
      link: t('solutions.common.learnMore'),
      icon: solution1Img,
      gradient: 'from-[#D900FF] to-[#8B00FF]',
    },
    {
      key: 'crossBorder',
      title: t('solutions.crossBorder.title'),
      description: t('solutions.crossBorder.description'),
      link: t('solutions.common.learnMore'),
      icon: solution2Img,
      gradient: 'from-[#006EFF] to-[#0099FF]',
    },
    {
      key: 'compliance',
      title: t('solutions.compliance.title'),
      description: t('solutions.compliance.description'),
      link: t('solutions.common.learnMore'),
      icon: solution3Img,
      gradient: 'from-[#D900FF] to-[#FF00FF]',
    },
    {
      key: 'ecosystem',
      title: t('solutions.ecosystem.title'),
      description: t('solutions.ecosystem.description'),
      link: t('solutions.common.learnMore'),
      icon: solution4Img,
      gradient: 'from-[#2F4EE8] to-[#6B7FFF]',
    },
    {
      key: 'dataFinance',
      title: t('solutions.dataFinance.title'),
      description: t('solutions.dataFinance.description'),
      link: t('solutions.common.learnMore'),
      icon: solution5Img,
      gradient: 'from-[#8B00FF] to-[#D900FF]',
    },
    {
      key: 'modular',
      title: t('solutions.modular.title'),
      description: t('solutions.modular.description'),
      link: t('solutions.common.learnMore'),
      icon: solution6Img,
      gradient: 'from-[#006EFF] to-[#2F4EE8]',
    },
  ];

  return (
    <div className="m-x-auto w-[85vw] px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
      <div className="w-full">
        {/* 标题区域 */}
        <div className="mb-16 text-right text-[#D900FF]">
          <h1 className="mb-4 text-3xl font-bold lg:text-5xl md:text-4xl">
            {t('solutions.sectionTitle')}
          </h1>
          <h1 className="text-3xl font-bold lg:text-5xl md:text-4xl">
            {t('solutions.mainTitle')}
          </h1>
        </div>

        {/* 解决方案网格 */}
        <div className="grid grid-cols-1 gap-x-40 gap-y-10 md:grid-cols-2">
          {solutions.map(solution => (
            <div
              key={solution.key}
              className="group relative cursor-pointer"
              style={{
                background: `url(${solutionBgImg}) no-repeat center center/cover`,
                backgroundSize: '100% 100%',
              }}
            >

              {/* 卡片内容 */}
              <div className="relative flex items-start justify-between p-8 md:p-14">
                <div className="flex-1 pr-4">
                  <h3 className="mb-10 flex items-end justify-between text-xl text-white font-semibold md:text-3xl">
                    {solution.title}
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      className="h-[2rem] md:h-[3rem]"
                    />
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <p className="text-right">
                    <a
                      href="#"
                      className="text-sm text-[#2F4EE8] font-medium transition-colors duration-300"
                    >
                      {solution.link}
                      {' '}
                      →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
