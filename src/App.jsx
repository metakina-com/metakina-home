/*
 * @Author: D.YW
 */
// import { px2rem } from '@/utils/px2rem.js';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { useEventListener } from 'ahooks';
import { App as AntdApp, ConfigProvider } from 'antd';
// import { StyleProvider } from 'antd-style';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import PageTitle from './components/PageTitle.jsx';
import { setHtmlRem } from './plugins/plugin-set-rem.js';
import routes, { transformRoutes } from './routes/index.jsx';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const isUseRem = import.meta.env.VITE_USE_REM === 'true';

export default function App() {
  const pages = useRoutes(transformRoutes(routes));
  const [px2rem, setPx2rem] = useState(
    px2remTransformer({
      rootValue: 16,
    }),
  );

  // 设置rem执行函数
  const handleSetRem = () => {
    setHtmlRem();
    // 获取屏幕宽度
    setPx2rem(px2remTransformer({ rootValue: document.documentElement.style.fontSize.replace('px', '') }));
  };

  // 进入项目时设置一次单位大小
  useEffect(() => {
    if (isUseRem) handleSetRem();
  }, []);

  // 改变窗口大小时重新设置单位大小
  useEventListener('resize', () => isUseRem && handleSetRem());

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0077FC',
        },
      }}
    >
      <AntdApp message={{ maxCount: 1 }} style={{ width: '100%', height: '100%' }}>
        <PageTitle />
        {isUseRem ? <StyleProvider transformers={[px2rem]}>{pages}</StyleProvider> : pages}
      </AntdApp>
    </ConfigProvider>
  );
}
