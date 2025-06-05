import path from 'node:path';
import process from 'node:process';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import million from 'million/compiler';
import postCssPxToRem from 'postcss-pxtorem';
import { visualizer } from 'rollup-plugin-visualizer';
import UnoCSS from 'unocss/vite';
import AutoDecimal from 'unplugin-auto-decimal/vite';
import Printer from 'unplugin-printer/vite';
import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import vitePluginNoBug from 'vite-plugin-no-bug';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    plugins: [
      tailwindcss(),
      AutoDecimal(),
      million.vite({
        auto: {
          threshold: 0.05,
        },
      }),
      react(),
      visualizer({ gzipSize: true }),
      viteCompression({
        algorithm: 'gzip',
        verbose: false,
        filter: /\.(js|css|html|svg|png|jpe?g|gif|webp|ico)$/,
        threshold: 10240, // 10kb以上的文件进行压缩
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      UnoCSS({
        configFile: './unocss.config.js',
      }),
      vitePluginNoBug(),
      Printer({
        info: [
          ({ lightCyan, green, bold }) => {
            return `  ${green('➜')}  ${bold('官网')}:  ${lightCyan('https://whyfail.github.io/cwa-docs')}`;
          },
        ],
      }),
      webUpdateNotice({
        notificationProps: {
          title: '系统升级通知',
          description: '检测到当前系统版本已更新，请刷新页面后使用',
          buttonText: '刷新',
          dismissButtonText: '忽略',
        },
      }),
      codeInspectorPlugin({
        bundler: 'vite',
      }),
    ],
    css: {
      postcss: {
        plugins: [
          env.VITE_USE_REM === 'true' && postCssPxToRem({
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['#app'],
          }),
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['> 1%'],
          }),
        ].filter(Boolean),
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: true,
      open: true,
      proxy: {
        '/PROXY': {
          target: 'http://xxxx',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/PROXY/, ''),
        },
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      chunkSizeWarningLimit: 1500,
      reportCompressedSize: false,
      // 图片优化配置
      assetsInlineLimit: 4096, // 4kb以下的图片会被转为base64
      // 图片压缩配置
      assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.ico', '**/*.svg'],
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 1000,
          manualChunks: {
            react: ['react', 'react-router-dom'],
            lodashEs: ['lodash-es'],
            antd: ['antd'],
            ahooks: ['ahooks'],
            antdStyle: ['antd-style'],
            zustand: ['zustand'],
          },
          // 静态资源分类打包
          // assetFileNames: (assetInfo) => {
          //   const info = assetInfo.fileName.split('.');
          //   let extType = info[info.length - 1];

          //   if (/\.(?:png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.fileName)) {
          //     extType = 'img';
          //   }

          //   return `static/${extType}/[name]-[hash][extname]`;
          // },
        },
      },
    },
  };
});
