import { isLogin } from '@/utils/auth.js';
import { App as AntdApp } from 'antd';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function RouterAuth(props) {
  const { meta, children } = props;
  const { message } = AntdApp.useApp();

  // 设置标题
  if (meta && meta.title) {
    document.title = `${import.meta.env.VITE_APP_NAME} - ${meta.title}`;
  }

  // 权限登录校验
  const needLogin = meta && meta.needLogin && !isLogin();

  useEffect(() => {
    if (needLogin) {
      message.error('请先登录!');
    }
  }, [meta, message]);

  if (needLogin) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return <>{children}</>;
}

export default RouterAuth;
