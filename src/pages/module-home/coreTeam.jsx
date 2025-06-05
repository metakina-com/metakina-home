import team1Img from '@/assets/images/home/team1.png';
import team2Img from '@/assets/images/home/team2.png';
import team3Img from '@/assets/images/home/team3.png';
import team4Img from '@/assets/images/home/team4.png';
import { Image } from 'antd';
import { useTranslation } from 'react-i18next';

export default function CoreTeam() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'member1',
      name: '黄文发',
      position: '(COO)',
      introduce: t('team.coo.description'),
      icon: team1Img,
    },
    {
      key: 'member2',
      name: '张强伟',
      position: '(CEO)',
      introduce: t('team.ceo.description'),
      icon: team2Img,
    },
    {
      key: 'member3',
      name: '朱银军',
      position: '(CTO)',
      introduce: t('team.cto.description'),
      icon: team3Img,
    },
    {
      key: 'member4',
      name: 'Taylor',
      position: '(CMO)',
      introduce: t('team.cmo.description'),
      icon: team4Img,
    },
  ];

  return (
    <div className="m-x-auto w-[85vw] px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
      <h1 className="mb-4 text-center text-3xl text-[#D900FF] font-bold lg:text-5xl md:text-4xl">
        {t('team.title')}
      </h1>
      <div className="grid grid-cols-1 mt-20 gap-10 md:grid-cols-4 md:mt-32">
        {teamMembers.map((items) => {
          return (
            <div key={items.key} className="text-center text-lg text-white md:text-2xl">
              <div className="flex justify-center">
                <Image src={items.icon} alt={items.name} width={100} height={100} className="w-[10rem]" />
              </div>
              <h2>{items.name}</h2>
              <h2>{items.position}</h2>
              <h3 className="mt-4 text-lg md:mt-8">{items.introduce}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
