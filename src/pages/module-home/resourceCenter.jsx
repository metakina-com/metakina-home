import resource1Img from '@/assets/images/home/resource1.png';
import resource2Img from '@/assets/images/home/resource2.png';
import resource3Img from '@/assets/images/home/resource3.png';
import resource4Img from '@/assets/images/home/resource4.png';
import resourceBgImg from '@/assets/images/home/resource-bg.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';

export default function ResourceCenter() {
  const { t } = useTranslation();

  // 资源卡片数据
  const resourceCards = [
    {
      id: 'coreFiles',
      icon: resource1Img,
      height: '20px',
      width: '15px',
      title: t('resourceCenter.coreFiles.title'),
      description: t('resourceCenter.coreFiles.description'),
      actions: [
        { text: t('resourceCenter.coreFiles.action'), href: '#' },
        { text: t('resourceCenter.coreFiles.secondAction'), href: '#' },
      ],
    },
    {
      id: 'systemTutorials',
      icon: resource2Img,
      height: '15px',
      width: '25px',
      title: t('resourceCenter.systemTutorials.title'),
      description: t('resourceCenter.systemTutorials.description'),
      actions: [
        { text: t('resourceCenter.systemTutorials.action'), href: '#' },
      ],
    },
    {
      id: 'learningCenter',
      icon: resource3Img,
      height: '15px',
      width: '23px',
      title: t('resourceCenter.learningCenter.title'),
      description: t('resourceCenter.learningCenter.description'),
      actions: [
        { text: t('resourceCenter.learningCenter.action'), href: '#' },
      ],
    },
    {
      id: 'industryInsights',
      icon: resource4Img,
      height: '20px',
      width: '25px',
      title: t('resourceCenter.industryInsights.title'),
      description: t('resourceCenter.industryInsights.description'),
      actions: [
        { text: t('resourceCenter.industryInsights.action'), href: '#' },
      ],
    },
  ];

  return (
    <div
      className="py-16 text-white lg:px-12 md:px-4 md:px-8 md:py-24"
      style={{
        background: ` url(${resourceBgImg}) no-repeat center center/cover`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="mx-auto w-[80vw]">
        {/* 标题部分 */}
        <div className="mb-16 text-center">
          <SectionTitle
            title={`${t('resourceCenter.title')}
            ：
            ${t('resourceCenter.subtitle')}`}
            color="white"
          />
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {resourceCards.map(card => (
            <div
              key={card.id}
              className="rounded-2xl bg-white p-8 text-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* 图标 */}

              <div className="mb-6">
                <img
                  src={card.icon}
                  alt={card.title}
                />
              </div>

              {/* 标题 */}
              <h3 className="mb-4 text-left text-xl text-[#1F2937] font-semibold">
                {card.title}
              </h3>

              {/* 描述 */}
              <p className="mb-6 text-left text-sm text-[#4B5563] leading-relaxed">
                {card.description}
              </p>

              {/* 操作链接 */}
              <div className="space-y-2">
                {card.actions.map((action, index) => (
                  <div key={index} className="text-left">
                    <a
                      href={action.href}
                      className="inline-block text-sm text-[#0055FF] font-medium transition-colors duration-200 hover:text-[#2F4EE8] hover:underline"
                    >
                      {action.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
