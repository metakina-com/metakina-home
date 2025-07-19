import hkba1Image from '@/assets/images/person/1.png';
import hkba2Image from '@/assets/images/person/2.png';
import hkba3Image from '@/assets/images/person/3.png';
import hkba4Image from '@/assets/images/person/4.png';
import hkba5Image from '@/assets/images/person/5.png';
import hkba6Image from '@/assets/images/person/6.png';
import hkba7Image from '@/assets/images/person/7.png';
import hkba8Image from '@/assets/images/person/8.png';
import hkba9Image from '@/assets/images/person/9.png';
import hkba10Image from '@/assets/images/person/10.webp';
import hkba11Image from '@/assets/images/person/11.webp';
import hkba12Image from '@/assets/images/person/12.webp';
import hkba13Image from '@/assets/images/person/13.webp';
import hkba14Image from '@/assets/images/person/14.webp';
import hkba15Image from '@/assets/images/person/15.webp';
import hkba16Image from '@/assets/images/person/16.webp';
import hkba17Image from '@/assets/images/person/17.webp';
import hkba18Image from '@/assets/images/person/18.webp';
import hkba19Image from '@/assets/images/person/19.webp';
import hkba20Image from '@/assets/images/person/20.webp';
import hkba21Image from '@/assets/images/person/21.webp';
import hkba22Image from '@/assets/images/person/22.png';
import hkba23Image from '@/assets/images/person/23.webp';
import hkba24Image from '@/assets/images/person/24.webp';
import hkba25Image from '@/assets/images/person/25.webp';
import hkba26Image from '@/assets/images/person/26.webp';
import hkba27Image from '@/assets/images/person/27.webp';
import hkba28Image from '@/assets/images/person/28.webp';
import hkba29Image from '@/assets/images/person/29.webp';
import hkba30Image from '@/assets/images/person/30.webp';
import hkba31Image from '@/assets/images/person/31.webp';
import hkba32Image from '@/assets/images/person/32.webp';
import hkba34Image from '@/assets/images/person/34.webp';
import enUSData from '@/i18n/locales/en-US/hkba.json';
import jaJPData from '@/i18n/locales/ja-JP/hkba.json';
import koKRData from '@/i18n/locales/ko-KR/hkba.json';
import zhCNData from '@/i18n/locales/zh-CN/hkba.json';
import zhTWData from '@/i18n/locales/zh-TW/hkba.json';

// 图片数组，按顺序对应人物
const images = [
  hkba1Image,
  hkba2Image,
  hkba3Image,
  hkba4Image,
  hkba5Image,
  hkba6Image,
  hkba7Image,
  hkba8Image,
  hkba9Image,
  hkba10Image,
  hkba11Image,
  hkba12Image,
  hkba13Image,
  hkba14Image,
  hkba15Image,
  hkba16Image,
  hkba17Image,
  hkba18Image,
  hkba19Image,
  hkba20Image,
  hkba21Image,
  hkba22Image,
  hkba23Image,
  hkba24Image,
  hkba25Image,
  hkba26Image,
  hkba27Image,
  hkba28Image,
  hkba29Image,
  hkba30Image,
  hkba31Image,
  hkba32Image,
  hkba34Image,
];

// 语言映射
const languageDataMap = {
  'zh': zhCNData,
  'zh-CN': zhCNData,
  'zh-TW': zhTWData,
  'en': enUSData,
  'en-US': enUSData,
  'ja': jaJPData,
  'ja-JP': jaJPData,
  'ko': koKRData,
  'ko-KR': koKRData,
};

// 获取国际化数据的函数
export function getHkbaData(language = 'zh') {
  const translationData = languageDataMap[language] || zhCNData;

  return translationData.members.map((member, index) => ({
    imgPath: images[index],
    zhName: member.zhName,
    enName: member.enName,
    introduce: member.introduce,
  }));
}

// 默认导出（为了兼容性，使用中文数据）
export const dataHkba = getHkbaData('zh');
