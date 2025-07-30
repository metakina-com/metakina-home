/*
 * @Author: D.YW
 */
import LoginModal from '@/pages/module-login/LoginModal.jsx';
import useLoginStore from '@/stores/storeLogin.js';
import { memo } from 'react';

const GlobalLoginModal = memo(() => {
  const { loginModalVisible, hideLoginModal, handleLoginSuccess } = useLoginStore();

  return (
    <LoginModal
      visible={loginModalVisible}
      onCancel={hideLoginModal}
      onLogin={handleLoginSuccess}
      onRegister={(userData) => {
        console.info('注册成功:', userData);
        hideLoginModal();
      }}
    />
  );
});

GlobalLoginModal.displayName = 'GlobalLoginModal';

export default GlobalLoginModal;
