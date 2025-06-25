// import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function QuotationAndProposal() {
  // const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('menber');
  const [paymentType, setPaymentType] = useState('monthly');

  const classSelect = 'bg-[#F8F8F8] rounded-2';

  return (
    <div className="bg-[#f5f7fa] pt-[73px]">
      {/* 头部 */}
      <div className="fixed top-[71px] z-20 h-[61px] w-full flex items-center justify-center bg-white text-black shadow-md">
        <div className="text-[14px] font-[700]">
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'menber' ? classSelect : ''}`} onClick={() => setActiveTab('menber')}>加入会员</span>
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'customization' ? classSelect : ''}`} onClick={() => setActiveTab('customization')}>定制项目</span>
        </div>
        <button type="button" className="absolute right-0 cursor-pointer rounded-2 bg-black px-4 py-2 text-[17px] text-white md:right-[calc(7.5vw+148px)]">
          加入 M-VIP
        </button>
      </div>
      {/* 会员 */}
      <div className="mx-auto mt-[61px] w-[80vw] bg-[#f5f7fa] pt-20">
        <div className="mb-6 text-[#333333]">
          <p className="text-[48px] font-[600]">Metakina VIP</p>
          <p className="text-[44px]">灵活的定价方案，满足您的所有需求</p>
          <p className="text-[12px]">从个人投资者到大型金融机构，我们提供从SaaS平台订阅到端到端项目制的全方位解决方案，</p>
          <p className="text-[12px]">为您的RWA（现实世界资产）代币化之旅提供专业、合规、高效的服务。</p>
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
                月付
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
                年付
                <span className="text-[12px]">（节省17%）</span>
              </button>
            </div>
          </div>

          {/* 定价方案 */}
          <div className="flex justify-center bg-white">
            {/* 免费版 */}
            <div className="min-w-[362px] rounded-lg px-15 py-10">
              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">免费版</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? 'HK¥ 0 /月' : 'HK¥ 0 /年'}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">适合个人、初创企业、概念验证</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black/5 py-2 pl-6 text-[1rem] text-[#333333] font-[600]">
                计划中
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">10个基础RWA项目测览</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">简单估值计算器</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">社区论坛访问</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">标准NFT展示</span>
                </div>
              </div>
            </div>

            {/* 专业版 */}
            <div className="relative my-4 min-w-[362px] rounded-lg bg-white px-15 py-10 shadow-lg">
              <div className="absolute right-1 top-10 -translate-x-1/2">
                <span className="rounded-full bg-[#f3f5fa] px-4 py-1 text-xs text-[#0055FF] font-medium">推荐</span>
              </div>

              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">专业版</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? 'HK¥ 2,888/月' : 'HK¥ 28,888/年'}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">适合专业投资机构、交易员</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black py-2 pl-6 text-[1rem] text-[#ffffff] font-[600]">
                计划中
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">基础RWA项目测览</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">简单估值计算器</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">社区论坛访问</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">标准NFT展示</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">"元启"AI估值引擎 & "元策"AI预测</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">高级分析工具与实时数据</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">基础API访问 & 数据导出</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">香港合规报告模板</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">投资组合管理与风险报告</span>
                </div>
              </div>
            </div>

            {/* 企业版 */}
            <div className="min-w-[362px] rounded-lg px-15 py-10">
              <div className="mb-4">
                <h3 className="text-base text-[#0055FF] font-semibold">企业版</h3>
              </div>

              <div className="mb-20">
                <div className="text-[1.5rem] text-black font-bold">
                  {paymentType === 'monthly' ? 'HK¥ 5,888/月 起' : 'HK¥ 58,888/年 起'}
                </div>
                <p className="mt-2 text-[12px] text-[#666666]">适合需要高级定制功能的大型机构</p>
              </div>

              <div className="mb-6 w-full rounded-lg bg-black/5 py-2 pl-6 text-[1rem] text-[#333333] font-[600]">
                计划中
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">基础RWA项目测览</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">简单估值计算器</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">社区论坛访问</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">标准NFT展示</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">"元启"AI估值引擎 & "元策"AI预测</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">高级分析工具与实时数据</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">基础API访问 & 数据导出</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">香港合规报告模板</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">投资组合管理与风险报告</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">定制化AI模型训练</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">白标解决方案</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">无限API调用</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">24/7专属客服&客户经理</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  <span className="text-sm text-black">香港金管局合规咨询</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationAndProposal;
