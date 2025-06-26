import frame204Img from '@/assets/images/home/frame204.png';
import frame205Img from '@/assets/images/home/frame205.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';

export default function RWAChallengesPage() {
  const { t } = useTranslation();

  const challenges = [
    {
      key: 'liquidity',
      title: t('challenges.liquidity.title'),
      // description: t('challenges.liquidity.description'),
      icon: frame204Img,
      number: '01',
    },
    {
      key: 'efficiency',
      title: t('challenges.efficiency.title'),
      description: t('challenges.efficiency.description'),
      number: '02',
    },
    {
      key: 'financing',
      title: t('challenges.financing.title'),
      // description: t('challenges.financing.description'),
      icon: frame205Img,
      number: '03',
    },
  ];

  return (
    <div className="w-full md:mt-[72px]">
      <div className="m-x-auto w-[85vw] px-0 pb-24 pt-14 lg:px-24 md:px-16 md:pt-10">
        {/* 标题  */}
        <SectionTitle title={t('challenges.title')} />

        {/* 挑战卡片 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {challenges.map((challenge, index) => {
            const isMiddleCard = index === 1;
            const isSideCard = index === 0 || index === 2;

            return (
              <div
                key={challenge.key}
                className={`relative rounded-lg p-8 min-h-[280px] max-md:min-h-[200px] ${
                  isMiddleCard ? 'bg-gray-100' : 'bg-blue-600'
                }`}
              >
                {/* 中间卡片 - 垂直布局 */}
                {isMiddleCard && (
                  <div className="h-full flex flex-col">
                    {/* 大数字 */}
                    <div className="mb-4 text-8xl text-gray-300 font-bold opacity-50 max-md:text-[64px]">
                      {challenge.number}
                    </div>
                    {/* 标题 */}
                    <h3 className="mb-3 text-[1rem] text-gray-800 font-bold md:text-xl">
                      {challenge.title}
                    </h3>
                    {/* 描述 */}
                    {challenge?.description
                      ? (
                          <p className="text-[12px] text-gray-600 leading-relaxed md:text-sm">
                            {challenge.description}
                          </p>
                        )
                      : ''}
                  </div>
                )}

                {/* 左右卡片 - 横向布局 */}
                {isSideCard && (
                  <div className="h-full flex items-center justify-between">
                    {/* 左侧文字内容 */}
                    <div className="flex-1 pr-4">
                      <div className="mb-2 text-[80px] text-white/10 font-medium max-md:text-[64px]">
                        {challenge.number}
                      </div>
                      <h3 className="mb-3 text-[24px] text-white font-bold max-md:text-[16px]">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

                    {/* 右侧图标 */}
                    <div className="flex-shrink-0 max-md:w-[10rem]">
                      <img
                        src={challenge.icon}
                        alt={challenge.title}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
