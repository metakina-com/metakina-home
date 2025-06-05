/**
 * @name LayoutContent
 * @desc 内容区域
 */
import RouterTransition from '@/components/RouterTransition.jsx';
import { FloatButton } from 'antd';
import { useRef } from 'react';
import { useOutlet } from 'react-router-dom';

function LayoutContent() {
  const currentOutlet = useOutlet();
  const mainRef = useRef(null);

  return (
    <main className="h-100% min-w-1200px w-100% overflow-y-auto p-15px" ref={mainRef}>
      <RouterTransition>{currentOutlet}</RouterTransition>
      <FloatButton.BackTop target={() => mainRef.current} visibilityHeight={100} />
    </main>
  );
}

export default LayoutContent;
