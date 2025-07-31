import { postSendCode, postVisitorRegister } from '@/apis/api-user.js';
/*
 * @Author: D.YW
 */
import iconBlackImg from '@/assets/images/home/icon-black.png';
import { Button, Form, Image, Input, message } from 'antd';
import { memo, useState } from 'react';

const RegistrationPage = memo(({ onRegister, onSwitchToLogin }) => {
  const [form] = Form.useForm();
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = async (values) => {
    try {
      // 这里可以调用你的注册API
      const res = await postVisitorRegister(values);

      console.info('注册信息:', values);

      if (res.code === 0) {
      // 模拟注册成功
        message.success('注册成功');
        onRegister?.(values);
        form.resetFields();
      } else {
        message.error(res.message || '注册失败，请稍后再试');
      }
    } catch {
      message.error('注册失败，请重试');
    }
  };

  const handleGetCode = async () => {
    // 验证邮箱是否已填写
    const email = form.getFieldValue('email');

    if (!email) {
      message.error('请先输入邮箱');

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
      message.success('验证码已发送');
    } else {
      message.error(res.message || '验证码发送失败，请稍后再试');
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
            <span className="text-[36px]">欢迎注册 </span>
            <span className="text-[24px]">元话RWA 平台</span>
          </h2>
          <p className="text-[18px] text-[#777777]">
            解锁万亿美元资产,合规地连接全球资本
          </p>
        </div>
      </div>

      {/* 注册表单 */}
      <div className="w-full">
        <h3 className="mb-6 text-base text-[#333333] font-medium">
          注册账户
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
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入正确的邮箱格式' },
            ]}
          >
            <Input
              placeholder="请输入邮箱"
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
              { required: true, message: '请输入验证码' },
              { len: 6, message: '验证码为6位数字' },
            ]}
          >
            <div className="flex gap-3">
              <Input
                placeholder="请输入验证码"
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
                {countdown > 0 ? `${countdown}s` : '获取验证码'}
              </Button>
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码至少6位' },
            ]}
          >
            <Input.Password
              placeholder="请输入密码"
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
              { required: true, message: '请确认密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="请确认密码"
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
              注册
            </Button>
          </Form.Item>

          {/* 登录链接 */}
          <div className="text-center">
            <Button
              type="link"
              className="text-[14px] text-[#0055FF]"
              onClick={onSwitchToLogin}
            >
              登录账户
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

RegistrationPage.displayName = 'RegistrationPage';

export default RegistrationPage;
