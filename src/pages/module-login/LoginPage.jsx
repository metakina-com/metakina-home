import { postVisitorLogin } from '@/apis/api-user.js';
import iconBlackImg from '@/assets/images/home/icon-black.png';
import { Button, Checkbox, Form, Image, Input, message } from 'antd';
import { memo } from 'react';

const LoginPage = memo(({ onSwitchToRegister, onLogin }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      // 这里可以调用你的登录API
      // 模拟登录成功
      const response = await postVisitorLogin(values);

      if (response.code === 0) {
        message.success('登录成功');
        console.info('登录信息:', values);
        onLogin?.(values);
        form.resetFields();
      } else {
        message.error(response.message || '登录失败，请重试');
      }
    } catch {
      message.error('登录失败，请重试');
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
            <span className="text-[36px]">欢迎登录 </span>
            <span className="text-[24px]">元话RWA 平台</span>
          </h2>
          <p className="text-[18px] text-[#777777]">
            解锁万亿美元资产,合规地连接全球资本
          </p>
        </div>
      </div>

      {/* 登录表单 */}
      <div className="w-full">
        <h3 className="mb-6 text-base text-[#333333] font-medium">
          账号密码登录
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
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
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

          {/* 记住我和忘记密码 */}
          <div className="mb-6 flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-[#777777]">
                记住我
              </Checkbox>
            </Form.Item>
            <Button type="link" className="p-0 text-[#0055FF]">
              忘记密码?
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
              登录
            </Button>
          </Form.Item>

          {/* 注册链接 */}
          <div className="text-center">
            <Button
              type="link"
              className="text-[14px] text-[#0055FF]"
              onClick={onSwitchToRegister}
            >
              注册账户
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

LoginPage.displayName = 'LoginPage';

export default LoginPage;
