import { postSendCode, postVisitorRegister } from '@/apis/api-user.js';
/*
 * @Author: D.YW
 */
import iconBlackImg from '@/assets/images/home/icon-black.png';
import { Button, Form, Image, Input, message } from 'antd';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegistrationPage = memo(({ onRegister, onSwitchToLogin }) => {
  const [form] = Form.useForm();
  const [countdown, setCountdown] = useState(0);
  const { t } = useTranslation();

  const handleSubmit = async (values) => {
    try {
      // 这里可以调用你的注册API
      const res = await postVisitorRegister(values);

      console.info('注册信息:', values);

      if (res.code === 0) {
      // 模拟注册成功
        message.success(t('register.success'));
        onRegister?.(values);
        form.resetFields();
      } else {
        message.error(res.message || t('register.error'));
      }
    } catch {
      message.error(t('register.error'));
    }
  };

  const handleGetCode = async () => {
    // 验证邮箱是否已填写
    const email = form.getFieldValue('email');

    if (!email) {
      message.error(t('register.emailRequired'));

      return;
    }

    // 开始倒计时
    setCountdown(60);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    // 这里可以调用发送验证码的API
    const params = { email, type: 1 };
    const res = await postSendCode(params);

    if (res.code === 0) {
      message.success(t('register.codeSent'));
    } else {
      message.error(res.message || t('register.codeError'));
      clearInterval(timer);
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
              {t('register.welcome')}
              {' '}
            </span>
            <span className="text-[24px]">{t('register.platform')}</span>
          </h2>
          <p className="text-[18px] text-[#777777]">
            {t('register.subtitle')}
          </p>
        </div>
      </div>

      {/* 注册表单 */}
      <div className="w-full">
        <h3 className="mb-6 text-base text-[#333333] font-medium">
          {t('register.title')}
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
              { required: true, message: t('register.email.required') },
              { type: 'email', message: t('register.email.invalid') },
            ]}
          >
            <Input
              placeholder={t('register.email.placeholder')}
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
            name="verificationCode"
            rules={[
              { required: true, message: t('register.verificationCode.required') },
              { len: 6, message: t('register.verificationCode.invalid') },
            ]}
          >
            <div className="flex gap-3">
              <Input
                placeholder={t('register.verificationCode.placeholder')}
                size="large"
                className="h-12 flex-1 border-gray-200 rounded-lg bg-gray-50"
                styles={{
                  input: {
                    backgroundColor: '#f9f9f9',
                    borderColor: '#e5e7eb',
                  },
                }}
              />
              <Button
                type="primary"
                size="large"
                onClick={handleGetCode}
                disabled={countdown > 0}
                className="h-12 border-0 bg-[#0055FF] px-4 text-white font-medium"
              >
                {countdown > 0 ? t('register.verificationCode.countdown', { countdown }) : t('register.verificationCode.getCode')}
              </Button>
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: t('register.password.required') },
              { min: 6, message: t('register.password.minLength') },
            ]}
          >
            <Input.Password
              placeholder={t('register.password.placeholder')}
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
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: t('register.confirmPassword.required') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error(t('register.confirmPassword.mismatch')));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder={t('register.confirmPassword.placeholder')}
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

          {/* 注册按钮 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="h-12 w-full border-0 bg-[#0055FF] text-white font-medium"
            >
              {t('register.registerButton')}
            </Button>
          </Form.Item>

          {/* 登录链接 */}
          <div className="text-center">
            <Button
              type="link"
              className="text-[14px] text-[#0055FF]"
              onClick={onSwitchToLogin}
            >
              {t('register.loginLink')}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

RegistrationPage.displayName = 'RegistrationPage';

export default RegistrationPage;
