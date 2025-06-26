import { submitContactForm } from '@/apis/api-user.js';
import dzImg from '@/assets/images/home/dz.png';
import followBgImage from '@/assets/images/home/fllow-bg.png';
import gwImg from '@/assets/images/home/gw.png';
import lxrImg from '@/assets/images/home/lxr.png';
import yxImg from '@/assets/images/home/yx.png';
import {
  LinkedinOutlined,
  SendOutlined,
  TwitterOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;

function FollowPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const socialMedias = [
    {
      name: 'Twitter',
      icon: <TwitterOutlined />,
      url: 'https://twitter.com/dappweb',
      className: 'bg-[#1DA1F2]! py-6!',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinOutlined />,
      url: 'https://linkedin.com/company/dappweb',
      className: 'bg-[#0A66C2]! py-6!',
    },
    {
      name: 'Telegram',
      icon: <SendOutlined />,
      url: 'https://t.me/dappweb',
      className: 'bg-[#2AABEE]! py-6!',
    },
    {
      name: t('follow.social.wechat'),
      icon: <WechatOutlined />,
      url: '',
      className: 'bg-[#07C160]! py-6!',
    },
  ];

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [location.pathname, form]);

  const onFinish = async (values) => {
    const data = `
      姓名：${values.name}
      电话：${values.phone}
      邮箱：${values.email || ''}
      留言：${values.message || ''}
    `;

    setLoading(true);

    try {
      await submitContactForm({ content: data });
      message.success(t('app.submitSuccess'));
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  // 移动端
  const renderMobileVersion = () => {
    return (
      <div className="md:hidden">
        <div className="pb-4 pt-6">
          <h2 className="text-center text-xl font-bold">{t('follow.title')}</h2>
          {/* <p className="mt-1 text-sm text-gray-300">
            {t('follow.description')}
          </p> */}
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-center text-base text-gray-800 font-bold">
            {t('follow.form.title')}
          </h3>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                { required: true, message: t('follow.form.name.required') },
              ]}
            >
              <Input placeholder={t('follow.form.name.placeholder')} />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: t('follow.form.phone.required') },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: t('form.phone.invalid'),
                },
              ]}
            >
              <Input placeholder={t('follow.form.phone.placeholder')} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ type: 'email', message: t('form.email.invalid') }]}
            >
              <Input placeholder={t('follow.form.email.placeholder')} />
            </Form.Item>
            <Form.Item name="message">
              <TextArea
                rows={4}
                placeholder={t('follow.form.message.placeholder')}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="w-full bg-[#0055FF]! py-6! hover:bg-[#0055FF]/80!"
              >
                {t('follow.form.submit')}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="py-4 text-sm">
          {/* 香港 METAKINA LIMITED */}
          <div className="mb-4">
            <h3 className="mb-4 text-base text-white font-semibold">{t('contact.info.hk.company')}</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <img src={dzImg} className="mr-1 mt-0.5 flex-shrink-0" alt="地址" />
                <span>
                  {t('contact.info.address')}
                  ：
                  {t('contact.info.hk.address')}
                </span>
              </div>
              <div className="flex items-start">
                <img src={yxImg} className="mr-1 mt-0.5 flex-shrink-0" alt="邮箱" />
                <span>
                  {t('contact.info.hk.businessEmailLabel')}
                  ：
                  {t('contact.info.hk.businessEmail')}
                </span>
              </div>
              <div className="flex items-start">
                <img src={lxrImg} className="mr-1 mt-0.5 flex-shrink-0" alt="联系人" />
                <span>
                  {t('contact.info.hk.contactPerson')}
                  ：
                  {t('contact.info.hk.phone')}
                </span>
              </div>
              <div className="flex items-start">
                <img src={gwImg} className="mr-1 mt-0.5 flex-shrink-0" alt="官网" />
                <span>
                  {t('contact.info.hk.websiteLabel')}
                  ：
                  {t('contact.info.hk.website')}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[70vw] border-t"></div>
          {/* 西安达普韦伯（技术伙伴） */}
          <div className="mb-10 mt-4">
            <h3 className="mb-4 text-base text-white font-semibold">{t('contact.info.xian.company')}</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <img src={dzImg} className="mr-1 mt-0.5 flex-shrink-0" alt="地址" />
                <span>
                  {t('contact.info.address')}
                  ：
                  {t('contact.info.xian.address')}
                </span>
              </div>
              <div className="flex items-start">
                <img src={yxImg} className="mr-1 mt-0.5 flex-shrink-0" alt="邮箱" />
                <span>
                  {t('contact.info.xian.techConsult')}
                  ：
                  {t('contact.info.xian.techEmail')}
                </span>
              </div>
              <div className="flex items-start">
                <img src={gwImg} className="mr-1 mt-0.5 flex-shrink-0" alt="官网" />
                <span>
                  {t('contact.info.xian.websiteLabel')}
                  ：
                  {t('contact.info.xian.website')}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-items-center gap-5">
            {socialMedias.map((social, index) => (
              <Button
                key={index}
                type="primary"
                size="middle"
                icon={social.icon}
                className={`${social.className} w-[10rem]`}
                href={social.url}
                target={social.url ? '_blank' : undefined}
              >
                {social.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Desktop version
  const renderDesktopVersion = () => {
    return (
      <div className="hidden md:block">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left side - Contact information */}
          <div className="text-white">
            <h2 className="mb-2 text-3xl font-bold uppercase">
              {t('follow.title')}
            </h2>

            <div className="my-20 space-y-8">
              {/* 香港 METAKINA LIMITED */}
              <div className="space-y-4">
                <h3 className="text-lg text-white font-semibold">{t('contact.info.hk.company')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <img src={dzImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.address')}
                      ：
                      {t('contact.info.hk.address')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img src={yxImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.hk.businessEmailLabel')}
                      ：
                      {t('contact.info.hk.businessEmail')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img src={lxrImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.hk.contactPerson')}
                      ：
                      {t('contact.info.hk.phone')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img src={gwImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.hk.websiteLabel')}
                      ：
                      {t('contact.info.hk.website')}
                    </span>
                  </div>
                </div>
              </div>

              {/* 西安达普韦伯（技术伙伴） */}
              <div className="space-y-4">
                <h3 className="text-lg text-white font-semibold">{t('contact.info.xian.company')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <img src={dzImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.address')}
                      ：
                      {t('contact.info.xian.address')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img src={yxImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.xian.techConsult')}
                      ：
                      {t('contact.info.xian.techEmail')}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img src={gwImg} className="mr-2 mt-1 flex-shrink-0 text-base" />
                    <span className="text-sm">
                      {t('contact.info.xian.websiteLabel')}
                      ：
                      {t('contact.info.xian.website')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="grid grid-cols-1 mb-6 max-w-xs gap-3 sm:grid-cols-2">
              {socialMedias.map((social, index) => (
                <Button
                  key={index}
                  type="primary"
                  size="large"
                  icon={social.icon}
                  className={social.className}
                  href={social.url}
                  target={social.url ? '_blank' : undefined}
                >
                  {social.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="w-[600px] rounded-lg bg-white px-8 py-14 shadow-lg">
            <h3 className="mb-6 text-center text-2xl text-gray-800 font-bold">
              {t('follow.form.title')}
            </h3>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Form.Item
                  name="name"
                  label={t('follow.form.name')}
                  rules={[
                    { required: true, message: t('follow.form.name.required') },
                  ]}
                >
                  <Input placeholder={t('follow.form.name.placeholder')} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={t('follow.form.phone')}
                  rules={[
                    { required: true, message: t('form.phone.required') },
                    {
                      pattern: /^1[3-9]\d{9}$/,
                      message: t('form.phone.invalid'),
                    },
                  ]}
                >
                  <Input placeholder={t('follow.form.phone.placeholder')} />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                label={t('follow.form.email')}
                rules={[{ type: 'email', message: t('form.email.invalid') }]}
              >
                <Input placeholder={t('follow.form.email.placeholder')} />
              </Form.Item>
              <Form.Item name="message" label={t('follow.form.message')}>
                <TextArea
                  rows={4}
                  placeholder={t('follow.form.message.placeholder')}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  className="w-full bg-[#0055FF]! py-6! hover:bg-[#0055FF]/80!"
                >
                  {t('follow.form.submit')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden py-6 text-white bg-cover bg-center bg-no-repeat md:py-30"
      id="contact"
      style={{
        backgroundImage: `url(${followBgImage})`,
      }}
    >
      <div className="relative z-10 mx-auto px-4 container">
        {renderMobileVersion()}
        {renderDesktopVersion()}
      </div>
    </section>
  );
}

export default FollowPage;
