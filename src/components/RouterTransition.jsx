/**
 * 路由过渡动画组件
 */
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import 'nprogress/nprogress.css';

function RouterTransition({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    isLoading ? NProgress.start() : NProgress.done();
  }, [isLoading]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        unmountOnExit
        appear
        timeout={500}
        classNames="dg"
        onEnter={() => {
          setIsLoading(true);
        }}
        onEntered={() => {
          setIsLoading(false);
          // 在路由切换完成后滚动到顶部
          // 使用 requestAnimationFrame 确保在下一帧执行滚动
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              // 双重 requestAnimationFrame 确保页面完全渲染完成
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto',
              });
            });
          });
        }}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default RouterTransition;
