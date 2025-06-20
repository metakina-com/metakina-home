import { px2rem } from '@/utils/px2rem.js';
import { App as AntdApp, ConfigProvider } from 'antd';
import { StyleProvider } from 'antd-style';
import dayjs from 'dayjs';
import { useRoutes } from 'react-router-dom';
import PageTitle from './components/PageTitle.jsx';
import routes, { transformRoutes } from './routes/index.jsx';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const isUseRem = import.meta.env.VITE_USE_REM === 'true';

export default function App() {
  const pages = useRoutes(transformRoutes(routes));

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
