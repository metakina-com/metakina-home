import aImg from "@/public/home/a.png";
import bImg from "@/public/home/b.png";
import eImg from "@/public/home/e.png";
import hImg from "@/public/home/h.png";
import pImg from "@/public/home/p.png";
import sImg from "@/public/home/s.png";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export default function Consult() {
  const t = useTranslations("Consult");

  const cooperation = [
    {
      icon: eImg.src,
      title: 'Ethereum'
    },
    {
      icon: pImg.src,
      title: 'Polygon'
    },
    {
      icon: aImg.src,
      title: 'Avalanche'
    },
    {
      icon: bImg.src,
      title: 'BNB Chain'
    },
    {
      icon: sImg.src,
      title: 'Solana'
    },
    {
      icon: hImg.src,
      title: 'Hyperledger'
    }
  ]


  return (
    <div>
      <div className="text-white relative left-0 px-8 md:px-16 lg:px-24 pt-32 h-[80vh] flex items-center">
        <div>
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D900FF]">
              {t('logo')}
            </h1>
          </div>

          {/* 主标题 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl  mb-8 leading-tight">
            {t('title')}
          </h2>

          {/* 副标题 */}
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            {t('subtitle')}
          </p>

          {/* 申请按钮 */}
          <button
            className="px-8 py-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, #D900FF 0%, #2F4EE8 50%, #006EFF 100%)`,
              boxShadow: '0 4px 20px rgba(217, 0, 255, 0.3)'
            }}
          >
            {t('button')}
          </button>

        </div>
      </div>
      <div className="text-white pt-20 md:pt-32 w-[85vw] flex flex-wrap justify-between px-8 md:px-16 lg:px-24" >
        {
          cooperation.map((item, index) => {
            return (
              <div key={index + 'co'} className="flex items-center mb-8">
                <Image src={item.icon} alt={item.title} width={32} height={32} />
                <p className="text-lg font-bold ">{item.title}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}