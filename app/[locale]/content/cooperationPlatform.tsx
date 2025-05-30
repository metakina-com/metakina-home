import ChainlinkImg from "@/public/home/Chainlink.png";
import IPFSImg from "@/public/home/IPFS.png";
import alImg from "@/public/home/al.png";
import awsImg from "@/public/home/aws.png";
import binanceImg from "@/public/home/binance.png";
import eImg from "@/public/home/e.png";
import kImg from "@/public/home/k.png";
import metamaskImg from "@/public/home/metamask.png";
import openseaImg from "@/public/home/opensea.png";
import pImg from "@/public/home/p.png";
import platformImg from "@/public/home/platform.png";
import sImg from "@/public/home/s.png";
import thImg from "@/public/home/th.png";
import { useTranslations } from "next-intl";
import Image from 'next/image';

const CollaborationPlatform = () => {
  const t = useTranslations("platform");

  const partners = [
    { name: 'Binance', logo: binanceImg },
    { name: 'MetaMask', logo: metamaskImg },
    { name: 'Chainlink', logo: ChainlinkImg },
    { name: 'Kinachain', logo: kImg },
    { name: 'AWS', logo: awsImg, isImage: true },
    { name: 'Alibaba Cloud', logo: alImg, isImage: true, width: '86%' },
    { name: 'Ethereum', logo: eImg },
    { name: 'Solana', logo: sImg },
    { name: 'Polygon', logo: pImg },
    { name: 'OpenSea', logo: openseaImg },
    { name: 'IPFS', logo: IPFSImg },
    { name: 'thirdweb', logo: thImg }
  ];

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24 text-white">
      <div className="w-full flex items-center gap-36 flex-wrap">
        {/* 左侧标题 */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:text-4xl font-bold text-[#D900FF]">
            {t('title')}
          </h1>
        </div>

        {/* 右侧合作伙伴展示区域 */}
        <div className="flex-1 ">
          {/* 紫色光效背景 */}
          {/* <div className="absolute -inset-4 bg-purple-600/20 blur-xl rounded-3xl"></div> */}

          {/* 主容器 */}
          <div className="p-12  md:p-24" style={{ background: `url(${platformImg.src}) no-repeat center center/100% 100%` }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-20  gap-y-6 md:gap-y-12">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center gap-3 group">
                  {/* Logo占位符 */}
                  {partner.isImage ? (<img src={partner.logo.src} alt="partner.name" width={partner.width} />) : (
                    <>
                      <div className=" flex items-center justify-center group-hover:bg-gray-600/50 ">
                        <Image src={partner.logo.src} alt="partner.name" width={32} height={32} />
                      </div>

                      {/* 合作伙伴名称 */}
                      <span className="text-white font-medium text-lg group-hover:text-purple-300">
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
};

export default CollaborationPlatform;