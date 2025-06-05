/**
 * 默认使用的字体基础大小
 */
export const BASE_FONT_SIZE = 16;

/**
 * 默认支持最小分辨率
 * 移动端最小宽度设置为320px（iPhone SE等小屏设备）
 * 移动端最小高度设置为480px
 */
export const BASE_MIN_VW_VH = { VW: 320, VH: 480 };

/**
 * 响应式断点
 */
export const BREAKPOINTS = {
  xs: 320, // 超小屏幕（手机）
  sm: 576, // 小屏幕（平板）
  md: 768, // 中等屏幕
  lg: 992, // 大屏幕
  xl: 1200, // 超大屏幕
  xxl: 1660, // 原桌面端尺寸
};
