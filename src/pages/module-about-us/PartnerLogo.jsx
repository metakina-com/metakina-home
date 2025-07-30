import cooperation1Image from '@/assets/images/home/cooperation1.png';
import cooperation2Image from '@/assets/images/home/cooperation2.png';
import cooperation3Image from '@/assets/images/home/cooperation3.png';
import cooperation4Image from '@/assets/images/home/cooperation4.png';
import cooperation5Image from '@/assets/images/home/cooperation5.png';
import cooperation6Image from '@/assets/images/home/cooperation6.png';
import cooperation7Image from '@/assets/images/home/cooperation7.png';
import cooperation8Image from '@/assets/images/home/cooperation8.png';
import cooperation9Image from '@/assets/images/home/cooperation9.png';
import cooperation10Image from '@/assets/images/home/cooperation10.png';
import cooperation11Image from '@/assets/images/home/cooperation11.png';
import cooperation12Image from '@/assets/images/home/cooperation12.png';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function PartnerLogo() {
  const cooperationData = [
    {
      src: <img src={cooperation1Image} className="w-[2rem]" alt="Ethereum" />,
      name: 'Ethereum',
    },
    {
      src: <img src={cooperation2Image} className="w-[2rem]" alt="Solana" />,
      name: 'Solana',
    },
    {
      src: <img src={cooperation3Image} className="w-[2rem]" alt="Polygon" />,
      name: 'Polygon',
    },
    {
      src: <img src={cooperation4Image} className="w-[2rem]" alt="Binance" />,
      name: 'Binance',
    },
    {
      src: <img src={cooperation5Image} className="w-[2rem]" alt="MetaMask" />,
      name: 'MetaMask',
    },
    {
      src: <img src={cooperation6Image} className="w-[2rem]" alt="Chainlink" />,
      name: 'Chainlink',
    },
    {
      src: <img src={cooperation7Image} className="w-[2rem]" alt="OpenSea" />,
      name: 'OpenSea',
    },
    {
      src: <img src={cooperation8Image} className="w-[2rem]" alt="IPFS" />,
      name: 'IPFS',
    },
    {
      src: <img src={cooperation9Image} className="w-[2rem]" alt="thirdweb" />,
      name: 'thirdweb',
    },
    {
      src: <img src={cooperation10Image} className="w-[2rem]" alt="Kinachain" />,
      name: 'Kinachain',
    },
    {
      src: <img src={cooperation11Image} className="h-[51px] w-[85px]" alt="" />,
    },
    {
      src: <img src={cooperation12Image} className="h-[33px] w-[267px]" alt="" />,
    },
  ];

  // 动画参数
  const ITEM_WIDTH = 200; // 每个item的宽度
  const ITEM_COUNT = 6; // 显示的item数量
  const SCROLL_DISTANCE = ITEM_WIDTH * ITEM_COUNT; // 滚动距离
  const SCROLL_SPEED = 50; // 固定滚动速度（像素/秒）

  // DOM引用
  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  // 动画状态
  const topAnimationRef = useRef(null);
  const bottomAnimationRef = useRef(null);
  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(-SCROLL_DISTANCE);

  // 页面可见性状态
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);
  const [isTopPaused, setIsTopPaused] = useState(false);
  const [isBottomPaused, setIsBottomPaused] = useState(false);

  // 顶部滚动动画函数（向左移动）
  const animateTop = useCallback(() => {
    if (!isPageVisible || isTopPaused || !topScrollRef.current) return;

    const animate = () => {
      if (!topScrollRef.current || !isPageVisible || isTopPaused) return;

      // 计算移动距离（基于固定速度）
      topPositionRef.current -= SCROLL_SPEED / 60; // 60fps

      // 重置位置实现循环
      if (topPositionRef.current <= -SCROLL_DISTANCE) {
        topPositionRef.current = 0;
      }

      // 应用变换
      topScrollRef.current.style.transform = `translateX(${topPositionRef.current}px)`;

      // 继续动画
      topAnimationRef.current = requestAnimationFrame(animate);
    };

    topAnimationRef.current = requestAnimationFrame(animate);
  }, [isPageVisible, isTopPaused, SCROLL_DISTANCE, SCROLL_SPEED]);

  // 底部滚动动画函数（向右移动）
  const animateBottom = useCallback(() => {
    if (!isPageVisible || isBottomPaused || !bottomScrollRef.current) return;

    const animate = () => {
      if (!bottomScrollRef.current || !isPageVisible || isBottomPaused) return;

      // 计算移动距离（基于固定速度）
      bottomPositionRef.current += SCROLL_SPEED / 60; // 60fps

      // 重置位置实现循环
      if (bottomPositionRef.current >= 0) {
        bottomPositionRef.current = -SCROLL_DISTANCE;
      }

      // 应用变换
      bottomScrollRef.current.style.transform = `translateX(${bottomPositionRef.current}px)`;

      // 继续动画
      bottomAnimationRef.current = requestAnimationFrame(animate);
    };

    bottomAnimationRef.current = requestAnimationFrame(animate);
  }, [isPageVisible, isBottomPaused, SCROLL_DISTANCE, SCROLL_SPEED]);

  // 停止顶部动画
  const stopTopAnimation = useCallback(() => {
    if (topAnimationRef.current) {
      cancelAnimationFrame(topAnimationRef.current);
      topAnimationRef.current = null;
    }
  }, []);

  // 停止底部动画
  const stopBottomAnimation = useCallback(() => {
    if (bottomAnimationRef.current) {
      cancelAnimationFrame(bottomAnimationRef.current);
      bottomAnimationRef.current = null;
    }
  }, []);

  // 初始化动画
  useEffect(() => {
    animateTop();
    animateBottom();

    return () => {
      stopTopAnimation();
      stopBottomAnimation();
    };
  }, [animateTop, animateBottom, stopTopAnimation, stopBottomAnimation]);

  // 顶部鼠标事件处理
  const handleTopMouseEnter = useCallback(() => {
    setIsTopPaused(true);
    stopTopAnimation();
  }, [stopTopAnimation]);

  const handleTopMouseLeave = useCallback(() => {
    setIsTopPaused(false);
    animateTop();
  }, [animateTop]);

  // 底部鼠标事件处理
  const handleBottomMouseEnter = useCallback(() => {
    setIsBottomPaused(true);
    stopBottomAnimation();
  }, [stopBottomAnimation]);

  const handleBottomMouseLeave = useCallback(() => {
    setIsBottomPaused(false);
    animateBottom();
  }, [animateBottom]);

  // 监听标签页切换事件
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;

      setIsPageVisible(isVisible);

      if (!isVisible) {
        // 页面不可见时，暂停所有动画
        stopTopAnimation();
        stopBottomAnimation();
      } else {
        // 页面可见时，恢复动画
        if (!isTopPaused) {
          animateTop();
        }

        if (!isBottomPaused) {
          animateBottom();
        }
      }
    };

    // 添加事件监听器
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 清理函数：组件卸载时移除事件监听器
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopTopAnimation();
      stopBottomAnimation();
    };
  }, [isTopPaused, isBottomPaused, animateTop, animateBottom, stopTopAnimation, stopBottomAnimation]);

  return (
    <div id="partner" className="pt-20 text-black md:px-20">
      {/* 第一行 - 向左滚动 */}
      <div className="w-full overflow-hidden" style={{ height: 80 }}>
        <div
          ref={topScrollRef}
          style={{
            display: 'flex',
            width: SCROLL_DISTANCE * 2,
            willChange: 'transform',
          }}
        >
          {[...cooperationData.slice(0, 6), ...cooperationData.slice(0, 6)].map((item, index) => (
            <div
              key={index}
              className="mx-4 flex cursor-pointer items-center"
              style={{ minWidth: ITEM_WIDTH }}
              onMouseEnter={handleTopMouseEnter}
              onMouseLeave={handleTopMouseLeave}
            >
              {item.src}
              {item.name && <span className="pl-2 text-xl">{item.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 第二行 - 向右滚动 */}
      <div className="mt-8 w-full overflow-hidden" style={{ height: 80 }}>
        <div
          ref={bottomScrollRef}
          style={{
            display: 'flex',
            width: SCROLL_DISTANCE * 2,
            willChange: 'transform',
          }}
        >
          {[...cooperationData.slice(6), ...cooperationData.slice(6)].map((item, index) => (
            <div
              key={index}
              className="mx-4 flex cursor-pointer items-center"
              style={{ minWidth: ITEM_WIDTH }}
              onMouseEnter={handleBottomMouseEnter}
              onMouseLeave={handleBottomMouseLeave}
            >
              {item.src}
              {item.name && <span className="pl-2 text-xl">{item.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
