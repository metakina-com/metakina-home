import heguiImg from '@/assets/images/home/hegui.png';
import liuchengImg from '@/assets/images/home/liucheng.png';
import mokuaiImg from '@/assets/images/home/mokuai.png';
import shengtaiImg from '@/assets/images/home/shengtai.png';
import shujuImg from '@/assets/images/home/shuju.png';
import zichanImg from '@/assets/images/home/zichan.png';
import SectionTitle from '@/components/SectionTitle.jsx';
import { Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export default function RWASolutionsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    if (path) {
      navigate(path);
      // 等待页面跳转完成后再滚动到顶部
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  const solutions = [
    {
      key: 'assetDigital',
      title: t('solutions.assetDigital.title'),
      description: t('solutions.assetDigital.description'),
      link: t('solutions.common.learnMore'),
      icon: zichanImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/digital-asset',
    },
    {
      key: 'crossBorder',
      title: t('solutions.crossBorder.title'),
      description: t('solutions.crossBorder.description'),
      link: t('solutions.common.learnMore'),
      icon: heguiImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/cross-border-funding',
    },
    {
      key: 'compliance',
      title: t('solutions.compliance.title'),
      description: t('solutions.compliance.description'),
      link: t('solutions.common.learnMore'),
      icon: liuchengImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/process-assurance',
    },
    {
      key: 'ecosystem',
      title: t('solutions.ecosystem.title'),
      description: t('solutions.ecosystem.description'),
      link: t('solutions.common.learnMore'),
      icon: shengtaiImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/customization',
    },
    {
      key: 'dataFinance',
      title: t('solutions.dataFinance.title'),
      description: t('solutions.dataFinance.description'),
      link: t('solutions.common.learnMore'),
      icon: shujuImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/asset-financialization',
    },
    {
      key: 'modular',
      title: t('solutions.modular.title'),
      description: t('solutions.modular.description'),
      link: t('solutions.common.learnMore'),
      icon: mokuaiImg,
      gradient: 'from-gray-800 to-gray-900',
      path: '/market-operation',

    },
  ];

  return (
    <div id="solutions-section" className="bg-[#EEF4FA] md:pt-[72px]">
      <div className="m-x-auto w-[85vw] pb-24 pt-14 lg:px-24 md:px-16 md:pt-10">
        {/* 标题区域 */}
        <Space direction="vertical" size="large" className="mb-16 w-full">
          <div className="text-center">
            <SectionTitle title={t('solutions.sectionTitle')} mainTitle={t('solutions.mainTitle')} />
          </div>
        </Space>

        {/* 解决方案网格 */}
        <Row gutter={[24, 24]} className="w-full">
          {solutions.map(solution => (
            <Col
              key={solution.key}
              xs={24}
              md={12}
              lg={8}
              className="w-full"
            >
              <Card
                className="group h-full cursor-pointer overflow-hidden border-0 rounded-2xl p-0 transition-all duration-500 hover:scale-101"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #E8F0FF 100%)',
                }}
                styles={{
                  body: {
                    padding: '32px',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  },
                }}
                hoverable
                cover={false}
              >
                {/* 图标 */}
                <div className="mb-6 block group-hover:hidden">
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    className="h-12 w-12 object-contain"
                    preview={false}
                  />
                </div>

                {/* 卡片内容 */}
                <div className="relative flex-1">
                  <Title
                    level={3}
                    className="!mb-4 !text-xl !text-gray-800 !font-semibold md:!text-2xl group-hover:!text-white"
                  >
                    {solution.title}
                  </Title>
                  <Paragraph
                    className="!mb-6 !text-sm !text-gray-800 !leading-relaxed !opacity-90 group-hover:!text-white"
                  >
                    {solution.description}
                  </Paragraph>
                  <div className="flex items-center justify-start">
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => handleLearnMore(solution.path)}
                      className="hidden h-[32px] w-[114px] rounded-full bg-white font-medium leading-[32px] transition-all duration-300 !text-[#0055FF] group-hover:!inline-block hover:!bg-gray-50"
                      style={{
                        border: 'none',
                        color: '#0055FF',
                        backgroundColor: 'white',
                      }}
                    >
                      {solution.link}
                    </Button>
                  </div>
                </div>

                {/* 悬停效果装饰 */}
                <div className="absolute h-24 w-24 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 -right-4 -top-4 group-hover:opacity-100" />
                <div className="absolute h-16 w-16 rounded-full bg-white/5 opacity-0 transition-opacity duration-500 -bottom-4 -left-4 group-hover:opacity-100" />

                {/* 悬停时的背景渐变效果 */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 from-[#2F4EE8] to-[#0066FF] bg-gradient-to-br -z-1 group-hover:opacity-100" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
