import { px2remTransformer } from '@ant-design/cssinjs';

// 获取当前根元素的 font-size
function getRootFontSize() {
  const rootFontSize = window.getComputedStyle(document.documentElement).fontSize;

  return Number.parseFloat(rootFontSize);
}

// 创建 px2rem 转换器
export const px2rem = px2remTransformer({
  rootValue: 16, // 默认根字体大小
});

// 更新 px2rem 转换器的根字体大小
export function updatePx2rem() {
  const rootFontSize = getRootFontSize();

  return px2remTransformer({
    rootValue: rootFontSize,
  });
}
