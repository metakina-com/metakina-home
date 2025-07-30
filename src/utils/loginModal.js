/*
 * @Author: D.YW
 */
import useLoginStore from '@/stores/storeLogin.js';

// 全局函数：显示登录Modal
export function showLoginModal() {
  const { showLoginModal } = useLoginStore.getState();

  showLoginModal();
}

// 全局函数：隐藏登录Modal
export function hideLoginModal() {
  const { hideLoginModal } = useLoginStore.getState();

  hideLoginModal();
}

// 全局函数：处理登录成功
export function handleLoginSuccess(userData) {
  const { handleLoginSuccess } = useLoginStore.getState();

  handleLoginSuccess(userData);
}
