import { GlobalOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="language-switcher flex items-center">
      <Select
        defaultValue={i18n.language}
        onChange={handleChange}
        variant={false}
        dropdownStyle={{
          background: '#ffffff',
        }}
        className="language-select"
        prefix={<GlobalOutlined className="text-white" />}
        options={[
          {
            value: 'zh-CN',
            label: '中文',
          },
          {
            value: 'zh-TW',
            label: '繁體中文',
          },
          {
            value: 'en-US',
            label: 'English',
          },
          {
            value: 'ja-JP',
            label: '日本語',
          },
          {
            value: 'ko-KR',
            label: '한국어',
          },
        ]}
      />
    </div>
  );
}
