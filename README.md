#### 项目名称

- 项目名称

#### 下载依赖

```
npm install
```

#### 启动服务

```
npm run start
```

#### 项目打包

```
npm run build
```

提交信息应遵守以下规范：

```bash
"[HEAD] 详细信息"
```

其中 **详细信息** 应尽可能详细，要能说明问题，`[HEAD]` 可取：

```
[初始化]
[依赖]
[文档]
[功能]
[修复]
[优化]
```

示例：

```
[初始化] 项目初始化
[依赖] 添加 AntDesign React UI 组件库
[功能] 新添加登陆页面
[功能] 登录页面添加登录信息校验流程
[修复] 主界面白屏修复
```

#### git 提交方案

- 多人协作的情况下，提交 git 的时候就会出现提交分支混乱的情况，为避免这样情况，可以使用如下方案进行提交，可以避免很多意外情况。

```
git add -A
git commit -m "[描述]"
git pull --rebase
```

1. 执行完 git pull --rebase 后如果有 succeed 字样，就表示没有冲突，直接 git push

2. 执行完 git pull --rebase`后如果有冲突，本地如果有冲突，手动解决冲突后：

```
git add -A
git rebase --continue ，// 可以线性的连接本地分支与远程分支，无误之后就退出，回到主分支上。
git push
```

- git 忽略换行符的变化（建议执行）

```
git config --global core.autocrlf input
```

- git 文件名的大小写敏感（建议执行）

```
git config --global core.ignorecase false
```

#### 查看Eslint所有规则

```
npx @eslint/config-inspector
```

#### 项目功能简介

- `lint-staged husky`:用于代码提交时进行`eslint prettier`代码校验，校验通过后，才能提交代码
- `package.json` 中 `engines`用来定义`node`版本，可根据自己的需要自行修改
- `.npmrc` 文件是用来约束 npm 的，`package.json` 中 `engines`只能限制`yarn`，所以需要这个文件配置
- `code-inspector-plugin` 用来通过页面快速定位到代码，在`main.jsx`中进行了配置，在页面中可使用`shift + alt`可跳转到 编辑器 中代码对用位置
- `postcss-pxtorem` 用来将 css 中的 px 单位转换为 rem
- `viteCompression` 用来配置开启 gzip 打包
- `rollup-plugin-visualizer` 用来打包时展示包大小细节
- `preinstall` 该命令是为了强制包管理器，这里使用的是 npm
- `AutoDecimal` 一个将 JavaScript 中的基本运算自动转换成 decimal.js 方法的插件

#### 项目打包图片优化方案

- `vite-plugin-imagemin`:一个压缩图片资产的 vite 插件 （https://github.com/vbenjs/vite-plugin-imagemin）
- 但项目中并没有引入，因为国内下载极为不便，所以需要在电脑 host 文件加上如下配置：
- 199.232.4.133 raw.githubusercontent.com
- 加上配置后执行`npm i vite-plugin-imagemin -D`
- 在`vite.config`文件中加上插件配置：

```js
import viteImagemin from 'vite-plugin-imagemin';

export default () => {
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  };
};
```

- 对应的配置也可以随项目修改
