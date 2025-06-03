import team1Img from "@/public/home/team1.png";
import team2Img from "@/public/home/team2.png";
import team3Img from "@/public/home/team3.png";
import team4Img from "@/public/home/team4.png";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CoreTeam() {
  const t = useTranslations('team');

  const teamMembers = [
    {
      key: 'member1',
      name: '黄文发',
      position: '(COO)',
      introduce: t('coo.description'),
      icon: team1Img,
    },
    {
      key: 'member2',
      name: '张强伟',
      position: '(CEO)',
      introduce: t('ceo.description'),
      icon: team2Img,
    },
    {
      key: 'member3',
      name: '朱银军',
      position: '(CTO)',
      introduce: t('cto.description'),
      icon: team3Img,
    },
    {
      key: 'member4',
      name: 'Taylor',
      position: '(CMO)',
      introduce: t('cmo.description'),
      icon: team4Img,
    }
  ]

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24 text-white ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4 text-[#D900FF]" >
        {t('title')}
      </h1>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-4 md:mt-32 mt-20'>
        {teamMembers.map((items) => {
          return (
            <div key={items.key} className='text-white text-lg md:text-2xl text-center'>
              <div className="flex justify-center ">
                <Image src={items.icon.src} alt={items.name} width={100} height={100} className="w-[10rem]" />
              </div>
              <h2>{items.name}</h2>
              <h2>{items.position}</h2>
              <h3 className="mt-4 md:mt-8 text-lg ">{items.introduce}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}


