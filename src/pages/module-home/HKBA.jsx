import hkbaImage from '@/assets/images/home/hkba.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { Image } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHkbaData } from './json/Hkba.js';

function HKBAPage() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 获取国际化数据并按每3人一组分组
  const groupedData = useMemo(() => {
    const hkbaData = getHkbaData(i18n.language);
    const groups = [];

    for (let i = 0; i < hkbaData.length; i += 3) {
      groups.push(hkbaData.slice(i, i + 3));
    }

    return groups;
  }, [i18n.language]);

  // 上一页
  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? groupedData.length - 1 : prev - 1);
  };

  // 下一页
  const handleNext = () => {
    setCurrentIndex(prev => prev === groupedData.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="mt-[72px] lg:px-12 md:px-4 md:px-8 md:pb-20">
      <section className="mx-auto w-[80vw]">
        <div className="text-center md:py-16">
          <SectionTitle
            title={t('HKBA.title')}
            description={t('HKBA.description')}
          />
        </div>

        {/* 轮播图 */}
        <div className="mb-8">
          {/* 上部分：HKBA图标和控制按钮 */}
          <div className="mb-8 flex items-center justify-between">
            {/* 左边：HKBA图标和核心成员文字 */}
            <div className="flex items-center gap-4">
              <img src={hkbaImage} alt="HKBA" className="h-12 md:h-16" />
              <div className="h-5px w-5px rounded-full bg-black"></div>
              <span className="text-[18px] text-gray-800 font-medium md:text-[30px] md:text-xl">
                {t('HKBA.coreMembers')}
              </span>
            </div>

            {/* 右边：左右控制按钮 */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="group h-40px w-40px flex cursor-pointer items-center justify-center border-2 border-[#DBDBDB] rounded-full transition-colors hover:border-[#0357FF]"
                aria-label={t('HKBA.navigation.prev')}
              >
                <svg className="h-6 w-6 text-[#DBDBDB] group-hover:text-[#0357FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="group h-40px w-40px flex cursor-pointer items-center justify-center border-2 border-[#DBDBDB] rounded-full transition-colors hover:border-[#0357FF]"
                aria-label={t('HKBA.navigation.next')}
              >
                <svg className="h-6 w-6 text-[#DBDBDB] group-hover:text-[#0357FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 下部分：轮播区域 - 显示当前组的三个人物信息 */}
          <div className="space-y-4">
            {groupedData[currentIndex] && (
              <>
                {groupedData[currentIndex].map((person, index) => {
                  // 中间的人物（index === 1）使用蓝色背景
                  const isMiddlePerson = index === 1;
                  const bgClass = isMiddlePerson ? 'bg-[#0357FF]' : 'bg-white';
                  const textClass = isMiddlePerson ? 'text-white' : 'text-gray-900';
                  const subTextClass = isMiddlePerson ? 'text-white/90' : 'text-gray-600';
                  const introTextClass = isMiddlePerson ? 'text-white/80' : 'text-gray-700';
                  const bgIMg = isMiddlePerson ? 'bg-white' : 'bg-[#333333]';

                  return (
                    <div key={index} className={`${bgClass} p-6 w-90% mx-auto`}>
                      <div className="flex items-center gap-6 max-md:flex-col">
                        {/* 人物头像 */}
                        <div className={`h-[155px] w-[155px] relative overflow-hidden border-2 border-[#ffffff] rounded-full ${bgIMg}`}>
                          <div className="absolute left-50% top-50% h-[250px] w-[250px] pt-20% -translate-x-1/4 -translate-y-1/4">
                            <Image
                              src={person.imgPath}
                              alt={person.zhName}
                              style={{ width: '100%' }}
                              preview={false}
                            />
                          </div>
                        </div>

                        {/* 分隔线 */}
                        <div className={`w-[2px] h-[80px] max-md:h-[2px] max-md:w-[80px] mt-2 ${isMiddlePerson ? 'bg-[#FFFFFF]' : 'bg-[#333333]'}`}></div>

                        {/* 人物信息 */}
                        <div className="flex flex-1 items-center justify-between max-md:flex-col">
                          <div className="mb-4">
                            <h3 className={`text-[20px] font-bold ${textClass} mb-1`}>{person.zhName}</h3>
                            <p className={`text-[16px] ${subTextClass}`}>{person.enName}</p>
                          </div>

                          {/* 介绍信息 */}
                          <div className="w-70% max-md:w-100% space-y-1">
                            {person.introduce.map((intro, introIndex) => (
                              <p key={introIndex} className={`text-[14px] leading-relaxed ${introTextClass}`}>
                                {intro}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* 轮播指示器 */}
          {/* <div className="mt-6 flex justify-center gap-2">
            {groupedData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={t('HKBA.navigation.goToPage', { page: index + 1 })}
              />
            ))}
          </div> */}
        </div>

        <p className="text-right text-[#D1D1D1]">
          {t('HKBA.disclaimer')}
        </p>
      </section>
    </div>
  );
}

export default HKBAPage;
