import BzbBgImg from '@/assets/images/quotation-and-proposal/bzb-bg.png';
import BzbImg from '@/assets/images/quotation-and-proposal/bzb.png';
import Frame1Img from '@/assets/images/quotation-and-proposal/Frame-1.png';
import Frame2Img from '@/assets/images/quotation-and-proposal/Frame-2.png';
import Frame3Img from '@/assets/images/quotation-and-proposal/Frame-3.png';
import Frame4Img from '@/assets/images/quotation-and-proposal/Frame-4.png';
import HexinImg from '@/assets/images/quotation-and-proposal/hexin.png';
import OneImg from '@/assets/images/quotation-and-proposal/one.png';
import QybBgImg from '@/assets/images/quotation-and-proposal/qyb-bg.png';
import QybImg from '@/assets/images/quotation-and-proposal/qyb.png';
import ThreeImg from '@/assets/images/quotation-and-proposal/three.png';
import TwoImg from '@/assets/images/quotation-and-proposal/two.png';
import ZybBgImg from '@/assets/images/quotation-and-proposal/zyb-bg.png';
import ZybImg from '@/assets/images/quotation-and-proposal/zyb.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Project() {
  const [paymentType, setPaymentType] = useState('monthly');
  const { t } = useTranslation();

  // 支付按钮
  const handleClickPayment = (type) => {
    if (type === 'standard-edition') {
      switch (paymentType) {
        case 'monthly':
          window.open('https://pay.metakina.com/b/6oU3cw8LldO9ftAcXRdQQ09', '_blank');
          break;

        case 'yearly':
          window.open('https://pay.metakina.com/b/5kQcN6f9JcK5gxEf5ZdQQ06', '_blank');
          break;

        default:
          break;
      }
    } else if (type === 'professional-edition') {
      switch (paymentType) {
        case 'monthly':
          window.open('https://pay.metakina.com/b/cNi28sd1B11n6X49LFdQQ0a', '_blank');
          break;

        case 'yearly':
          window.open('https://pay.metakina.com/b/7sY4gA1iT5hD4OWe1VdQQ07', '_blank');
          break;

        default:
          break;
      }
    } else if (type === 'Enterprise-version') {
      switch (paymentType) {
        case 'monthly':
          window.open('https://pay.metakina.com/b/dRm5kEaTtbG13KS0b5dQQ0b', '_blank');
          break;

        case 'yearly':
          window.open('https://pay.metakina.com/b/14AfZi0eP9xT0yGe1VdQQ08', '_blank');
          break;

        default:
          break;
      }
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
    <div>
      {/* 会员 */}
      <div className="mx-auto w-[80vw] bg-[#f5f7fa] pt-35">
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
          <div className="flex justify-center gap-10 max-md:flex-col md:gap-2%">
            {/* 标准版 */}
            <div style={{ backgroundImage: `url(${BzbBgImg})`, backgroundSize: '100% 100%' }} className="rounded-lg px-4 py-10 transition-transform duration-300 bg-no-repeat md:min-w-[362px] md:w-32% hover:scale-102 md:px-10">
              <div className="mb-4">
                <img src={BzbImg} alt={t('quotationAndProposal.pricing.plans.free.title')} className="h-10 w-10" />
                <h3 className="text-base text-[#333333] font-semibold">{t('quotationAndProposal.pricing.plans.free.title')}</h3>
              </div>

              <div className="mb-16">
                <div className="text-[1.5rem] text-black font-bold">
                  $
                  {' '}
                  {paymentType === 'monthly' ? '500' : '5,000'}
                  {' '}
                  /
                  {' '}
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.month') : t('quotationAndProposal.pricing.year')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.free.description')}</p>
              </div>

              <div onClick={() => handleClickPayment('standard-edition')} className="mb-6 w-full cursor-pointer rounded-lg bg-black/5 py-3 text-center text-[1rem] text-[#333333] font-[600]">
                {t('quotationAndProposal.pricing.plans.free.activate')}
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
            <div style={{ backgroundImage: `url(${ZybBgImg})`, backgroundSize: '106% 104%', backgroundPosition: 'center' }} className="rounded-lg px-4 py-10 transition-transform duration-300 bg-no-repeat md:min-w-[362px] md:w-32% hover:scale-102 md:px-10">

              <div className="mb-4">
                <img src={ZybImg} alt={t('quotationAndProposal.pricing.plans.professional.title')} className="h-10 w-10" />
                <h3 className="text-base text-[#0055FF] font-semibold">
                  {t('quotationAndProposal.pricing.plans.professional.title')}

                  <span className="ml-4 inline-block rounded-full bg-[#ecefe9] px-4 py-1 text-xs text-[#0055FF] font-medium">{t('quotationAndProposal.pricing.plans.professional.recommended')}</span>
                </h3>
              </div>

              <div className="mb-16">
                <div className="text-[1.5rem] text-black font-bold">
                  $
                  {' '}
                  {paymentType === 'monthly' ? '2,000' : '20,000'}
                  {' '}
                  /
                  {' '}
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.month') : t('quotationAndProposal.pricing.year')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.professional.description')}</p>
              </div>

              <div onClick={() => handleClickPayment('professional-edition')} className="mb-6 w-full cursor-pointer rounded-lg bg-[#0055FF] py-3 text-center text-[1rem] text-[#ffffff] font-[600]">
                {t('quotationAndProposal.pricing.plans.professional.activate')}
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
            <div style={{ backgroundImage: `url(${QybBgImg})`, backgroundSize: '100% 100%' }} className="rounded-lg px-4 py-10 transition-transform duration-300 bg-no-repeat md:min-w-[362px] md:w-32% hover:scale-102 md:px-10">
              <div className="mb-4">
                <img src={QybImg} alt={t('quotationAndProposal.pricing.plans.enterprise.title')} className="h-10 w-10" />
                <h3 className="text-base text-[#E8B069] font-semibold">{t('quotationAndProposal.pricing.plans.enterprise.title')}</h3>
              </div>

              <div className="mb-16">
                <div className="text-[1.5rem] text-black font-bold">
                  $
                  {' '}
                  {paymentType === 'monthly' ? '10,000' : '100,000'}
                  {' '}
                  /
                  {' '}
                  {paymentType === 'monthly' ? t('quotationAndProposal.pricing.month') : t('quotationAndProposal.pricing.year')}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">{t('quotationAndProposal.pricing.plans.enterprise.description')}</p>
              </div>

              <div onClick={() => handleClickPayment('Enterprise-version')} className="mb-6 w-full cursor-pointer rounded-lg bg-black py-3 text-center text-[1rem] text-[#E8B069] font-[600]">
                {t('quotationAndProposal.pricing.plans.enterprise.activate')}
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
      <div className="mx-auto w-[80vw] bg-[#f5f7fa] pt-35">
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
      {/* 项目配套服务费用清单 */}
      <div className="mx-auto w-[80vw] pt-16">
        {/* 标题 */}
        <h1 className="mb-8 text-center text-[1.7rem] text-[#0357FF] font-[600]">
          {t('quotationAndProposal.costList.title')}
        </h1>

        {/* 副标题 */}
        <p className="mx-auto mb-6 max-w-[613px] text-left text-[1rem] text-[#000000] leading-relaxed">
          {t('quotationAndProposal.costList.subtitle')}
        </p>

        {/* 预算核心 */}
        <div className="mb-8 mt-20 flex items-center justify-start">
          <div className="flex items-center">
            <img src={HexinImg} alt={t('quotationAndProposal.costList.budgetCore')} className="h-10 w-10" />
            <span className="pl-6 text-[1.3rem] text-[#000000] font-[600]">
              {t('quotationAndProposal.costList.totalBudget')}
              <span className="text-[#0357FF] font-bold">1,100,000</span>
              {t('quotationAndProposal.costList.currency')}
            </span>
          </div>
        </div>

        {/* 第一部分：法律与合规框架建设 */}
        <div className="mb-16 rounded-lg bg-white p-6">
          <div className="mb-6 flex items-center gap-5">
            <img src={OneImg} alt={t('quotationAndProposal.costList.section1.title')} />
            <div className="flex flex-col">
              <h2 className="text-[1.1rem] text-[#000000]">
                {t('quotationAndProposal.costList.section1.title')}
              </h2>
              <p className="text-[14px] text-[#333333]">
                {t('quotationAndProposal.costList.section1.description')}
              </p>
            </div>
          </div>

          {/* 表格 */}
          <div className="ml-12 overflow-hidden rounded-lg">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.costItem')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.detailsAndPurpose')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.table.keyDeliverables')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section1.items.legal.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section1.items.legal.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section1.items.legal.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section1.items.legal.deliverable')}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section1.items.whitepaper.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section1.items.whitepaper.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section1.items.whitepaper.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section1.items.whitepaper.deliverable')}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 第二部分：代币发行与市场推广 */}
        <div className="mb-16 rounded-lg bg-white p-6">
          <div className="mb-6 flex items-center gap-5">
            <img src={TwoImg} alt={t('quotationAndProposal.costList.section2.title')} />
            <div className="flex flex-col">
              <h2 className="text-[1.1rem] text-[#000000]">
                {t('quotationAndProposal.costList.section2.title')}
              </h2>
              <p className="text-[14px] text-[#333333]">
                {t('quotationAndProposal.costList.section2.description')}
              </p>
            </div>
          </div>

          {/* 表格 */}
          <div className="ml-12 overflow-hidden rounded-lg">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.costItem')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.detailsAndPurpose')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.table.keyDeliverables')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section2.items.tokenIssuance.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section2.items.tokenIssuance.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section2.items.tokenIssuance.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section2.items.tokenIssuance.deliverable')}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 第三部分：资产安全与持续运营 */}
        <div className="mb-16 rounded-lg bg-white p-6">
          <div className="mb-6 flex items-center gap-5">
            <img src={ThreeImg} alt={t('quotationAndProposal.costList.section3.title')} />
            <div className="flex flex-col">
              <h2 className="text-[1.1rem] text-[#000000]">
                {t('quotationAndProposal.costList.section3.title')}
              </h2>
              <p className="text-[14px] text-[#333333]">
                {t('quotationAndProposal.costList.section3.description')}
              </p>
            </div>
          </div>

          {/* 表格 */}
          <div className="ml-12 overflow-hidden rounded-lg">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.costItem')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">{t('quotationAndProposal.costList.table.detailsAndPurpose')}</th>
                  <th className="w-1/3 px-6 py-4 text-left text-[14px] text-[#000000] font-semibold">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.table.keyDeliverables')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section3.items.assetManagement.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section3.items.assetManagement.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section3.items.assetManagement.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section3.items.assetManagement.deliverable')}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section3.items.mediaPromotion.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section3.items.mediaPromotion.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section3.items.mediaPromotion.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section3.items.mediaPromotion.deliverable')}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section3.items.auditRating.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section3.items.auditRating.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section3.items.auditRating.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section3.items.auditRating.deliverable')}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div>{t('quotationAndProposal.costList.section3.items.exchangeListing.name')}</div>
                    <div className="text-[#0357FF] font-semibold">
                      (
                      {t('quotationAndProposal.costList.section3.items.exchangeListing.price')}
                      )
                    </div>
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    {t('quotationAndProposal.costList.section3.items.exchangeListing.description')}
                  </td>
                  <td className="w-1/3 px-6 py-4 text-[14px] text-[#333333]">
                    <div className="pl-1/4">
                      {t('quotationAndProposal.costList.section3.items.exchangeListing.deliverable')}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
