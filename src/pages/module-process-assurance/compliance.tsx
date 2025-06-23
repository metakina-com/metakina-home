import SectionTitle from '@/components/SectionTitle.tsx';
import { Col, Row } from 'antd';

function Compliance({ className, title, img, dataList, reverse = false }: {
  className: string
  title: string
  img: string
  dataList: Array<{ title: string, description: string }>
  reverse?: boolean
}) {
  const data = dataList;

  return (
    <div className={`mx-auto mb-20 w-[80vw] bg-white ${className}`}>
      <SectionTitle title={title} />

      <div className="mt-12">
        <Row gutter={[48, 40]}>
          {
            reverse
              ? (
                  <>
                    <Col xs={24} md={12} className="flex-1">
                      <div className="h-full flex flex-col justify-between">
                        {
                          data.map((item, index) => (
                            <div key={index} style={{ height: `calc((100% - 1% * ${data.length}) / ${data.length})` }} className="group cursor-pointer border border-gray-200 rounded-lg p-6 hover:bg-blue-500 hover:text-white">
                              <h3 className="mb-4 text-[20px] font-semibold md:text-2xl">{item.title}</h3>
                              <p className="text-[14px] text-[#333333] leading-relaxed md:text-[1rem] group-hover:text-white">{item.description}</p>
                            </div>
                          ))
                        }
                      </div>
                    </Col>
                    <Col xs={24} md={12}>
                      <div className="flex rounded-lg">
                        {/* 这里可以放置设计图中的立方体图片 */}
                        <img src={img} className="flex-1" alt={title} />
                      </div>
                    </Col>
                  </>
                )
              : (
                  <>
                    <Col xs={24} md={12}>
                      <div className="flex rounded-lg">
                        {/* 这里可以放置设计图中的立方体图片 */}
                        <img src={img} className="flex-1" alt={title} />
                      </div>
                    </Col>
                    <Col xs={24} md={12} className="flex-1">
                      <div className="h-full flex flex-col justify-between">
                        {
                          data.map((item, index) => (
                            <div key={index} style={{ height: `calc((100% - 1% * ${data.length}) / ${data.length})` }} className="group cursor-pointer border border-gray-200 rounded-lg p-6 hover:bg-blue-500 hover:text-white">
                              <h3 className="mb-4 text-[20px] font-semibold md:text-2xl">{item.title}</h3>
                              <p className="text-[14px] text-[#333333] leading-relaxed md:text-[1rem] group-hover:text-white">{item.description}</p>
                            </div>
                          ))
                        }
                      </div>
                    </Col>
                  </>
                )
          }
        </Row>
      </div>
    </div>
  );
}

export default Compliance;
