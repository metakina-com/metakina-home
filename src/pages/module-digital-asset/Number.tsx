import SectionTitle from '@/components/SectionTitle.tsx';
import { Col, Row } from 'antd';

interface Advantage {
  icon: string
  title: string
  description: string
}

interface DigitalAssetAdvantagesProps {
  advantages: Advantage[]
  title: string
}

function DigitalAssetAdvantages({ advantages, title }: DigitalAssetAdvantagesProps) {
  return (
    <div className="mx-auto mb-20 w-[80vw] bg-white">
      <SectionTitle title={title} />

      <Row gutter={[48, 40]} className="mt-12" justify="space-between">
        {advantages.map((advantage, index) => (
          <Col key={index} xs={24} md={11} className="flex">
            <div className="w-full flex items-start border border-[#DDDDDD] rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-lg space-x-6">
              {/* 图标区域 */}
              <div
                className="m-0 h-[45px] w-[45px]"
              >
                <img
                  src={advantage.icon}
                  alt={advantage.title}
                  className="object-cover"
                />
              </div>

              {/* 内容区域 */}
              <div className="flex-1">
                <h3 className="mb-3 text-[1.5rem] text-gray-900 font-semibold leading-tight !leading-[50px]">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>

  );
}

export default DigitalAssetAdvantages;
