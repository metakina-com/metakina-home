import QybBgImg from '@/assets/images/quotation-and-proposal/qyb-bg-1.png';
import QybImg from '@/assets/images/quotation-and-proposal/qyb.png';
import ZybBgImg from '@/assets/images/quotation-and-proposal/zyb-bg-1.png';
import ZybImg from '@/assets/images/quotation-and-proposal/zyb.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CooperativePartner() {
  const { t } = useTranslation();
  const [paymentType, setPaymentType] = useState('monthly');
  const supportCards = [
    {
      id: 1,
      title: '专业培训与课程',
      description: '提供七大核心模块课程与《元话RWA服务手册》等全套培训资料',
      row: 1,
      col: 1,
    },
    {
      id: 2,
      title: '品牌与营销支持',
      description: '授予官方品牌使用权,提供全套营销素材,助您快速打开市场。',
      row: 1,
      col: 2,
    },
    {
      id: 3,
      title: '平台与技术支持',
      description: '提供"元话RWA"系统平台使用权及AI赋能等持续技术支持。',
      row: 1,
      col: 3,
    },
    {
      id: 4,
      title: '合规与方案支持',
      description: '提供专业的合规咨询与项目解决方案设计支持,规避风险。',
      row: 2,
      col: 1,
    },
    {
      id: 5,
      title: '资源与生态共享',
      description: '对接优质项目资源,共享合作伙伴生态,实现合作共赢。',
      row: 2,
      col: 2,
    },
  ];

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
              </button>
            </div>
          </div>
          {/* 定价方案 */}
          <div className="flex justify-center gap-10 max-md:flex-col md:gap-2%">
            {/* 核心战略伙伴 */}
            <div className="my-box-shadow relative rounded-lg px-4 py-10 transition-transform duration-300 from-[##0055FF] to-[#FFFFFF] bg-gradient-to-b md:min-w-[362px] md:w-49% hover:scale-102 md:px-10">
              <img src={ZybBgImg} alt="" className="absolute right-10%" />

              <div className="mb-4">
                <img src={ZybImg} alt="核心战略伙伴" className="h-10 w-10" />
                <h3 className="text-base text-[#0055FF] font-semibold">核心战略伙伴(一级开发商)合作方案</h3>
                <p className="mt-2 text-sm text-[#666666]">区域市场的领导者与生态构建者</p>
              </div>

              <div className="mb-16">
                <div className="text-[1.5rem] text-black font-bold">
                  $ 88,888/首年
                </div>
                <p className="mt-2 text-[12px] text-red-500 font-medium">全国首批仅限8席!</p>
              </div>

              <div className="mb-6 w-full cursor-pointer rounded-lg bg-[#0055FF] py-3 text-center text-[1rem] text-white font-[600]">
                成为核心战略伙伴
              </div>

              <div className="text-black space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <div className="text-sm">
                    <span className="font-bold">高额培训收益:</span>
                    <span className="ml-2 text-[#555555]">授权组织培训,享</span>
                    <span className="text-[#0055FF]">85%</span>
                    <span className="text-[#555555]">收入分成</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <div className="text-sm">
                    <span className="font-bold">生态发展佣金:</span>

                    <span className="ml-2 text-[#555555]">获推荐二级开发商年费</span>
                    <span className="text-[#0055FF]">20%</span>
                    <span className="text-[#555555]">佣金</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <div className="text-sm">
                    <span className="font-bold">项目服务分成:</span>

                    <span className="ml-2 text-[#555555]">享项目服务费</span>
                    <span className="text-[#0055FF]">5%-10%</span>
                    <span className="text-[#555555]">高额分成</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>

                  <span className="text-sm">
                    <span className="font-bold">官方认证授权:</span>

                    <span className="ml-2 text-[#555555]">提升区域品牌影响力</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 成长合伙人 */}
            <div className="my-box-shadow relative rounded-lg px-4 py-10 transition-transform duration-300 from-[#FFFCF5] to-[#FFFFFF] bg-gradient-to-b md:min-w-[362px] md:w-49% hover:scale-102 md:px-10">
              <img src={QybBgImg} alt="" className="absolute right-10%" />

              <div className="mb-4">
                <img src={QybImg} alt="成长合伙人" className="h-10 w-10" />
                <h3 className="text-base text-[#E8B069] font-semibold">成长合伙人(二级开发商)合作方案</h3>
                <p className="mt-2 text-sm text-[#666666]">在项目实践中成长的行业专家</p>
              </div>

              <div className="mb-16">
                <div className="text-[1.5rem] text-black font-bold">
                  $ 119,999/年
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">需由一级开发商推荐加入/参加一级开发商组织的培训课程</p>
              </div>

              <div className="mb-6 w-full cursor-pointer rounded-lg bg-black py-3 text-center text-[1rem] text-white font-[600]">
                成为成长合伙人
              </div>

              <div className="text-black space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span className="text-sm">
                    <span className="font-bold">系统化知识赋能:</span>

                    <span className="ml-2 text-[#555555]">掌握RWA与数据资产化全流程</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span className="text-sm">
                    <span className="font-bold">平台系统使用权:</span>

                    <span className="ml-2 text-[#555555]">获得"元话RWA"平台使用权限</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span className="text-sm">
                    <span className="font-bold">真实项目实践:</span>

                    <span className="ml-2 text-[#555555]">参与真实RWA项目开发与落地</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span className="text-sm">
                    <span className="font-bold">清晰职业成长:</span>

                    <span className="ml-2 text-[#555555]">积累宝贵经验与客户资源</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 合作方案详细对比 */}
      <div className="mx-auto w-[80vw] pt-16">
        {/* 标题 */}
        <h2 className="text-center text-[40px] text-black font-[400]">合作方案详细对比</h2>

        {/* 对比表格 */}
        <div className="overflow-hidden">
          {/* 表头 */}
          <div className="bg-[#0055FF08] p-6">
            <div className="grid grid-cols-3 gap-4 text-black">
              <div className="font-semibold">项目</div>
              <div className="font-semibold">核心战略伙伴(一级)</div>
              <div className="font-semibold">成长合伙人(二级)</div>
            </div>
          </div>

          {/* 表格内容 */}
          <div className="bg-white">
            {/* 定位 */}
            <div className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">定位</div>
                <div className="text-[#666666]">区域市场的核心合作伙伴与生态构建者</div>
                <div className="text-[#666666]">在实践中学习与发展的成长合伙人</div>
              </div>
            </div>

            {/* 加入前提 */}
            <div className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">加入前提</div>
                <div className="text-[#666666]">具备强大项目资源和市场能力的企业实体,通过官方评估</div>
                <div className="text-[#666666]">参加一级培训并获得推荐</div>
              </div>
            </div>

            {/* 合作投入 */}
            <div className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">合作投入</div>
                <div className="text-[#666666]">
                  <span className="text-red-500 font-bold">¥88,888</span>
                  /首年
                </div>
                <div className="text-[#666666]">
                  <span className="text-red-500 font-bold">¥119,999</span>
                  /年
                </div>
              </div>
            </div>

            {/* 培训收益 */}
            <div className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">培训收益</div>
                <div className="text-[#666666]">
                  享培训收入的
                  <span className="text-[#0055FF] font-bold">85%</span>
                  分成
                </div>
                <div className="text-[#666666]">作为培训的付费参与方</div>
              </div>
            </div>

            {/* 生态佣金 */}
            <div className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">生态佣金</div>
                <div className="text-[#666666]">
                  获推荐二级开发商年费的
                  <span className="text-[#0055FF] font-bold">20%</span>
                  佣金
                </div>
                <div className="text-[#666666]">无</div>
              </div>
            </div>

            {/* 项目服务分成 */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-[#333333] font-medium">项目服务分成</div>
                <div className="text-[#666666]">
                  获项目服务费的
                  <span className="text-[#0055FF] font-bold">5%-10%</span>
                  分成
                </div>
                <div className="text-[#666666]">无直接分成,参与项目实践</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 提供全方位支持 */}
      <div className="mx-auto w-[80vw] pt-16">
        <h2 className="text-center text-[40px] text-black font-[400]">我们为您提供全方位支持</h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {supportCards.map(card => (
              <div key={card.id} className="my-box-shadow rounded-lg p-6 shadow-sm from-[#F6F9FF] to-[#FFFFFF] bg-gradient-to-b">
                <h3 className="mb-3 text-[24px] text-black font-bold">{card.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CooperativePartner;
