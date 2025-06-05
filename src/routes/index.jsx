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
