/*
 * @Author: D.YW
 */
import { Form, Modal } from 'antd';
import { memo, useState } from 'react';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';

const LoginModal = memo(({ visible, onCancel, onLogin, onRegister }) => {
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState('login'); // 'login' 或 'register'

  const handleCancel = () => {
    form.resetFields();
    setCurrentPage('login'); // 重置为登录页面
    onCancel();
  };

  const handleSwitchToRegister = () => {
    setCurrentPage('register');
  };

  const handleSwitchToLogin = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = (userData) => {
    onLogin?.(userData);
  };

  const handleRegisterSuccess = (userData) => {
    onRegister?.(userData);
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={480}
      maskClosable={false}
      centered
      styles={{
        body: {
          padding: '40px',
          backgroundColor: '#fff',
        },
        header: {
          display: 'none',
        },
      }}
    >
      {currentPage === 'login'
        ? (
            <LoginPage
              onSwitchToRegister={handleSwitchToRegister}
              onLogin={handleLoginSuccess}
            />
          )
        : (
            <RegistrationPage
              onSwitchToLogin={handleSwitchToLogin}
              onRegister={handleRegisterSuccess}
            />
          )}
    </Modal>
  );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
