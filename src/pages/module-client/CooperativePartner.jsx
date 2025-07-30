/*
*  合作伙伴申请表
*/
import { submitPartnerForm } from '@/apis/api-user.js';
import { Button, Form, Input, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function CooperativePartner() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (_values) => {
    // 这里可以添加表单提交逻辑
    // 例如：调用API提交表单数据
    const res = await submitPartnerForm(_values);

    if (res.code === 0) {
      message.success(t('cooperativePartner.success'));
      navigate('/home');
    } else {
      message.error(t('cooperativePartner.fail'));
    }
  };

  const onCancel = () => {
    form.resetFields();
    navigate('/home');
  };

  return (
    <div className="py-[72px]">
      <div className="h-442px flex flex-col items-center justify-center bg-[#0055FF] text-white">
        <span className="text-[64px] font-bold">{t('cooperativePartner.title')}</span>
        <span className="text-[36px]">{t('cooperativePartner.subtitle')}</span>
      </div>

      {/* 表单区域 */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="rounded-lg bg-white p-8" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
          <p className="pb-5 text-[18px] text-black font-[600]">{t('cooperativePartner.title')}</p>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="w-full"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* 左列 */}
              <div className="space-y-6">
                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.companyName')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="companyName"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.companyName') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.companyNamePlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.contactName')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="contactName"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.contactName') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.contactNamePlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.contactPhone')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="contactPhone"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.contactPhone') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.contactPhonePlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.expectedCustomerCount')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="expectedCustomerCount"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.expectedCustomerCount') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.expectedCustomerCountPlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>

              {/* 右列 */}
              <div className="space-y-6">
                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.websiteUrl')}
                    </span>
                  )}
                  name="websiteUrl"
                >
                  <Input
                    placeholder={t('cooperativePartner.form.websiteUrlPlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.contactPosition')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="contactPosition"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.contactPosition') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.contactPositionPlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.contactEmail')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="contactEmail"
                  rules={[
                    { required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.contactEmail') }) },
                    { type: 'email', message: t('cooperativePartner.form.invalidEmail') },
                  ]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.contactEmailPlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={(
                    <span className="text-[#777777]">
                      {t('cooperativePartner.form.promotionCountry')}
                      {' '}
                      <span className="text-red-500">*</span>
                    </span>
                  )}
                  name="promotionCountry"
                  rules={[{ required: true, message: t('cooperativePartner.form.required', { field: t('cooperativePartner.form.promotionCountry') }) }]}
                >
                  <Input
                    placeholder={t('cooperativePartner.form.promotionCountryPlaceholder')}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>
            </div>

            {/* 按钮区域 */}
            <div className="mt-8 flex justify-end space-x-4">
              <Button
                size="large"
                onClick={onCancel}
                className="rounded-lg px-8"
                style={{
                  background: '#f5f5f5',
                  border: 'none',
                  color: '#666',
                  height: '40px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {t('cooperativePartner.cancel')}
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="rounded-lg px-8"
                style={{
                  background: '#0357FF',
                  border: 'none',
                  height: '40px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {t('cooperativePartner.submit')}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CooperativePartner;
