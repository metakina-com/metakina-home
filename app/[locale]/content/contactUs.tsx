'use client';

import * as Form from '@radix-ui/react-form';
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 处理表单提交
      // const formData = new FormData(e.target as HTMLFormElement);
      // await fetch('/api/contact', { ... });

    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24 text-white">
      {/* 背景效果 */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
      </div> */}

      <div >
        {/* 标题 */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-4 leading-tight text-[#D900FF]">
            {t('title.part1')} {t('title.part2')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左侧表单 */}
          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-purple-500/20 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-3">
              <Send className="w-6 h-6 text-[#D900FF]" />
              {t('form.title')}
            </h2>

            <Form.Root onSubmit={handleSubmit} className="space-y-6">
              <Form.Field name="name">
                <Form.Label className="block text-sm font-medium mb-2 text-gray-300">
                  {t('form.name')}
                </Form.Label>
                <Form.Control asChild>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-gray-500"
                    placeholder={t('form.namePlaceholder')}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field name="email">
                <Form.Label className="block text-sm font-medium mb-2 text-gray-300">
                  {t('form.email')}
                </Form.Label>
                <Form.Control asChild>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-gray-500"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field name="company">
                <Form.Label className="block text-sm font-medium mb-2 text-gray-300">
                  {t('form.company')}
                </Form.Label>
                <Form.Control asChild>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-gray-500"
                    placeholder={t('form.companyPlaceholder')}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field name="message">
                <Form.Label className="block text-sm font-medium mb-2 text-gray-300">
                  {t('form.message')}
                </Form.Label>
                <Form.Control asChild>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none placeholder-gray-500"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Submit asChild>
                <button
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#8B00FF] to-[#D900FF] rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '处理中...' : t('form.submit')}
                </button>
              </Form.Submit>
            </Form.Root>
          </div>

          {/* 右侧联系信息 */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-500/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                {t('info.contactTitle')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4 ">
                    {t('info.hk.company')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#2F4EE8] mt-0.5 flex-shrink-0" />
                      <span>{t("info.address")}: {t('info.hk.address')}</span>
                    </div>

                    <div className="flex items-center flex-wrap gap-3">
                      <Mail className="w-5 h-5 text-[#2F4EE8] flex-shrink-0" />
                      {t("info.businessEmail")}:
                      <a href={`mailto:${t('info.hk.businessEmail')}`} className="text-[#2F4EE8] hover:text-[#D900FF] transition-colors">
                        {t('info.hk.businessEmail')}
                      </a>
                    </div>

                    <div className="flex items-center  gap-3">
                      <Phone className="w-5 h-5 text-[#2F4EE8] flex-shrink-0" />
                      <span>
                        {t('info.hk.contactPerson')}: {t('info.hk.phone')}
                      </span>
                    </div>

                    <div className="flex items-center flex-wrap gap-3">
                      <Globe className="w-5 h-5 text-[#2F4EE8] flex-shrink-0" />
                      {t("info.hk.websiteLabel")}：
                      <a href={`https://${t('info.hk.website')}`} target="_blank" rel="noopener noreferrer" className="text-[#2F4EE8] hover:text-[#D900FF] transition-colors">
                        {t('info.hk.website')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                <div>
                  <h3 className="text-xl font-medium mb-4 ">
                    {t('info.xian.company')}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start  gap-3">
                      <MapPin className="w-5 h-5 text-[#2F4EE8] mt-0.5 flex-shrink-0" />
                      <span>{t("info.address")}：{t('info.xian.address')}</span>
                    </div>

                    <div className="flex items-center flex-wrap  gap-3">
                      <Mail className="w-5 h-5 text-[#2F4EE8] flex-shrink-0" />
                      {t("info.xian.techConsult")}：
                      <a href={`mailto:${t('info.xian.techEmail')}`} className="text-[#2F4EE8] hover:text-[#D900FF] transition-colors">
                        {t('info.xian.techEmail')}
                      </a>
                    </div>

                    <div className="flex items-center flex-wrap gap-3">
                      <Globe className="w-5 h-5 text-[#2F4EE8] flex-shrink-0" />
                      {t("info.xian.websiteLabel")}：
                      <a href={`https://${t('info.xian.website')}`} target="_blank" rel="noopener noreferrer" className="text-[#2F4EE8] hover:text-[#D900FF] transition-colors">
                        {t('info.xian.website')}
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