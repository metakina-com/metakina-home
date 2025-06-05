import flexible1Img from '@/assets/images/home/flexible1.png';
import flexible2Img from '@/assets/images/home/flexible2.png';
import flexible3Img from '@/assets/images/home/flexible3.png';
import number1Img from '@/assets/images/home/number1.png';
import number2Img from '@/assets/images/home/number2.png';
import number3Img from '@/assets/images/home/number3.png';
import rectangleImg from '@/assets/images/home/rectangle.png';
import vector1Img from '@/assets/images/home/vector1.png';
import vector2Img from '@/assets/images/home/vector2.png';
import vector3Img from '@/assets/images/home/vector3.png';
import vector4Img from '@/assets/images/home/vector4.png';
import vectorImg from '@/assets/images/home/vector.png';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

function RWACooperationPlan() {
  const { t } = useTranslation();

  // 合作计划数据-
  const cooperationPlans = [
    {
      id: 1,
      icon: number1Img,
      title: t('RWACooperation.plans.registered.title'),
      description: t('RWACooperation.plans.registered.description'),
    },
    {
      id: 2,
      icon: number2Img,
      title: t('RWACooperation.plans.certified.title'),
      description: t('RWACooperation.plans.certified.description'),
    },
    {
      id: 3,
      icon: number3Img,
      title: t('RWACooperation.plans.premium.title'),
      description: t('RWACooperation.plans.premium.description'),
    },
  ];

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
    <div className="m-x-auto w-[85vw] px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
      {/* 第一部分：元话RWA数字投行合作计划 */}
      <section className="text-center">
        <h1 className="text-3xl text-[#D900FF] font-bold lg:text-5xl md:text-4xl">{t('RWACooperation.title')}</h1>

        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-3 md:pt-28">
          {cooperationPlans.map(plan => (
            <div
              key={plan.id}
              className="group"
              style={{ background: `url(${rectangleImg}) no-repeat center center/100% 100%` }}
            >
              <div className="rounded-2xl p-8 transition-all duration-300 hover:border-purple-400/70">
                {/* Icon占位符 */}
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img src={plan.icon} alt={plan.title} />
                </div>

                <h3 className="mb-3 text-xl text-white font-semibold">{plan.title}</h3>

                <p className="text-sm text-gray-300 leading-relaxed">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 第二部分：灵活的合作模式 */}
      <section className="pt-20 text-center md:pt-32">
        <h2 className="mb-12 text-3xl text-[#D900FF] font-bold lg:text-5xl md:text-4xl">{t('RWACooperation.flexibleMode')}</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cooperationModes.map(mode => (
            <div
              key={mode.id}
              className="group"
              style={{ background: `url(${rectangleImg.src}) no-repeat center center/100% 100%` }}
            >
              {/* 卡片内容 */}
              <div className="h-full flex items-center justify-center p-8 transition-all duration-300 hover:border-purple-400/70">
                {/* Icon占位符 */}
                <div className="my-8 mr-4 flex items-center justify-center">
                  <img src={mode.icon} alt={mode.title} />
                </div>
                <div className="text-left">
                  <h3 className="mb-3 text-xl text-white font-semibold">{mode.title}</h3>

                  <p className="text-sm text-gray-300 leading-relaxed">{mode.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 第三部分：合作流程 */}
      <section className="mt-16">
        <div className="border border-purple-500/30 rounded-3xl bg-gray-800/50 p-8 backdrop-blur-sm md:p-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* 左侧标题 */}
            <h3 className="text-2xl text-white font-semibold">{t('RWACooperation.processTitle')}</h3>

            {/* 中间流程步骤 */}
            <div className="flex items-center gap-4 md:gap-8">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-2">
                    {/* Icon占位符 */}
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      <img src={step.icon} alt={step.label} />
                    </div>
                    <span className={`text-xs ${index === 0 ? 'text-[#2F4EE8]' : 'text-white'}`}>{step.label}</span>
                  </div>

                  {/* 箭头分隔符 */}
                  {index < processSteps.length - 1 && <span className="hidden text-white md:block">→</span>}
                </React.Fragment>
              ))}
            </div>

            {/* 右侧按钮 */}
            <Button
              type="primary"
              className="whitespace-nowrap"
              style={{
                background: 'linear-gradient(to bottom, #D900FF 0%, #2F4EE8 100%)',
                border: 'none',
                padding: '12px 24px',
                height: 'auto',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #C800E8 0%, #2A47D0 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #D900FF 0%, #2F4EE8 100%)';
              }}
            >
              {t('RWACooperation.getDetailButton')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RWACooperationPlan;
