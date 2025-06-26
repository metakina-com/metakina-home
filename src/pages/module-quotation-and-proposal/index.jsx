import Frame1Img from '@/assets/images/quotation-and-proposal/Frame-1.png';
import Frame2Img from '@/assets/images/quotation-and-proposal/Frame-2.png';
import Frame3Img from '@/assets/images/quotation-and-proposal/Frame-3.png';
import Frame4Img from '@/assets/images/quotation-and-proposal/Frame-4.png';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function QuotationAndProposal() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('menber');
  const [paymentType, setPaymentType] = useState('monthly');

  // 创建引用来定位滚动目标
  const memberSectionRef = useRef(null);
  const plansSectionRef = useRef(null);

  const classSelect = 'bg-[#F8F8F8] rounded-2';

  // 滚动到指定部分的函数
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 处理标签页点击
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    if (tabName === 'menber') {
      // 滚动到会员部分
      scrollToSection(memberSectionRef);
    } else if (tabName === 'customization') {
      // 滚动到规划方案部分
      scrollToSection(plansSectionRef);
    }
  };

  // 渲染阶段卡片的函数
  const renderPhaseCard = ({ img, alt, title, description, items }) => (
    <div className="flex-1 rounded-lg p-8 shadow-sm from-transparent to-white bg-gradient-to-r">
      <div className="mb-6">
        <img src={img} alt={alt} className="mb-4 h-12 w-12" />
        <h3 className="mb-2 text-xl text-[#0055FF] font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black"></span>
              <span className="text-base text-black">{item.name}</span>
            </div>
            <p className="text-right text-[12px] text-[#999999]/50">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-[#f5f7fa] pb-20 pt-[73px]">
      {/* 头部 */}
      <div className="fixed top-[71px] z-20 h-[61px] w-full flex items-center justify-between bg-white px-3 text-black shadow-md md:justify-center">
        <div className="text-[14px] font-[700]">
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'menber' ? classSelect : ''}`} onClick={() => handleTabClick('menber')}>{t('quotationAndProposal.tabs.member')}</span>
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'customization' ? classSelect : ''}`} onClick={() => handleTabClick('customization')}>{t('quotationAndProposal.tabs.customization')}</span>
        </div>
        <button type="button" className="right-0 cursor-pointer rounded-2 bg-black px-4 py-2 text-[17px] text-white md:absolute md:right-[calc(7.5vw+148px)]">
          {t('quotationAndProposal.joinVip')}
        </button>
      </div>
      {/* 会员 */}
      <div ref={memberSectionRef} className="mx-auto w-[80vw] bg-[#f5f7fa] pt-35">
        <div className="mb-6 text-[#333333]">
          <p className="text-[48px] font-[600]">{t('quotationAndProposal.vip.title')}</p>
          <p className="mb-4 mt-5 text-[44px]">{t('quotationAndProposal.vip.subtitle')}</p>
          <p className="text-[12px]">
            {t('quotationAndProposal.vip.description1')}
            <span className="inline md:hidden">
              {t('quotationAndProposal.vip.description2')}
            </span>
          </p>
          <p className="hidden text-[12px] md:block">{t('quotationAndProposal.vip.description2')}</p>
        </div>
        {/* 价格 */}
        <div className="mt-8 bg-[#f5f7fa] py-4">
          {/* 付费方式选择器 */}
          <div className="mb-8 flex justify-start">
            <div className="flex rounded-4 bg-black p-2">
              <button
                type="button"
                className={`mr-4 cursor-pointer rounded-2 px-6 py-2 text-sm font-medium ${
                  paymentType === 'monthly'
                    ? 'bg-white text-black'
                    : 'bg-[#262626] text-white'
                }`}
                onClick={() => setPaymentType('monthly')}
              >
                {t('quotationAndProposal.pricing.monthly')}
              </button>
              <button
                type="button"
                className={`cursor-pointer rounded-2 px-6 py-2 text-sm font-medium ${
                  paymentType === 'yearly'
                    ? 'bg-white text-black'
                    : 'bg-[#262626] text-white'
                }`}
                onClick={() => setPaymentType('yearly')}
              >
                {t('quotationAndProposal.pricing.yearly')}
                <span className="text-[12px]">{t('quotationAndProposal.pricing.yearlySaving')}</span>
              </button>
            </div>
          </div>

          {/* 定价方案 */}
          <div className="flex justify-center bg-white max-md:flex-col">
            {/* 免费版 */}
            <div className="w-full rounded-lg px-4 py-10 md:min-w-[362px] md:px-15">
              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">{t('quotationAndProposal.pricing.plans.free.title')}</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.plans.free.monthlyPrice') : t('quotationAndProposal.pricing.plans.free.yearlyPrice')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.free.description')}</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black/5 py-2 pl-6 text-[1rem] text-[#333333] font-[600]">
                {t('quotationAndProposal.pricing.plans.free.status')}
              </div>

              <div className="space-y-3">
                {t('quotationAndProposal.pricing.plans.free.features', { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-3 text-green-500">✓</span>
                    <span className="text-sm text-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 专业版 */}
            <div style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }} className="relative my-4 w-[98%] rounded-lg bg-white px-4 py-10 max-md:mx-[1%] md:min-w-[362px] md:px-15">
              <div className="absolute right-1 top-10 -translate-x-1/2">
                <span className="rounded-full bg-[#f3f5fa] px-4 py-1 text-xs text-[#0055FF] font-medium">{t('quotationAndProposal.pricing.plans.professional.recommended')}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">{t('quotationAndProposal.pricing.plans.professional.title')}</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.plans.professional.monthlyPrice') : t('quotationAndProposal.pricing.plans.professional.yearlyPrice')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.professional.description')}</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black py-2 pl-6 text-[1rem] text-[#ffffff] font-[600]">
                {t('quotationAndProposal.pricing.plans.professional.status')}
              </div>

              <div className="space-y-3">
                {t('quotationAndProposal.pricing.plans.professional.features', { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-3 text-green-500">✓</span>
                    <span className="text-sm text-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 企业版 */}
            <div className="w-full rounded-lg px-4 py-10 md:min-w-[362px] md:px-15">
              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">{t('quotationAndProposal.pricing.plans.enterprise.title')}</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.plans.enterprise.monthlyPrice') : t('quotationAndProposal.pricing.plans.enterprise.yearlyPrice')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.enterprise.description')}</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black/5 py-2 pl-6 text-[1rem] text-[#333333] font-[600]">
                {t('quotationAndProposal.pricing.plans.enterprise.status')}
              </div>

              <div className="space-y-3">
                {t('quotationAndProposal.pricing.plans.enterprise.features', { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-3 text-green-500">✓</span>
                    <span className="text-sm text-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 规划方案 */}
      <div ref={plansSectionRef} className="mx-auto w-[80vw] bg-[#f5f7fa] pt-35">
        <p className="text-center text-[40px] font-[600]">{t('quotationAndProposal.phases.title')}</p>
        <div className="mt-12 flex justify-between gap-6 max-md:flex-col">
          {renderPhaseCard({
            img: Frame1Img,
            alt: t('quotationAndProposal.phases.phase1.title'),
            title: t('quotationAndProposal.phases.phase1.title'),
            description: t('quotationAndProposal.phases.phase1.description'),
            items: t('quotationAndProposal.phases.phase1.items', { returnObjects: true }),
          })}

          {renderPhaseCard({
            img: Frame2Img,
            alt: t('quotationAndProposal.phases.phase2.title'),
            title: t('quotationAndProposal.phases.phase2.title'),
            description: t('quotationAndProposal.phases.phase2.description'),
            items: t('quotationAndProposal.phases.phase2.items', { returnObjects: true }),
          })}

          {renderPhaseCard({
            img: Frame3Img,
            alt: t('quotationAndProposal.phases.phase3.title'),
            title: t('quotationAndProposal.phases.phase3.title'),
            description: t('quotationAndProposal.phases.phase3.description'),
            items: t('quotationAndProposal.phases.phase3.items', { returnObjects: true }),
          })}

          {renderPhaseCard({
            img: Frame4Img,
            alt: t('quotationAndProposal.phases.phase4.title'),
            title: t('quotationAndProposal.phases.phase4.title'),
            description: t('quotationAndProposal.phases.phase4.description'),
            items: t('quotationAndProposal.phases.phase4.items', { returnObjects: true }),
          })}
        </div>
      </div>
    </div>
  );
}

export default QuotationAndProposal;
