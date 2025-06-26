import { Typography } from 'antd';
import { memo, useEffect, useState } from 'react';

const { Paragraph } = Typography;

function SonHeader({
  title = '默认标题',
  description = '默认描述文本',
  backgroundImage,
  mobileBackgroundImage,
  titleClassName = '',
  descriptionClassName = '',
  containerClassName = '',
  contentWidth = '80vw',
}) {
  const [currentBgImage, setCurrentBgImage] = useState('');

  // 检测屏幕尺寸变化
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;

      // 根据屏幕尺寸选择背景图片
      if (mobile && mobileBackgroundImage) {
        setCurrentBgImage(mobileBackgroundImage);
      } else if (!mobile && backgroundImage) {
        setCurrentBgImage(backgroundImage);
      } else {
        // 回退逻辑：如果没有对应尺寸的图片，使用另一个
        setCurrentBgImage(backgroundImage || mobileBackgroundImage || '');
      }
    };

    // 初始检测
    checkScreenSize();

    // 监听窗口大小变化
    window.addEventListener('resize', checkScreenSize);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [backgroundImage, mobileBackgroundImage]);

  return (
    <div
      className={`min-h-[545px] flex ${containerClassName}`}
      style={{
        background: currentBgImage
          ? `url(${currentBgImage}) no-repeat center center / cover`
          : 'transparent',
        transition: 'background-image 0.3s ease-in-out', // 添加平滑过渡效果
      }}
    >
      <div
        className="mx-auto flex flex-col pt-15 md:justify-center md:px-8"
        style={{ width: contentWidth }}
      >
        <h2
          className={`mb-8 text-white mb-[2rem] text-[2rem] md:text-[3rem] ${titleClassName}`}
        >
          {title}
        </h2>

        <Paragraph
          className={`w-[90%] md:w-[50%] text-lg text-[12px] md:text-[1.5rem] text-white ${descriptionClassName}`}
          style={{ lineHeight: '1.8' }}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
}

export default memo(SonHeader);
