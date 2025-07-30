import hyjglImg from '@/assets/images/home/hyjgl.png';
import jgjylImg from '@/assets/images/home/jgjyl.png';
import pjjgsylImg from '@/assets/images/home/pjjgsyl.png';
import swzcImg from '@/assets/images/home/swzc.png';
import zzcgmImg from '@/assets/images/home/zzcgm.png';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const { projectData } = location.state || {};
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            return `${params[0].name}<br/>${params[0].value}`;
          },
        },
        grid: {
          left: '50px',
          right: '5%',
          bottom: '15%',
          top: '5%',
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          axisLine: {
            lineStyle: {
              color: '#E5E5E5',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#777777',
            fontSize: 12,
          },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          interval: 20,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#E5E5E5',
              type: 'dashed',
            },
          },
          axisLabel: {
            color: '#777777',
            fontSize: 12,
          },
        },
        series: [
          {
            name: '2020',
            type: 'line',
            data: [12, 13, 45, 45, 15, 76, 43, 68, 15, 15, 96, 56],
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              color: '#0055FF',
              width: 1,
            },
            itemStyle: {
              color: '#0055FF',
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 85, 255, 0.2)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 85, 255, 0.05)',
                  },
                ],
              },
            },
          },
        ],
      };

      chart.setOption(option);

      // 响应式处理
      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="mt-72px flex-1 bg-[#F5F5F5] pb-10 text-[#333333]">
      {/* 访问网站 */}
      <div className="mx-auto w-[80vw] pt-8 max-md:w-[96vw]">
        <div className="rounded-lg bg-white p-6 max-md:p-3">
          <div className="flex items-center justify-between max-md:flex-col">
            {/* 左侧图标和项目信息 */}
            <div className="flex items-center">
              {/* 蓝色圆形图标 */}
              <div className="mr-4 h-[98px] w-[98px] flex items-center justify-center rounded-full bg-[#0055FF]">
                <span className="text-[48px] text-white font-bold">
                  {projectData?.project?.icon || 'B'}
                </span>
              </div>

              {/* 项目信息 */}
              <div className="flex-1">
                <h2 className="m-0 text-[40px] max-md:text-[34px]">
                  {projectData?.project?.name || 'BlackRock BUIDL Fund'}
                </h2>
                <p className="text-[18px] text-[#777777]">
                  {projectData?.project?.description || '机智的设计师er'}
                </p>
              </div>
            </div>

            {/* 右侧访问按钮 */}
            <button type="button" className="cursor-pointer rounded-lg bg-[#165DFF] px-6 py-3 text-white transition-all duration-200 hover:scale-102">
              访问网站
            </button>
          </div>
        </div>
      </div>
      {/* 下部分 */}
      <div className="mx-auto w-[80vw] flex pt-8 max-md:w-[96vw]">
        {/* 左侧 */}
        <div className="w-[68%] bg-white">
          {/* 市场数据 */}
          <div className="rounded-lg p-6 max-md:p-3">
            <div className="mb-6 flex justify-between max-md:flex-col md:items-center">
              <h2 className="text-2xl font-bold">市场数据</h2>
              <div className="text-sm text-[#777777]">
                统计截至时间: 2025-01-27 14:32:15
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
              {/* 资产总值 */}
              <div className="border-1px border-black/15 rounded-lg border-solid px-6 py-4">
                <div className="mb-2 flex items-center">
                  <img src={zzcgmImg} alt="资产总值" className="mr-2 h-[24px] w-[24px]" />
                  <h3 className="m-0 text-sm text-[#777777]">资产总值 (TAV)</h3>
                </div>
                <div className="mb-2">
                  <span className="text-[24px] font-bold">$846B</span>
                </div>
                <div className="text-sm text-[#07C160]">
                  +2.5% (24h)
                </div>
              </div>

              {/* 资产净值  */}
              <div className="border-1px border-black/15 rounded-lg border-solid px-6 py-4">
                <div className="mb-2 flex items-center">
                  <img src={jgjylImg} alt="资产净值" className="mr-2 h-[24px] w-[24px]" />
                  <h3 className="m-0 text-sm font-semibold">资产净值 (NAV)</h3>
                </div>
                <div className="mb-2">
                  <span className="text-[24px] font-bold">$234.1</span>
                </div>
                <div className="text-sm text-[#07C160]">
                  +2.5% 比上个月
                </div>
              </div>

              {/* 预期年化收益率 */}
              <div className="border-1px border-black/15 rounded-lg border-solid px-6 py-4">
                <div className="mb-2 flex items-center">
                  <img src={pjjgsylImg} alt="预期年化收益率" className="mr-2 h-[24px] w-[24px]" />
                  <h3 className="m-0 text-sm font-semibold">预期年化收益率</h3>
                </div>
                <div className="mb-2">
                  <span className="text-[24px] font-bold">8.5%</span>
                </div>
                <div className="text-xs text-[#999999]">
                  年化收益率(APY)
                </div>
              </div>

              {/* 价格 */}
              <div className="border-1px border-black/15 rounded-lg border-solid px-6 py-4">
                <div className="mb-2 flex items-center">
                  <img src={hyjglImg} alt="价格" className="mr-2 h-[24px] w-[24px]" />
                  <h3 className="m-0 text-sm font-semibold">价格</h3>
                </div>
                <div className="mb-2">
                  <span className="text-[24px] font-bold">$ 100.00</span>
                </div>
                <div className="text-sm text-[#07C160]">
                  本月新增量 +5
                </div>
              </div>
            </div>
          </div>
          {/* 价格趋势 */}
          <div className="rounded-lg bg-white p-6 max-md:p-3">
            <h2 className="text-2xl font-bold">价格趋势</h2>

            <div ref={chartRef} className="h-64 w-full"></div>
          </div>
          {/* 项目详情 */}
          <div className="rounded-lg bg-white p-6 max-md:p-3">
            <h2 className="text-2xl font-bold">项目详情</h2>

            <div className="borders mt-4 rounded-lg p-6 !border-black/15">
              <p className="mb-4 text-[16px] text-[#777777] leading-6">
                本项目是位于纽约市曼哈顿中城第五大道的一栋标志性高级公寓楼。该资产共包含50个住宅单元,目前出租率达到98%。其优越的地理位置和高品质的物业管理,为投资者提供了持续且稳定的现金流收入。周边环绕着世界顶级的奢侈品商店、博物馆和中央公园,是全球最受欢迎的房地产投资地段之一。
              </p>

              <p className="text-[16px] text-[#777777] leading-6">
                Maple Finance is a decentralized corporate credit market. Maple provides transparent and efficient financing for institutional borrowers and offers sustainable yield opportunities for lenders. Lenders can earn yield by depositing funds into liquidity pools that fund institutional borrowers. The protocol utilizes "Pool Delegates"—vetted credit professionals—to assess and manage loans.
              </p>
            </div>
          </div>
          {/* 实物资产 */}
          <div className="rounded-lg bg-white p-6 max-md:p-3">
            <h2 className="text-2xl font-bold">实物资产</h2>

            <div className="mt-4 flex border border-[#0055FF1A] rounded-lg bg-[#0055FF05] p-6 max-md:flex-col">
              {/* 左侧图标区域 */}
              <div className="mr-6 w-1/3 flex items-center justify-center max-md:w-full">
                <img src={swzcImg} alt="实物资产" className="h-full w-full object-contain" />
              </div>

              {/* 右侧文本信息 */}
              <div className="flex flex-1 flex-col justify-between max-md:mt-8">
                <h3 className="mb-3 text-[22px] font-bold">市中心商业办公楼</h3>

                <div className="mb-4">
                  <span className="text-sm">类型:</span>
                  <span className="ml-2 rounded-full bg-[#0055FF]/20 px-3 py-1 text-sm text-[#0055FF]">房地产</span>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-[#999999]">资产总值(USDT)</div>
                  <div className="text-2xl font-bold">$850,000</div>
                </div>

                <p className="text-sm text-[#555555] leading-6">
                  位于城市中央商务区的甲级写字楼,共30层,拥有稳定的租金收入和高升值潜力。
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* 右侧 */}
        <div className="ml-2% w-[30%]">
          {/* 基本信息 */}
          <div className="mb-6 rounded-lg bg-white p-6 max-md:p-3">
            <h3 className="mb-4 text-[24px] font-semibold">基本信息</h3>
            <div className="text-sm space-y-3">
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 max-md:flex-col">
                <span className="text-[#777777]">总供应量</span>
                <span className="font-medium">100,000 META-NYC</span>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 max-md:flex-col">
                <span className="text-[#777777]">流通量</span>
                <span className="font-medium">75,000 META-NYC</span>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 max-md:flex-col">
                <span className="text-[#777777]">持有人</span>
                <span className="font-medium">1,258</span>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 max-md:flex-col">
                <span className="text-[#777777]">市值</span>
                <span className="font-medium">$7,500,000</span>
              </div>
            </div>
          </div>

          {/* 合规与评级 */}
          <div className="rounded-lg bg-white p-6 shadow-sm max-md:p-3">
            <h3 className="mb-4 text-[24px] font-semibold">合规与评级</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 text-sm max-md:flex-col md:items-center">
                <span className="text-[#777777]">项目评级</span>
                <div
                  className="w-80px rounded px-3 py-2 text-white font-bold"
                  style={{ background: 'linear-gradient(90deg, #004D40 0%, #2E7D3200 100%)' }}
                >
                  AAA
                </div>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 text-sm max-md:flex-col md:items-center">
                <span className="text-[#777777]">是否合规</span>
                <div className="w-80px rounded bg-[#28A745]/15 py-2 text-center text-[#28A745]">
                  合规
                </div>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 text-sm max-md:flex-col">
                <span className="text-[#777777]">评级机构</span>
                <span className="font-medium">RWA Analytics Inc.</span>
              </div>
              <div className="flex justify-between border-b-1px border-black/5 border-solid py-4 text-sm max-md:flex-col">
                <span className="text-[#777777]">司法管辖</span>
                <span className="font-medium">美国</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
