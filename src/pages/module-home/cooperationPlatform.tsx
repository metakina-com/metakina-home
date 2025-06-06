import alImg from '@/assets/images/home/al.png';
import awsImg from '@/assets/images/home/aws.png';
import binanceImg from '@/assets/images/home/binance.png';
import ChainlinkImg from '@/assets/images/home/Chainlink.png';
import eImg from '@/assets/images/home/e.png';
import IPFSImg from '@/assets/images/home/IPFS.png';
import kImg from '@/assets/images/home/k.png';
import metamaskImg from '@/assets/images/home/metamask.png';
import openseaImg from '@/assets/images/home/opensea.png';
import pImg from '@/assets/images/home/p.png';
import platformImg from '@/assets/images/home/platform.png';
import sImg from '@/assets/images/home/s.png';
import thImg from '@/assets/images/home/th.png';
import { Image } from 'antd';
import { useTranslation } from 'react-i18next';

function CollaborationPlatform() {
  const { t } = useTranslation();

  const partners = [
    { name: 'Binance', logo: binanceImg, width: 32, height: 32 },
    { name: 'MetaMask', logo: metamaskImg, width: 32, height: 32 },
    { name: 'Chainlink', logo: ChainlinkImg, width: 32, height: 32 },
    { name: 'Kinachain', logo: kImg, width: 48, height: 32 },
    { name: 'AWS', logo: awsImg, isImage: true },
    { name: 'Alibaba Cloud', logo: alImg, isImage: true, width: '86%' },
    { name: 'Ethereum', logo: eImg, width: 32, height: 32 },
    { name: 'Solana', logo: sImg, width: 32, height: 32 },
    { name: 'Polygon', logo: pImg, width: 32, height: 32 },
    { name: 'OpenSea', logo: openseaImg, width: 32, height: 32 },
    { name: 'IPFS', logo: IPFSImg, width: 32, height: 32 },
    { name: 'thirdweb', logo: thImg, width: 32, height: 32 },
  ];

  return (
    <div className="m-x-auto w-[85vw] px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
      <div className="w-full flex flex-wrap items-center gap-36">
        {/* 左侧标题 */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl text-[#D900FF] font-bold lg:text-5xl md:text-4xl md:text-4xl">
            {t('platform.title')}
          </h1>
        </div>

        {/* 右侧合作伙伴展示区域 */}
        <div className="flex-1">
          {/* 紫色光效背景 */}
          {/* <div className="absolute -inset-4 bg-purple-600/20 blur-xl rounded-3xl"></div> */}

          {/* 主容器 */}
          <div className="p-12 md:p-24" style={{ background: `url(${platformImg}) no-repeat center center/100% 100%` }}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-x-20 md:gap-y-12">
              {partners.map((partner, index) => (
                <div key={`${index}coo`} className="group flex items-center justify-center gap-3">
                  {/* Logo占位符 */}
                  {partner.isImage
                    ? (
                        <img src={partner.logo} alt="partner.name" width={partner?.width} />
                      )
                    : (
                        <>
                          <div className="flex cursor-pointer items-center justify-center group-hover:bg-gray-600/50">
                            <Image src={partner.logo} alt="partner.name" width={partner.width} height={partner.height} />
                          </div>

                          {/* 合作伙伴名称 */}
                          <span className="cursor-pointer text-lg text-white font-medium group-hover:text-purple-300">
                            {partner.name}
                          </span>
                        </>
                      )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationPlatform;
