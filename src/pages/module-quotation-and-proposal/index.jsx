import { useState } from 'react';
import CooperativePartner from './CooperativePartner.jsx';
// import { useTranslation } from 'react-i18next';
import Project from './Project.jsx';

function QuotationAndProposal() {
  // const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('menber');

  const classSelect = 'bg-[#F8F8F8] rounded-2';

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-[#f5f7fa] pb-20 pt-[73px]">
      {/* 头部 */}
      <div className="fixed top-[71px] z-20 h-[61px] w-full flex items-center justify-between bg-white px-3 text-black shadow-md md:justify-center">
        <div className="text-[14px] font-[700]">
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'menber' ? classSelect : ''}`} onClick={() => handleTabClick('menber')}>成为项目方</span>
          <span className={`inline-block cursor-pointer px-4 py-2 ${activeTab === 'customization' ? classSelect : ''}`} onClick={() => handleTabClick('customization')}>成为合作伙伴</span>
        </div>
      </div>
      { activeTab === 'menber' && <Project />}
      { activeTab === 'customization' && <CooperativePartner />}

    </div>
  );
}

export default QuotationAndProposal;
