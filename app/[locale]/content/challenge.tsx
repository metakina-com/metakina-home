import rectangleImg from "@/public/home/rectangle.png";
import { useTranslations } from 'next-intl';

export default function RWAChallengesPage() {
  const t = useTranslations('challenges');

  const challenges = [
    {
      key: 'liquidity',
      title: t('liquidity.title'),
      description: t('liquidity.description')
    },
    {
      key: 'financing',
      title: t('financing.title'),
      description: t('financing.description')
    },
    {
      key: 'efficiency',
      title: t('efficiency.title'),
      description: t('efficiency.description')
    }
  ];

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24">
      {/* 标题 */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-[3rem] text-[#D900FF]" style={{ maxWidth: '36rem' }}>
        {t('title')}
      </h1>

      {/* 挑战卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {challenges.map((challenge, index) => (
          <div
            key={challenge.key}
            className=" group"
            style={{
              background: `url(${rectangleImg.src}) no-repeat center center/cover`,
              backgroundSize: '100% 100%'
            }}
          >
            {/* 卡片内容 */}
            <div className="p-8 h-[10rem]  flex items-center justify-center">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}