import { postVisitorLogin } from '@/apis/api-user.js';
import iconBlackImg from '@/assets/images/home/icon-black.png';
import { Button, Checkbox, Form, Image, Input, message } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const LoginPage = memo(({ onSwitchToRegister, onLogin }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const handleSubmit = async (values) => {
    try {
      // 这里可以调用你的登录API
      // 模拟登录成功
      const response = await postVisitorLogin(values);

      if (response.code === 0) {
        message.success(t('login.success'));
        console.info('登录信息:', values);
        onLogin?.(values);
        form.resetFields();
      } else {
        message.error(response.message || t('login.error'));
      }
    } catch {
      message.error(t('login.error'));
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Logo区域 */}
      <div className="mb-8 flex flex-col items-center">
        <Image
          src={iconBlackImg}
          alt="Metakina Logo"
          preview={false}
          className="object-contain !h-[72px] !w-[72px]"
        />
        <div className="text-center">
          <h2 className="mb-2 text-[#0A1B39]">
            <span className="text-[36px]">
              {t('login.welcome')}
              {' '}
            </span>
            <span className="text-[24px]">{t('login.platform')}</span>
          </h2>
          <p className="text-[18px] text-[#777777]">
            {t('login.subtitle')}
          </p>
        </div>
      </div>

      {/* 登录表单 */}
      <div className="w-full">
        <h3 className="mb-6 text-base text-[#333333] font-medium">
          {t('login.title')}
        </h3>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          className="w-full"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: t('login.email.required') },
              { type: 'email', message: t('login.email.invalid') },
            ]}
          >
            <Input
              placeholder={t('login.email.placeholder')}
              size="large"
              className="h-12 border-gray-200 rounded-lg bg-gray-50"
              styles={{
                input: {
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e5e7eb',
                },
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: t('login.password.required') },
            ]}
          >
            <Input.Password
              placeholder={t('login.password.placeholder')}
              size="large"
              className="h-12 border-gray-200 rounded-lg bg-gray-50"
              styles={{
                input: {
                  backgroundColor: '#f9f9f9',
                  borderColor: '#e5e7eb',
                },
              }}
            />
          </Form.Item>

          {/* 记住我和忘记密码 */}
          <div className="mb-6 flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-[#777777]">
                {t('login.rememberMe')}
              </Checkbox>
            </Form.Item>
            <Button type="link" className="p-0 text-[#0055FF]">
              {t('login.forgotPassword')}
            </Button>
          </div>

          {/* 登录按钮 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="h-12 w-full border-0 bg-[#0055FF] text-white font-medium"
            >
              {t('login.loginButton')}
            </Button>
          </Form.Item>

          {/* 注册链接 */}
          <div className="text-center">
            <Button
              type="link"
              className="text-[14px] text-[#0055FF]"
              onClick={onSwitchToRegister}
            >
              {t('login.registerLink')}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

LoginPage.displayName = 'LoginPage';

export default LoginPage;
