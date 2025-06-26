import cooperationBgImg from '@/assets/images/home/cooperation-bg.png';
import { Button } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function RWACooperationPlan() {
  const { t } = useTranslation();
  const [selectId, setSelectId] = useState('');
  // 合作计划数据-
  const cooperationPlans = [
    {
      id: '1a',
      title: t('RWACooperation.plans.registered.title'),
      description: t('RWACooperation.plans.registered.description'),
    },
    {
      id: '2a',
      title: t('RWACooperation.plans.certified.title'),
      description: t('RWACooperation.plans.certified.description'),
    },
    {
      id: '3a',
      title: t('RWACooperation.plans.premium.title'),
      description: t('RWACooperation.plans.premium.description'),
    },
  ];

  const handleClickNum = (id) => {
    setSelectId(id === selectId ? '' : id);
  };

  return (
    <div className="text-white">
      {/* 第一部分：元话RWA数字投行合作计划 */}
      <section className="min-h-[741px] flex items-center bg-cover bg-no-repeat max-md:py-16" style={{ backgroundImage: `url(${cooperationBgImg})` }}>
        <div className="mx-auto max-w-[80vw] w-full md:px-4">
          <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            {/* 左侧标题 */}
            <div className="text-left">
              <h1 className="text-center text-4xl leading-tight font-[400] md:text-[50px]">
                <span>{t('RWACooperation.mainTitle')}</span>
                <br />
                <span className="mt-10 block">{t('RWACooperation.subtitle')}</span>
              </h1>
            </div>

            {/* 右侧卡片 */}
            <div>
              <div>
                {cooperationPlans.map(plan => (
                  <div
                    key={plan.id}
                    className={`cursor-pointer rounded-2xl border-b-3 border-b-[#695D5D]/25  bg-black/40 p-6 text-white transition-all duration-300 backdrop-blur-sm ${
                      selectId === plan.id ? '!bg-[#0357FF] ' : ''
                    }`}
                    onClick={() => handleClickNum(plan.id)}
                  >
                    <div className="flex flex-col">
                      <h3 className="mb-2 text-xl font-bold">{plan.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed opacity-90">{plan.description}</p>
                    </div>
                  </div>
                ))}
                <div className="max-md:flex max-md:justify-center">
                  <Button
                    type="primary"
                    className="mt-6"
                    style={{
                      background: '#0357FF',
                      border: 'none',
                      padding: '8px 16px',
                      height: '40px',
                      fontSize: '14px',
                      fontWeight: 500,
                      borderRadius: '8px',
                    }}
                  >
                    {t('RWACooperation.applyPartnerButton')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RWACooperationPlan;
