# 日本語国际化文件说明

このディレクトリには、日本語の国際化（i18n）ファイルが含まれています。

## ファイル構造

- `common.json` - 通用コンポーネント（LanguageSwitcher、Navigation等）
- `layout.json` - レイアウトコンポーネント（Header、Footer）
- `pages.json` - ページコンポーネント（Home、Consult、challenges等）
- `forms.json` - フォーム関連（RWAForm、stepValidation等）
- `legal.json` - 法的文書（privacy、terms）
- `index.js` - エントリーファイル（すべてのJSONファイルを統合）

## 使用方法

`index.js`ファイルがすべての拆分されたJSONファイルを自動的に統合するため、他のファイルでの使用に影響はありません。

## 编辑指南

- 新しい翻訳を追加する場合は、適切なカテゴリのJSONファイルに追加してください
- ファイル間で重複する翻訳キーがないことを確認してください
- JSONの構文が正しいことを確認してください
- 他の言語ファイル（zh-CN、en-US）との一貫性を保つようにしてください
