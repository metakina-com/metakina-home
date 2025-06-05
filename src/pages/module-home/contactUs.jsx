'use client';

import { EnvironmentOutlined, GlobalOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      // 处理表单提交
      console.info('Form values:', values);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-x-auto w-[85vw] px-8 pt-20 text-white lg:px-24 md:px-16 md:pt-32">
      {/* 背景效果 */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
      </div> */}

      <div>
        {/* 标题 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl text-[#D900FF] font-bold leading-tight lg:text-5xl md:text-4xl">
            {t('contact.title.part1')}
            {' '}
            {t('contact.title.part2')}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* 左侧表单 */}
          <div className="border border-purple-500/20 rounded-2xl p-8 shadow-2xl from-gray-900/50 to-purple-900/20 bg-gradient-to-br backdrop-blur-sm md:p-10">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold md:text-3xl">
              <SendOutlined className="h-6 w-6 text-[#D900FF]" />
              {t('contact.form.title')}
            </h2>

            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              className="space-y-6 [&_.ant-form-item-label_label]:!text-white"
            >
              <Form.Item
                name="name"
                label={t('contact.form.name')}
                rules={[{ required: true, message: t('contact.form.namePlaceholder') }]}
              >
                <Input
                  placeholder={t('contact.form.namePlaceholder')}
                  className="placeholder-gray-500 border border-purple-500/30 rounded-lg bg-white/5 text-white transition-all backdrop-blur-sm [&_input]:text-white"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={t('contact.form.email')}
                rules={[
                  { required: true, message: t('contact.form.emailPlaceholder') },
                  { type: 'email', message: t('contact.form.emailPlaceholder') },
                ]}
              >
                <Input
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="placeholder-gray-500 border border-purple-500/30 rounded-lg bg-white/5 text-white transition-all backdrop-blur-sm [&_input]:text-white"
                />
              </Form.Item>

              <Form.Item
                name="company"
                label={t('contact.form.company')}
              >
                <Input
                  placeholder={t('contact.form.companyPlaceholder')}
                  className="placeholder-gray-500 border border-purple-500/30 rounded-lg bg-white/5 text-white transition-all backdrop-blur-sm [&_input]:text-white"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={t('contact.form.message')}
                rules={[{ required: true, message: t('contact.form.messagePlaceholder') }]}
              >
                <Input.TextArea
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="placeholder-gray-500 resize-none border border-purple-500/30 rounded-lg bg-white/5 text-white transition-all backdrop-blur-sm [&_textarea]:text-white"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="h-12 w-full text-base"
                  loading={isSubmitting}
                  style={{
                    background: 'linear-gradient(to bottom, #D900FF 0%, #2F4EE8 100%)',
                    border: 'none',
                    padding: '12px 24px',
                    height: 'auto',
                    fontSize: '16px',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #C800E8 0%, #2A47D0 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #D900FF 0%, #2F4EE8 100%)';
                  }}
                >
                  {t('contact.form.submit')}
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* 右侧联系信息 */}
          <div className="space-y-10">
            <div className="border border-blue-500/20 rounded-2xl p-8 shadow-2xl from-gray-900/50 to-blue-900/20 bg-gradient-to-br backdrop-blur-sm md:p-10">
              <h2 className="mb-6 text-2xl text-white font-semibold md:text-3xl">
                {t('contact.info.contactTitle')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-xl font-medium">
                    {t('contact.info.hk.company')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <EnvironmentOutlined className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      <span>
                        {t('contact.info.address')}
                        :
                        {' '}
                        {t('contact.info.hk.address')}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <MailOutlined className="h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      {t('contact.info.businessEmail')}
                      :
                      <a href={`mailto:${t('contact.info.hk.businessEmail')}`} className="text-[#2F4EE8] transition-colors hover:text-[#D900FF]">
                        {t('contact.info.hk.businessEmail')}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <PhoneOutlined className="h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      <span>
                        {t('contact.info.hk.contactPerson')}
                        :
                        {t('contact.info.hk.phone')}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <GlobalOutlined className="h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      {t('contact.info.hk.websiteLabel')}
                      ：
                      <a href={`https://${t('contact.info.hk.website')}`} target="_blank" rel="noopener noreferrer" className="text-[#2F4EE8] transition-colors hover:text-[#D900FF]">
                        {t('contact.info.hk.website')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px from-transparent via-purple-500/50 to-transparent bg-gradient-to-r"></div>

                <div>
                  <h3 className="mb-4 text-xl font-medium">
                    {t('contact.info.xian.company')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <EnvironmentOutlined className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      <span>
                        {t('contact.info.address')}
                        ：
                        {t('contact.info.xian.address')}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <MailOutlined className="h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      {t('contact.info.xian.techConsult')}
                      ：
                      <a href={`mailto:${t('contact.info.xian.techEmail')}`} className="text-[#2F4EE8] transition-colors hover:text-[#D900FF]">
                        {t('contact.info.xian.techEmail')}
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <GlobalOutlined className="h-5 w-5 flex-shrink-0 text-[#2F4EE8]" />
                      {t('contact.info.xian.websiteLabel')}
                      ：
                      <a href={`https://${t('contact.info.xian.website')}`} target="_blank" rel="noopener noreferrer" className="text-[#2F4EE8] transition-colors hover:text-[#D900FF]">
                        {t('contact.info.xian.website')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
