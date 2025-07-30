/*
 * @Author: D.YW
 */
import { create } from 'zustand';

const useLoginStore = create((set, get) => ({
  // 登录Modal的显示状态
  loginModalVisible: false,

  // 显示登录Modal
  showLoginModal: () => {
    set({ loginModalVisible: true });
  },

  // 隐藏登录Modal
  hideLoginModal: () => {
    set({ loginModalVisible: false });
  },

  // 处理登录成功
  handleLoginSuccess: (userData) => {
    // 这里可以处理登录成功后的逻辑
    // 比如保存用户信息到localStorage，更新用户状态等
    console.info('登录成功:', userData);

    // 隐藏Modal
    get().hideLoginModal();
  },
}));

export default useLoginStore;
