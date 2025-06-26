/**
 * 路由配置文件
 */
import CommonError from '@/components/CommonError.jsx';
import Router404 from '@/components/Router404.jsx';
import RouterAuth from '@/components/RouterAuth.jsx';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 路由懒加载
/* eslint-disable react-refresh/only-export-components */
const Index = lazy(() => import('../pages/index.jsx'));
const HomeIndex = lazy(() => import('../pages/module-home/index.jsx'));
const TextIndex = lazy(() => import('../pages/module-test/index.jsx'));
const PrivacyPolicy = lazy(() => import('../pages/module-footer/PrivacyPolicy.jsx'));
const ServiceTerms = lazy(() => import('../pages/module-footer/ServiceTerms.tsx'));
const RWAApplicationForm = lazy(() => import('../pages/module-client/index.jsx'));
const DigitalAsset = lazy(() => import('../pages/module-digital-asset/index.jsx'));
const CrossBorderFunding = lazy(() => import('../pages/module-cross-border-funding/index.jsx'));
const ProcessAssurance = lazy(() => import('../pages/module-process-assurance/index.jsx'));
const MarketOperation = lazy(() => import('../pages/module-market-operation/index.jsx'));
const AssetFinancialization = lazy(() => import('../pages/module-asset-financialization/index.jsx'));
const Customization = lazy(() => import('../pages/module-customization/index.jsx'));
const QuotationAndProposal = lazy(() => import('../pages/module-quotation-and-proposal/index.jsx'));

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    element: <Index />,
    errorElement: <CommonError />,
    meta: {
      title: '首页',
      needLogin: false,
    },
    children: [
      {
        path: 'home',
        element: <HomeIndex />,
        meta: {
          title: '首页',
          needLogin: false,
        },
      },
      {
        path: 'test',
        element: <TextIndex />,
        meta: {
          title: '测试页面',
          needLogin: false,
        },
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
        meta: {
          title: '隐私政策',
          needLogin: false,
        },
      },
      {
        path: 'service-terms',
        element: <ServiceTerms />,
        meta: {
          title: '服务条款',
          needLogin: false,
        },
      },
      {
        path: 'apply',
        element: <RWAApplicationForm />,
        meta: {
          title: 'RWA项目申请',
          needLogin: false,
        },
      },
      {
        path: 'digital-asset',
        element: <DigitalAsset />,
        meta: {
          title: '资产数字化',
          needLogin: false,
        },
      },
      {
        path: 'cross-border-funding',
        element: <CrossBorderFunding />,
        meta: {
          title: '合规跨境融资促进',
          needLogin: false,
        },
      },
      {
        path: 'process-assurance',
        element: <ProcessAssurance />,
        meta: {
          title: '全流程合规保障',
          needLogin: false,
        },
      },
      {
        path: 'market-operation',
        element: <MarketOperation />,
        meta: {
          title: '生态与市场运营',
          needLogin: false,
        },
      },
      {
        path: 'asset-financialization',
        element: <AssetFinancialization />,
        meta: {
          title: '数据资产金融化',
          needLogin: false,
        },
      },
      {
        path: 'customization',
        element: <Customization />,
        meta: {
          title: '模块化与定制化',
          needLogin: false,
        },
      },
      {
        path: 'quotation-and-proposal',
        element: <QuotationAndProposal />,
        meta: {
          title: '报价与合作方案',
          needLogin: false,
        },
      },
    ],
  },
  // 放最后
  {
    path: '*',
    element: <Router404 />,
    meta: {
      title: '404',
      needLogin: false,
    },
  },
];

// HOC
function authLoad(element, meta = {}) {
  return <RouterAuth meta={meta}>{element}</RouterAuth>;
}

// 路由配置列表数据转换
export function transformRoutes(routes) {
  const list = [];

  routes.forEach((route) => {
    const obj = { ...route };

    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace />;
    }

    if (obj.element) {
      obj.element = authLoad(obj.element, obj.meta);
    }

    delete obj.redirect;
    delete obj.meta;

    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }

    list.push(obj);
  });

  return list;
}

export default routes;
