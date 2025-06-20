/**
 * @name LayoutContent
 * @desc 内容区域
 */
import RouterTransition from '@/components/RouterTransition.jsx';
import { FloatButton } from 'antd';
import { useRef } from 'react';
import { useOutlet } from 'react-router-dom';
import LayoutFooter from './LayoutFooter.jsx';

function LayoutContent() {
  const currentOutlet = useOutlet();
  const mainRef = useRef(null);

  return (
    <div className="h-auto w-100% overflow-y-auto" ref={mainRef}>
      <RouterTransition>{currentOutlet}</RouterTransition>
      <FloatButton.BackTop target={() => mainRef.current} visibilityHeight={100} />
      <LayoutFooter />
    </div>
  );
}

export default LayoutContent;
