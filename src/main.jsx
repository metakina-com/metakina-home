import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Loading from './components/Loading.jsx';
import 'antd/dist/reset.css';
import 'animate.css';
import 'virtual:uno.css';
import './assets/css/index.less';
import './App.css';
// 引入i18n配置
import './i18n/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </HashRouter>,
);
