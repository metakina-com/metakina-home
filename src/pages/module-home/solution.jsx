import heguiImg from '@/assets/images/home/hegui.png';
import liuchengImg from '@/assets/images/home/liucheng.png';
import mokuaiImg from '@/assets/images/home/mokuai.png';
import shengtaiImg from '@/assets/images/home/shengtai.png';
import shujuImg from '@/assets/images/home/shuju.png';
import zichanImg from '@/assets/images/home/zichan.png';
import SectionTitle from '@/components/SectionTitle.jsx';
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
      icon: zichanImg,
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      key: 'crossBorder',
      title: t('solutions.crossBorder.title'),
      description: t('solutions.crossBorder.description'),
      link: t('solutions.common.learnMore'),
      icon: heguiImg,
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      key: 'compliance',
      title: t('solutions.compliance.title'),
      description: t('solutions.compliance.description'),
      link: t('solutions.common.learnMore'),
      icon: liuchengImg,
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      key: 'ecosystem',
      title: t('solutions.ecosystem.title'),
      description: t('solutions.ecosystem.description'),
      link: t('solutions.common.learnMore'),
      icon: shengtaiImg,
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      key: 'dataFinance',
      title: t('solutions.dataFinance.title'),
      description: t('solutions.dataFinance.description'),
      link: t('solutions.common.learnMore'),
      icon: shujuImg,
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      key: 'modular',
      title: t('solutions.modular.title'),
      description: t('solutions.modular.description'),
      link: t('solutions.common.learnMore'),
      icon: mokuaiImg,
      gradient: 'from-gray-800 to-gray-900',
    },
  ];

  return (
    <div className="bg-[#EEF4FA] md:pt-[72px]">
      <div className="m-x-auto w-[85vw] pb-24 pt-14 lg:px-24 md:px-16 md:pt-10">
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          {/* <h1 className="mb-4 text-3xl text-black font-bold lg:text-5xl md:text-4xl">
            {t('solutions.sectionTitle')}
          </h1>
          <p className="text-lg text-gray-600 lg:text-xl">
            {t('solutions.mainTitle')}
          </p> */}
          <SectionTitle title={t('solutions.sectionTitle')} mainTitle={t('solutions.mainTitle')} />

        </div>

        {/* 解决方案网格 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {solutions.map(solution => (
            <div
              key={solution.key}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-101 ${
                'bg-white text-gray-800 hover:bg-gradient-to-br! hover:from-[#2F4EE8]! hover:to-[#0066FF]! hover:text-white!'
              }`}
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F0FF 100%)',
              }}
            >
              {/* 图标 */}
              <div className="mb-6 block group-hover:hidden">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  className="h-12 w-12 object-contain"
                  preview={false}
                />
              </div>

              {/* 卡片内容 */}
              <div className="relative">
                <h3 className="mb-4 text-xl font-semibold md:text-2xl">
                  {solution.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed opacity-90">
                  {solution.description}
                </p>
                <div className="flex items-center justify-start">
                  <a
                    href="#"
                    className="inline-block hidden rounded-full bg-white px-6 py-2 text-sm text-[#0055FF] font-medium transition-all duration-300 group-hover:block"
                  >
                    {solution.link}
                  </a>
                </div>
              </div>

              {/* 悬停效果装饰 */}
              <div className="absolute h-24 w-24 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 -right-4 -top-4 group-hover:opacity-100" />
              <div className="absolute h-16 w-16 rounded-full bg-white/5 opacity-0 transition-opacity duration-500 -bottom-4 -left-4 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
