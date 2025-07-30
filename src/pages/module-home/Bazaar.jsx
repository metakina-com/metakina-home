import hyjglImg from '@/assets/images/home/hyjgl.png';
import jgjylImg from '@/assets/images/home/jgjyl.png';
import pjjgsylImg from '@/assets/images/home/pjjgsyl.png';
import zzcgmImg from '@/assets/images/home/zzcgm.png';
import { Select, Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bazaar() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // 表格数据
  const tableData = [
    {
      key: '1',
      project: {
        name: 'BlackRock BUIDL Fund',
        description: '机构基金',
        icon: 'B',
      },
      assetCategory: '稳定币',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'AAA',
      compliance: '合规',
      yield: '+5.8%',
      region: '中国',
      holders: '9,568',
    },
    {
      key: '2',
      project: {
        name: 'Maple Finance Pool',
        description: '机构基金',
        icon: 'M',
      },
      assetCategory: '机构基金',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'AAA',
      compliance: '合规',
      yield: '+5.8%',
      region: '中国',
      holders: '9,568',
    },
    {
      key: '3',
      project: {
        name: 'RealT Portfolio',
        description: '不动产',
        icon: 'R',
      },
      assetCategory: '不动产',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'AAA',
      compliance: '合规',
      yield: '+5.8%',
      region: '中国',
      holders: '9,568',
    },
    {
      key: '4',
      project: {
        name: 'Centrifuge Pool',
        description: '另类资产',
        icon: 'C',
      },
      assetCategory: '另类资产',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'AA',
      compliance: '合规',
      yield: '+5.8%',
      region: '中国',
      holders: '9,568',
    },
    {
      key: '5',
      project: {
        name: 'Goldman Sachs Digital Assets',
        description: '债券',
        icon: 'G',
      },
      assetCategory: '债券',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'AA',
      compliance: '合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
    {
      key: '6',
      project: {
        name: 'Franklin Templeton OnChain',
        description: '私人信贷',
        icon: 'F',
      },
      assetCategory: '私人信贷',
      associatedAsset: '蒙娜图莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'A',
      compliance: '不合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
    {
      key: '7',
      project: {
        name: 'Ondo Short-Term US',
        description: '大宗商品',
        icon: 'O',
      },
      assetCategory: '大宗商品',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'BB',
      compliance: '合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
    {
      key: '8',
      project: {
        name: 'PAX Gold',
        description: '股票',
        icon: 'P',
      },
      assetCategory: '股票',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'BB',
      compliance: '不合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
    {
      key: '9',
      project: {
        name: 'Tangible Real Estate Portfolio',
        description: '股票',
        icon: 'T',
      },
      assetCategory: '股票',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'B',
      compliance: '合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
    {
      key: '10',
      project: {
        name: 'Swarm Markets Infrastructure',
        description: '股票',
        icon: 'S',
      },
      assetCategory: '股票',
      associatedAsset: '蒙娜丽莎的微笑',
      marketCap: '$468.8M',
      riskRating: 'B',
      compliance: '合规',
      yield: '+5.8%',
      region: '美国',
      holders: '9,568',
    },
  ];

  // 风险评级颜色映射
  const getRiskRatingStyle = (rating) => {
    const styles = {
      AAA: { background: 'linear-gradient(90deg, #004D40 0%, #2E7D3200 100%)' },
      AA: { background: 'linear-gradient(90deg, #4CAF50 0%, #81C78400 100%)' },
      A: { background: 'linear-gradient(90deg, #AFB42B 0%, #DCE77500 100%)' },
      BB: { background: 'linear-gradient(90deg, #FFB300 0%, #FFD54F00 100%)' },
      B: { background: 'linear-gradient(90deg, #FFBB88 0%, #FFB74D00 100%)' },
    };

    return styles[rating] || {};
  };

  // 表格列配置
  const columns = [
    {
      title: '项目信息',
      dataIndex: 'project',
      key: 'project',
      width: 100,
      render: project => (
        <div className="flex items-center">
          <div className="mr-3 h-[44px] w-[44px] flex items-center justify-center rounded-full bg-blue-500 text-sm text-white font-medium">
            {project.icon}
          </div>
          <div className="flex-1">
            <div className="text-[#333333] font-medium">{project.name}</div>
            <div className="text-xs text-[#777777]">{project.description}</div>
          </div>
        </div>
      ),
    },
    {
      title: '资产类别',
      dataIndex: 'assetCategory',
      key: 'assetCategory',
      width: 100,
      render: category => (
        <div className="w-80px rounded-4px bg-[#E6EEFF] px-3 py-1 text-center text-sm text-[#0055FF]">
          {category}
        </div>
      ),
    },
    {
      title: '关联资产',
      dataIndex: 'associatedAsset',
      key: 'associatedAsset',
      width: 150,
      render: asset => <span className="text-sm text-[#333333]">{asset}</span>,
    },
    {
      title: '市值',
      dataIndex: 'marketCap',
      key: 'marketCap',
      width: 120,
      render: cap => <span className="text-sm text-[#333333]">{cap}</span>,
    },
    {
      title: '风险评级',
      dataIndex: 'riskRating',
      key: 'riskRating',
      width: 100,
      render: rating => (
        <div
          className="w-80px rounded py-2 pl-3 text-[14px] text-white font-bold"
          style={getRiskRatingStyle(rating)}
        >
          {rating}
        </div>
      ),
    },
    {
      title: '是否合规',
      dataIndex: 'compliance',
      key: 'compliance',
      width: 100,
      render: compliance => (
        <div className={`rounded w-80px text-center py-2 text-sm ${compliance === '合规' ? 'text-[#28A745]' : 'text-[#ED3A3A]'} ${
          compliance === '合规' ? 'bg-[#28A745]/15' : 'bg-[#ED3A3A]/15'
        }`}
        >
          {compliance}
        </div>
      ),
    },
    {
      title: '预计收益率',
      dataIndex: 'yield',
      key: 'yield',
      width: 120,
      render: yield_ => <span className="text-sm text-[#333333]">{yield_}</span>,
    },
    {
      title: '地区',
      dataIndex: 'region',
      key: 'region',
      width: 80,
      render: region => <span className="text-sm text-[#333333]">{region}</span>,
    },
    {
      title: '持有人数',
      dataIndex: 'holders',
      key: 'holders',
      width: 100,
      render: holders => <span className="text-sm text-[#333333]">{holders}</span>,
    },
  ];

  return (
    <div className="mt-[72px] text-[#333333] lg:px-12 md:px-4 md:pb-20">
      <section className="mx-auto w-full md:w-[80vw]">
        {/* 市场数据 */}
        <div className="rounded-lg p-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">市场数据</h2>
            <div className="text-sm text-[#777777]">
              统计截至时间: 2025-01-27 14:32:15
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
            {/* RWA 总资产规模 */}
            <div className="border-1px border-black/15 rounded-lg border-solid px-12 py-6">
              <div className="mb-4 flex items-center">
                <img src={zzcgmImg} alt="RWA" className="mr-2 h-[24px] w-[24px]" />
                <h3 className="m-0 text-sm text-[#777777]">RWA 总资产规模</h3>
              </div>
              <div className="mb-2">
                <span className="text-[36px] font-bold">$846B</span>
              </div>
              <div className="text-sm text-[#07C160]">
                +2.5% (24h)
              </div>
            </div>

            {/* 机构交易量(30d) */}
            <div className="border-1px border-black/15 rounded-lg border-solid px-12 py-6">
              <div className="mb-4 flex items-center">
                <img src={jgjylImg} alt="交易量" className="mr-2 h-[24px] w-[24px]" />
                <h3 className="m-0 text-sm font-semibold">机构交易量(30d)</h3>
              </div>
              <div className="mb-2">
                <span className="text-[36px] font-bold">$234.1</span>
              </div>
              <div className="text-sm text-[#07C160]">
                +2.5% 比上个月
              </div>
            </div>

            {/* 平均机构收益率 */}
            <div className="border-1px border-black/15 rounded-lg border-solid px-12 py-6">
              <div className="mb-4 flex items-center">
                <img src={pjjgsylImg} alt="收益率" className="mr-2 h-[24px] w-[24px]" />
                <h3 className="m-0 text-sm font-semibold">平均机构收益率</h3>
              </div>
              <div className="mb-2">
                <span className="text-[36px] font-bold">8.5%</span>
              </div>
              <div className="text-xs text-[#999999]">
                年化收益率(APY)
              </div>
            </div>

            {/* 活跃机构量 */}
            <div className="border-1px border-black/15 rounded-lg border-solid px-12 py-6">
              <div className="mb-4 flex items-center">
                <img src={hyjglImg} alt="活跃机构" className="mr-2 h-[24px] w-[24px]" />
                <h3 className="m-0 text-sm font-semibold">活跃机构量</h3>
              </div>
              <div className="mb-2">
                <span className="text-[36px] font-bold">47</span>
              </div>
              <div className="text-sm text-[#07C160]">
                本月新增量 +5
              </div>
            </div>
          </div>
        </div>
        {/* 项目列表 */}
        <div className="mt-8 px-8">
          {/* 标题和筛选器 */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl text-[#333333] font-bold">项目列表</h2>
            <div className="flex gap-2 md:gap-4">
              <Select
                placeholder="资产类别"
                className="w-120px!"
                options={[
                  { value: '', label: '全部' },
                  { value: 'stablecoin', label: '稳定币' },
                  { value: 'institutional', label: '机构基金' },
                  { value: 'real-estate', label: '不动产' },
                  { value: 'alternative', label: '另类资产' },
                  { value: 'bond', label: '债券' },
                  { value: 'private-credit', label: '私人信贷' },
                  { value: 'commodities', label: '大宗商品' },
                  { value: 'stock', label: '股票' },
                ]}
              />
              <Select
                placeholder="风险评级"
                className="w-120px!"
                options={[
                  { value: '', label: '全部' },
                  { value: 'AAA', label: 'AAA' },
                  { value: 'AA', label: 'AA' },
                  { value: 'A', label: 'A' },
                  { value: 'BB', label: 'BB' },
                  { value: 'B', label: 'B' },
                ]}
              />
            </div>
          </div>

          {/* 表格 */}
          <Table
            columns={columns}
            dataSource={tableData}
            onRow={record => ({
              onClick: () => {
                navigate('/home-details', {
                  state: {
                    projectData: record,
                  },
                });
              },
              style: { cursor: 'pointer' },
            })}
            pagination={{
              total: 20,
              pageSize: 10,
              current: currentPage,
              showSizeChanger: false,
              showQuickJumper: false,
              showTotal: (_total, _range) => `页码`,
              onChange: page => setCurrentPage(page),
              itemRender: (page, type, originalElement) => {
                if (type === 'page') {
                  return (
                    <div className={`h-full text-sm flex justify-center items-center rounded ${
                      page === currentPage ? 'bg-[#0055FF] text-white' : 'bg-[#0055FF0D] text-[#333333]'
                    }`}
                    >
                      {String(page).padStart(2, '0')}
                    </div>
                  );
                }

                return originalElement;
              },
            }}
            className="custom-table"
            scroll={{ x: 800 }}
            size="small"
          />
        </div>
      </section>
    </div>
  );
}

export default Bazaar;
