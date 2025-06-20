import flexible1Img from '@/assets/images/home/flexible1.png';
import flexible2Img from '@/assets/images/home/flexible2.png';
import flexible3Img from '@/assets/images/home/flexible3.png';
import vector1Img from '@/assets/images/home/vector1.png';
import vector2Img from '@/assets/images/home/vector2.png';
import vector3Img from '@/assets/images/home/vector3.png';
import vector4Img from '@/assets/images/home/vector4.png';
import vectorImg from '@/assets/images/home/vector.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

function RWAFlexible() {
  const { t } = useTranslation();

  // 合作模式数据
  const cooperationModes = [
    {
      id: 1,
      icon: flexible1Img,
      title: t('RWACooperation.modes.modular.title'),
      description: t('RWACooperation.modes.modular.description'),
    },
    {
      id: 2,
      icon: flexible2Img,
      title: t('RWACooperation.modes.customized.title'),
      description: t('RWACooperation.modes.customized.description'),
    },
    {
      id: 3,
      icon: flexible3Img,
      title: t('RWACooperation.modes.transparent.title'),
      description: t('RWACooperation.modes.transparent.description'),
    },
  ];

  // 合作流程步骤
  const processSteps = [
    { id: 1, icon: vectorImg, label: t('RWACooperation.process.consultation') },
    { id: 2, icon: vector1Img, label: t('RWACooperation.process.evaluation') },
    { id: 3, icon: vector2Img, label: t('RWACooperation.process.design') },
    { id: 4, icon: vector3Img, label: t('RWACooperation.process.agreement') },
    { id: 5, icon: vector4Img, label: t('RWACooperation.process.execution') },
  ];

  return (
    <div className="mt-[72px] lg:px-12 md:px-4 md:px-8 md:pb-20">
      {/* 灵活的合作模式 */}
      <section className="mx-auto w-[80vw]">
        <div className="text-center md:py-16">
          <SectionTitle title={t('RWACooperation.flexibleMode')} />
        </div>

        {/* 三个卡片 - 水平布局 */}
        <div className="grid grid-cols-1 mb-20 gap-6 md:grid-cols-3 md:gap-14">
          {cooperationModes.map(mode => (
            <div
              key={mode.id}
              className="border border-gray-200 rounded-2xl bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:border-blue-400 md:p-12"
            >
              <div className="flex items-center gap-4">
                {/* 左侧图标 */}
                <div className="flex-shrink-0">
                  <img src={mode.icon} alt={mode.title} className="h-12 w-12" />
                </div>

                {/* 右侧内容 */}
                <div className="flex-1">
                  {/* 标题 */}
                  <h3 className="mb-2 text-[14px] text-gray-900 font-semibold md:text-lg">
                    {mode.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-[12px] text-gray-600 leading-relaxed md:text-sm">
                    {mode.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 合作流程 */}
        <div className="bg-blue-600 px-1 py-6 max-md:relative max-md:left-[-10vw] max-md:w-[100vw] md:rounded-lg md:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* 左侧标题 */}
            <div className="flex-shrink-0">
              <h3 className="whitespace-nowrap text-2xl text-white font-semibold">
                {t('RWACooperation.processTitle')}
              </h3>
            </div>

            {/* 中间流程步骤 */}
            <div className="w-full flex items-center justify-between gap-1 md:flex-1 md:justify-center md:gap-6">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-3">
                    {/* 图标 */}
                    <div className="h-12 w-12 flex items-center justify-center max-md:h-[18px]">
                      <img src={step.icon} alt={step.label} className="h-8 w-8 max-md:h-[18px] max-md:w-[18px]" />
                    </div>
                    {/* 标签 */}
                    <span className="text-center text-xs text-white">
                      {step.label}
                    </span>
                  </div>

                  {/* 箭头分隔符 */}
                  {index < processSteps.length - 1 && (
                    <div className="text-lg text-white/80">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* 右侧按钮 */}
            <div className="flex-shrink-0">
              <Button
                type="default"
                size="large"
                className="h-auto whitespace-nowrap border-0 px-6 py-3"
                style={{
                  background: 'white',
                  color: '#2563eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('RWACooperation.getDetailButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RWAFlexible;
