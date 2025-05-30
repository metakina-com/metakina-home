import solutionBgImg from "@/public/home/solution-bg.png";
import solution1Img from "@/public/home/solution1.png";
import solution2Img from "@/public/home/solution2.png";
import solution3Img from "@/public/home/solution3.png";
import solution4Img from "@/public/home/solution4.png";
import solution5Img from "@/public/home/solution5.png";
import solution6Img from "@/public/home/solution6.png";
import { useTranslations } from 'next-intl';



export default function RWASolutionsPage() {
  const t = useTranslations('solutions');

  const solutions = [
    {
      key: 'assetDigital',
      title: t('assetDigital.title'),
      description: t('assetDigital.description'),
      link: t('common.learnMore'),
      icon: solution1Img,
      gradient: 'from-[#D900FF] to-[#8B00FF]'
    },
    {
      key: 'crossBorder',
      title: t('crossBorder.title'),
      description: t('crossBorder.description'),
      link: t('common.learnMore'),
      icon: solution2Img,
      gradient: 'from-[#006EFF] to-[#0099FF]'
    },
    {
      key: 'compliance',
      title: t('compliance.title'),
      description: t('compliance.description'),
      link: t('common.learnMore'),
      icon: solution3Img,
      gradient: 'from-[#D900FF] to-[#FF00FF]'
    },
    {
      key: 'ecosystem',
      title: t('ecosystem.title'),
      description: t('ecosystem.description'),
      link: t('common.learnMore'),
      icon: solution4Img,
      gradient: 'from-[#2F4EE8] to-[#6B7FFF]'
    },
    {
      key: 'dataFinance',
      title: t('dataFinance.title'),
      description: t('dataFinance.description'),
      link: t('common.learnMore'),
      icon: solution5Img,
      gradient: 'from-[#8B00FF] to-[#D900FF]'
    },
    {
      key: 'modular',
      title: t('modular.title'),
      description: t('modular.description'),
      link: t('common.learnMore'),
      icon: solution6Img,
      gradient: 'from-[#006EFF] to-[#2F4EE8]'
    }
  ];

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24 text-white ">
      <div className="w-full">
        {/* 标题区域 */}
        <div className="text-right mb-16 text-[#D900FF]">
          <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-4 " >
            {t('sectionTitle')}
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('mainTitle')}
          </h1>
        </div>

        {/* 解决方案网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-10">
          {solutions.map((solution, index) => (
            <div
              key={solution.key}
              className="relative group cursor-pointer"
              style={{
                background: `url(${solutionBgImg.src}) `,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
              }}
            >

              {/* 卡片内容 */}
              <div className="relative p-8 md:p-14 flex justify-between items-start">
                <div className="flex-1 pr-4 " >
                  <h3 className="text-xl md:text-3xl font-semibold mb-3 text-white flex justify-between items-end">
                    {solution.title}
                    <img
                      src={solution.icon.src}
                      alt={solution.title}
                      className="h-[3rem] md:h-[4rem] "
                    />
                  </h3>
                  <p className=" text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <p className=" text-right">
                    <a
                      href="#"
                      className="text-sm text-[#2F4EE8] font-medium transition-colors duration-300"
                    >
                      {solution.link} →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}