// import LayoutSider from './LayoutSider.jsx';
/**
 * 布局
 */
// import useStoreSystem from '@/stores/storeSystem.js';
import { Layout } from 'antd';
import { memo } from 'react';
import LayoutContent from './LayoutContent.jsx';
import LayoutHeader from './LayoutHeader.jsx';

const LayoutIndex = memo(() => {
  // const systemMenuFull = useStoreSystem(state => state.systemMenuFull);

  return (
    <div className="h-full">
      <Layout.Header className="fixed inset-x-[2vw] top-5 z-50 h-18 w-[96vw] flex rounded-2xl bg-[rgba(255,255,255,0.2)] p-0 text-white shadow-md">
        <LayoutHeader />
      </Layout.Header>
      {/* <Layout hasSider className="mt-20 bg-[rgba(255,255,255,0)]"> */}
      {/* <Layout.Sider theme="light" collapsed={!systemMenuFull}>
          <LayoutSider />
        </Layout.Sider> */}
      {/* <Layout.Content> */}
      <LayoutContent />
      {/* </Layout.Content> */}
      {/* </Layout> */}
    </div>
  );
});

LayoutIndex.displayName = 'LayoutIndex';

export default LayoutIndex;
