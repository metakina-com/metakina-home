import rectangleImg from '@/assets/images/home/rectangle.png';
import { useTranslation } from 'react-i18next';

export default function RWAChallengesPage() {
  const { t } = useTranslation();

  const challenges = [
    {
      key: 'liquidity',
      title: t('challenges.liquidity.title'),
      description: t('challenges.liquidity.description'),
    },
    {
      key: 'financing',
      title: t('challenges.financing.title'),
      description: t('challenges.financing.description'),
    },
    {
      key: 'efficiency',
      title: t('challenges.efficiency.title'),
      description: t('challenges.efficiency.description'),
    },
  ];

  return (
    <div className="m-x-auto w-[85vw] px-8 pt-20 lg:px-24 md:px-16 md:pt-32">
      {/* 标题  */}
      <h1
        className="mb-16 text-3xl text-[#D900FF] font-bold leading-[3rem] lg:text-5xl md:text-4xl"
        style={{ maxWidth: '36rem' }}
      >
        {t('challenges.title')}
      </h1>

      {/* 挑战卡片 */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {challenges.map(challenge => (
          <div
            key={challenge.key}
            className="group"
            style={{
              background: `url(${rectangleImg}) no-repeat center center/ 100% 100%`,
              backgroundSize: '100% 100%',
            }}
          >
            {/* 卡片内容 */}
            <div className="h-[10rem] flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl text-white font-semibold">{challenge.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{challenge.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
