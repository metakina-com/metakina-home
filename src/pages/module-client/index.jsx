'use client';

import { updateFormApi } from '@/apis/api-user.js';
import titlebgImg from '@/assets/images/client/titlebg.png';
import { Button, Checkbox, DatePicker, Form, Input, message, Progress, Radio, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

export default function RWAApplicationForm() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [submitLoad, setSubmitLoad] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [percent, setPercent] = useState(100 / 9);
  // 添加全局formState状态，用于保存所有步骤的表单数据
  const [formState, setFormState] = useState({});

  useEffect(() => {
    // 从本地存储恢复表单状态(如果有)
    try {
      const savedState = localStorage.getItem('rwaFormState');

      if (savedState) {
        const parsedState = JSON.parse(savedState);

        setFormState(parsedState);
        form.setFieldsValue(parsedState);
      }
    } catch (error) {
      console.error('恢复表单状态失败:', error);
    }
  }, [form]);

  // 保存表单状态到本地存储
  useEffect(() => {
    if (Object.keys(formState).length > 0) {
      localStorage.setItem('rwaFormState', JSON.stringify(formState));
    }
  }, [formState]);

  const handleSubmit = async () => {
    // 如果不是最后一步，显示提示信息
    if (currentStep !== 8) {
      return message.info(t('stepValidation.info'));
    }

    setSubmitLoad(true);

    // 提交前再次获取完整表单数据
    const formData = {
      ...formState,
      ...form.getFieldsValue(true),
    };

    // 处理数组类型的值，转换为字符串
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key] = formData[key].join(';');
      }
    }

    // 使用formData进行API提交，确保包含所有表单数据
    const res = await updateFormApi(formData);

    setSubmitLoad(false);

    if (res.msg === 'success') {
      message.success(t('RWAForm.submit.message.success'));
      form.resetFields();
      setFormState({});
      localStorage.setItem('rwaFormState', JSON.stringify({}));
      navigate('/home');
    } else {
      message.error(t('RWAForm.submit.message.error'));
    }
  };

  const validateCurrentStep = async () => {
    try {
      let fieldsToValidate = [];

      if (currentStep === 0) {
        // 委托方基本信息必填字段
        fieldsToValidate = [
          'companyName',
          'legalPerson',
          'contactPerson',
          'contactPhone',
          'contactEmail',
          'companyAddress',
        ];
      } else if (currentStep === 1) {
        // RWA资产详细信息必填字段
        fieldsToValidate = [
          'assetType',
          'assetDescription',
          'assetValue',
          'ownershipStatus',
        ];
      } else if (currentStep === 2) {
        // 代币化需求与目标
        fieldsToValidate = [
          'projectGoals',
        ];
      } else if (currentStep === 3) {
        // 技术开发需求
        fieldsToValidate = [
          'platformFeatures',
        ];
      } else if (currentStep === 5) {
        // 合规与法律要求
        fieldsToValidate = ['jurisdictions', 'riskAcknowledgments'];
      } else {
        fieldsToValidate = [];
      }

      await form.validateFields(fieldsToValidate);

      return true;
    } catch (error) {
      console.error('表单验证失败:', error);

      // 如果有错误字段，滚动到第一个错误字段
      if (error.errorFields && error.errorFields.length > 0) {
        form.scrollToField(error.errorFields[0].name, { behavior: 'smooth', block: 'center' });
      }

      return false;
    }
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();

    if (isValid) {
      // 保存当前步骤数据
      const currentValues = form.getFieldsValue(true);

      setFormState(prevState => ({
        ...prevState,
        ...currentValues,
      }));

      setCurrentStep(currentStep + 1);
      setPercent(100 / 9 * (currentStep + 2));
      window.scrollTo(0, 0);
    } else {
      message.error(t('stepValidation.error'));
    }
  };

  const prevStep = () => {
    // 保存当前步骤数据
    const currentValues = form.getFieldsValue(true);

    setFormState(prevState => ({
      ...prevState,
      ...currentValues,
    }));

    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        // 委托方基本信息
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2 text-2xl text-[#000000] font-semibold">
              {t('RWAForm.sections.basicInfo.title')}
            </h2>
            <div className="grid grid-cols-1 gap-5 border-t border-[#130F30] pt-4 md:grid-cols-2">
              <Form.Item
                label={t('RWAForm.sections.basicInfo.fields.companyName.label')}
                name="companyName"
                rules={[{ required: true, message: t('RWAForm.sections.basicInfo.fields.companyName.required') }]}
              >
                <Input placeholder={t('RWAForm.sections.basicInfo.fields.companyName.placeholder')} />
              </Form.Item>

              <Form.Item
                label={t('RWAForm.sections.basicInfo.fields.legalPerson.label')}
                name="legalPerson"
                rules={[{ required: true, message: t('RWAForm.sections.basicInfo.fields.legalPerson.required') }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t('RWAForm.sections.basicInfo.fields.contactPerson.label')}
                name="contactPerson"
                rules={[{ required: true, message: t('RWAForm.sections.basicInfo.fields.contactPerson.required') }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.basicInfo.fields.position.label')} name="contactPosition">
                <Input />
              </Form.Item>

              <Form.Item
                label={t('RWAForm.sections.basicInfo.fields.phone.label')}
                name="contactPhone"
                rules={[{ required: true, message: t('RWAForm.sections.basicInfo.fields.phone.required') }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t('RWAForm.sections.basicInfo.fields.email.label')}
                name="contactEmail"
                rules={[
                  { required: true, message: t('RWAForm.sections.basicInfo.fields.email.required') },
                  { type: 'email', message: t('RWAForm.sections.basicInfo.fields.email.invalid') },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label={t('RWAForm.sections.basicInfo.fields.address.label')}
              name="companyAddress"
              rules={[{ required: true, message: t('RWAForm.sections.basicInfo.fields.address.required') }]}
            >
              <Input />
            </Form.Item>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Form.Item label={t('RWAForm.sections.basicInfo.fields.businessLicense.label')} name="businessLicenseCode">
                <Input />
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.basicInfo.fields.registeredCapital.label')} name="registeredCapital">
                <Input type="number" />
              </Form.Item>
            </div>
          </>
        );

      case 1:
        // RWA资产详细信息
        return (
          <>
            <h2 className="text-block mb-5 flex items-center gap-2.5 pb-2.5 text-2xl font-semibold">
              {t('RWAForm.sections.assetInfo.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
              <strong>{t('RWAForm.sections.assetInfo.description')}</strong>
            </div>
            <div className="mb-8 rounded-lg bg-white p-4">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item
                  label={t('RWAForm.sections.assetInfo.fields.assetType.label')}
                  name="assetType"
                  rules={[{ required: true, message: t('RWAForm.sections.assetInfo.fields.assetType.required') }]}
                >
                  <Select placeholder={t('RWAForm.sections.assetInfo.fields.assetType.placeholder')}>
                    <Select.Option value="infrastructure">{t('RWAForm.sections.assetInfo.fields.assetType.options.infrastructure')}</Select.Option>
                    <Select.Option value="real_estate_commercial">{t('RWAForm.sections.assetInfo.fields.assetType.options.real_estate_commercial')}</Select.Option>
                    <Select.Option value="real_estate_residential">{t('RWAForm.sections.assetInfo.fields.assetType.options.real_estate_residential')}</Select.Option>
                    <Select.Option value="energy_renewable">{t('RWAForm.sections.assetInfo.fields.assetType.options.energy_renewable')}</Select.Option>
                    <Select.Option value="energy_traditional">{t('RWAForm.sections.assetInfo.fields.assetType.options.energy_traditional')}</Select.Option>
                    <Select.Option value="transportation">{t('RWAForm.sections.assetInfo.fields.assetType.options.transportation')}</Select.Option>
                    <Select.Option value="utility">{t('RWAForm.sections.assetInfo.fields.assetType.options.utility')}</Select.Option>
                    <Select.Option value="industrial">{t('RWAForm.sections.assetInfo.fields.assetType.options.industrial')}</Select.Option>
                    <Select.Option value="agricultural">{t('RWAForm.sections.assetInfo.fields.assetType.options.agricultural')}</Select.Option>
                    <Select.Option value="commodity">{t('RWAForm.sections.assetInfo.fields.assetType.options.commodity')}</Select.Option>
                    <Select.Option value="financial">{t('RWAForm.sections.assetInfo.fields.assetType.options.financial')}</Select.Option>
                    <Select.Option value="intellectual">{t('RWAForm.sections.assetInfo.fields.assetType.options.intellectual')}</Select.Option>
                    <Select.Option value="other">{t('RWAForm.sections.assetInfo.fields.assetType.options.other')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetSubtype.label')} name="assetSubtype">
                  <Input placeholder={t('RWAForm.sections.assetInfo.fields.assetSubtype.placeholder')} />
                </Form.Item>
              </div>

              <Form.Item
                label={t('RWAForm.sections.assetInfo.fields.assetDescription.label')}
                name="assetDescription"
                rules={[{ required: true, message: t('RWAForm.sections.assetInfo.fields.assetDescription.required') }]}
              >
                <TextArea
                  rows={5}
                  placeholder={t('RWAForm.sections.assetInfo.fields.assetDescription.placeholder')}
                />
              </Form.Item>
            </div>

            {/* 资产价值与财务信息 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-[#1e3c72] font-semibold">{t('RWAForm.sections.assetInfo.fields.assetValue.title')}</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <Form.Item
                  label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.latestAssessmentValue.label')}
                  name="assetValue"
                  rules={[{ required: true, message: t('RWAForm.sections.assetInfo.fields.assetValue.fields.latestAssessmentValue.required') }]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentDate.label')} name="valuationDate">
                  <Input type="date" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.label')} name="valuationMethod">
                  <Select placeholder={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.cost_approach')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.cost_approach')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.income_approach')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.income_approach')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.market_approach')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.market_approach')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.dcf')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.dcf')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.multiple')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.assessmentMethod.options.multiple')}</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.annualRevenue.label')} name="annualRevenue">
                  <Input type="number" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.annualProfit.label')} name="annualProfit">
                  <Input type="number" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.annualReturn.label')} name="annualReturnRate">
                  <Input type="number" step="0.01" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.label')} name="operationPeriod">
                  <Select placeholder={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.5_years')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.5_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.5_10_years')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.5_10_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.10_20_years')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.10_20_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.20_30_years')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.20_30_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.over_30_years')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.over_30_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.permanent')}>{t('RWAForm.sections.assetInfo.fields.assetValue.fields.operationPeriod.options.permanent')}</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            {/* 产权与法律状况 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-[#1e3c72] font-semibold">{t('RWAForm.sections.assetInfo.fields.ownershipStatus.title')}</h3>
              <Form.Item
                label={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.label')}
                name="ownershipStatus"
                rules={[{ required: true, message: t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.required') }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.full_ownership')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.full_ownership')}</Radio>
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.partial_ownership')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.partial_ownership')}</Radio>
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.usage_rights')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.usage_rights')}</Radio>
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.pending')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipStatus.options.pending')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.ownershipRatio.label')} name="ownershipRatio">
                  <Input type="number" max={100} min={0} />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbrance.label')} name="encumbranceId">
                  <Radio.Group>
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbrance.options.no')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbrance.options.no')}</Radio>
                    <Radio value={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbrance.options.yes')}>{t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbrance.options.yes')}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <Form.Item label={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbranceDetails.label')} name="encumbranceDetails">
                <TextArea placeholder={t('RWAForm.sections.assetInfo.fields.ownershipStatus.fields.encumbranceDetails.placeholder')} rows={4} />
              </Form.Item>
            </div>

            {/* 现有资产证明文件 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-[#1e3c72] font-semibold">{t('RWAForm.sections.assetInfo.fields.assetDocuments.title')}</h3>
              <Form.Item label={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.label')} name="assetDocuments">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.property_deed')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.property_deed')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.business_license')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.business_license')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.valuation_report')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.valuation_report')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.financial_statements')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.financial_statements')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.audit_report')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.audit_report')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.legal_opinion')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.legal_opinion')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.insurance')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.insurance')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.environmental')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.environmental')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.operation_contract')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.operation_contract')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.revenue_contract')}>{t('RWAForm.sections.assetInfo.fields.assetDocuments.fields.assetDocuments.options.revenue_contract')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </>
        );

      case 2:
      // 代币化需求与目标
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.tokenization.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
              <strong>{t('RWAForm.sections.tokenization.description')}</strong>
            </div>

            {/* 项目核心目标 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenization.fields.projectGoals.title')}</h3>
              <Form.Item
                label={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.label')}
                name="projectGoals"
                rules={[{ required: true, message: t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.required') }]}
              >
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.increase_liquidity')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.increase_liquidity')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.expand_funding')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.expand_funding')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.simplify_management')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.simplify_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.attract_investors')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.attract_investors')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.transparent_operation')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.transparent_operation')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.fractional_ownership')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.fractional_ownership')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.global_access')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.global_access')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.automatic_dividend')}>{t('RWAForm.sections.tokenization.fields.projectGoals.fields.projectGoals.options.automatic_dividend')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>

            {/* 融资与投资者定位 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenization.fields.fundingTarget.title')}</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.tokenization.fields.fundingTarget.fields.fundingTarget.label')} name="fundingTarget">
                  <Input type="number" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.tokenization.fields.tokenPercent.label')} name="tokenPercent">
                  <Input type="number" max={100} min={1} />
                </Form.Item>
              </div>

              <Form.Item label={t('RWAForm.sections.tokenization.fields.targetInvestors.label')} name="targetInvestorsId">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.tokenization.fields.targetInvestors.options.institutional')}>{t('RWAForm.sections.tokenization.fields.targetInvestors.options.institutional')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenization.fields.targetInvestors.options.high_net_worth')}>{t('RWAForm.sections.tokenization.fields.targetInvestors.options.high_net_worth')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenization.fields.targetInvestors.options.retail')}>{t('RWAForm.sections.tokenization.fields.targetInvestors.options.retail')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenization.fields.targetInvestors.options.mixed')}>{t('RWAForm.sections.tokenization.fields.targetInvestors.options.mixed')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.tokenization.fields.minInvestment.label')} name="minInvestment">
                  <Input type="number" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.tokenization.fields.maxInvestors.label')} name="maxInvestors">
                  <Input type="number" />
                </Form.Item>
              </div>
            </div>

            {/* 代币权益设计偏好 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenization.fields.tokenRights.title')}</h3>
              <Form.Item label={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.label')} name="tokenRights">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.revenue_share')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.revenue_share')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.voting_rights')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.voting_rights')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.transfer_rights')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.transfer_rights')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.redemption_rights')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.redemption_rights')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.information_rights')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.information_rights')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.liquidation_rights')}>{t('RWAForm.sections.tokenization.fields.tokenRights.fields.tokenRights.options.liquidation_rights')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.tokenization.fields.dividendFrequency.label')} name="dividendFrequency">
                  <Select placeholder={t('RWAForm.sections.tokenization.fields.dividendFrequency.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.tokenization.fields.dividendFrequency.options.monthly')}>{t('RWAForm.sections.tokenization.fields.dividendFrequency.options.monthly')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenization.fields.dividendFrequency.options.quarterly')}>{t('RWAForm.sections.tokenization.fields.dividendFrequency.options.quarterly')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenization.fields.dividendFrequency.options.semi_annually')}>{t('RWAForm.sections.tokenization.fields.dividendFrequency.options.semi_annually')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenization.fields.dividendFrequency.options.annually')}>{t('RWAForm.sections.tokenization.fields.dividendFrequency.options.annually')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenization.fields.dividendFrequency.options.event_based')}>{t('RWAForm.sections.tokenization.fields.dividendFrequency.options.event_based')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.tokenization.fields.dividendRatio.label')} name="dividendRatio">
                  <Input type="number" max={100} min={0} />
                </Form.Item>
              </div>
            </div>
          </>
        );

      case 3:
        // 技术开发需求
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.technology.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
              <strong>{t('RWAForm.sections.technology.description')}</strong>
            </div>

            {/* 区块链技术选择 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.technology.fields.blockchainPreference.title')}</h3>
              <Form.Item label={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.label')} name="blockchainPreference">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.consortium')}>{t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.consortium')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.ethereum')}>{t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.ethereum')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.polygon')}>{t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.polygon')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.bsc')}>{t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.bsc')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.custom')}>{t('RWAForm.sections.technology.fields.blockchainPreference.fields.blockchainPreference.options.custom')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.technology.fields.tokenStandard.label')} name="tokenStandardId">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc3643')}>{t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc3643')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc1400')}>{t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc1400')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc20')}>{t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.erc20')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.custom')}>{t('RWAForm.sections.technology.fields.tokenStandard.fields.tokenStandard.options.custom')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* 平台功能需求 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.technology.fields.platformFeatures.title')}</h3>
              <Form.Item
                label={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.label')}
                name="platformFeatures"
                rules={[{ required: true, message: t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.required') }]}
              >
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.user_management')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.user_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.wallet_management')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.wallet_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.asset_tracking')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.asset_tracking')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.token_management')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.token_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.dividend_distribution')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.dividend_distribution')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.compliance_module')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.compliance_module')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.reporting_dashboard')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.reporting_dashboard')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.document_management')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.document_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.notification_system')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.notification_system')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.otc_trading')}>{t('RWAForm.sections.technology.fields.platformFeatures.fields.platformFeatures.options.otc_trading')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>

            {/* 数据集成与验证需求 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.technology.fields.dataSource.title')}</h3>
              <Form.Item label={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.label')} name="dataSources">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.manual_input')}>{t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.manual_input')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.erp_integration')}>{t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.erp_integration')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.iot_sensors')}>{t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.iot_sensors')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.third_party_api')}>{t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.third_party_api')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.oracle_service')}>{t('RWAForm.sections.technology.fields.dataSource.fields.dataSource.options.oracle_service')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.technology.fields.updateFrequency.label')} name="updateFrequency">
                  <Select placeholder={t('RWAForm.sections.technology.fields.updateFrequency.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.real_time')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.real_time')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.daily')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.daily')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.weekly')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.weekly')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.monthly')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.monthly')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.quarterly')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.quarterly')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.technology.fields.updateFrequency.options.event_driven')}>{t('RWAForm.sections.technology.fields.updateFrequency.options.event_driven')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.technology.fields.needAudit.label')} name="needAudit">
                  <Radio.Group>
                    <Radio value={t('RWAForm.sections.technology.fields.needAudit.options.yes')}>{t('RWAForm.sections.technology.fields.needAudit.options.yes')}</Radio>
                    <Radio value={t('RWAForm.sections.technology.fields.needAudit.options.no')}>{t('RWAForm.sections.technology.fields.needAudit.options.no')}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          </>
        );

      case 4:
        // 代币发行与市场对接需求
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.tokenMarket.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
              <strong>{t('RWAForm.sections.tokenMarket.description')}</strong>
            </div>

            {/* 一级市场发行策略 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenMarket.fields.primaryMarket.title')}</h3>
              <Form.Item label={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.label')} name="primaryMarketId">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.sto')}>{t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.sto')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.private_sale')}>{t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.private_sale')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.ieo')}>{t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.ieo')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.ido')}>{t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.ido')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.mixed')}>{t('RWAForm.sections.tokenMarket.fields.primaryMarket.fields.primaryMarket.options.mixed')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.label')} name="launchpadPreferenceId">
                  <Select placeholder={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.tier1')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.tier1')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.tier2')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.tier2')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.specialized')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.specialized')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.decentralized')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.decentralized')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.multiple')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.multiple')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.no_preference')}>{t('RWAForm.sections.tokenMarket.fields.launchpadPreference.options.no_preference')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.tokenMarket.fields.issuePrice.label')} name="issuePrice">
                  <Input type="number" step="0.01" />
                </Form.Item>
              </div>

              <Form.Item label={t('RWAForm.sections.tokenMarket.fields.kycRequirement.label')} name="kycRequirementId">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.strict')}>{t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.strict')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.standard')}>{t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.standard')}</Radio>
                    <Radio value={t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.basic')}>{t('RWAForm.sections.tokenMarket.fields.kycRequirement.fields.kycRequirement.options.basic')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* 二级市场交易所对接 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenMarket.fields.exchangePreference.title')}</h3>
              <Form.Item label={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.label')} name="exchangePreferences">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.cex_tier1')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.cex_tier1')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.cex_tier2')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.cex_tier2')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.dex_uniswap')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.dex_uniswap')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.dex_curve')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.dex_curve')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.specialized_rwa')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.specialized_rwa')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.regional_exchange')}>{t('RWAForm.sections.tokenMarket.fields.exchangePreference.fields.exchangePreference.options.regional_exchange')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.label')} name="liquidityStrategies">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.market_maker')}>{t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.market_maker')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.liquidity_pool')}>{t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.liquidity_pool')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.incentive_program')}>{t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.incentive_program')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.treasury_management')}>{t('RWAForm.sections.tokenMarket.fields.liquidityStrategy.fields.liquidityStrategy.options.treasury_management')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>

            {/* 市场推广需求 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.tokenMarket.fields.marketingSupport.title')}</h3>
              <Form.Item label={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.label')} name="marketingSupport">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.whitepaper')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.whitepaper')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.tokenomics_design')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.tokenomics_design')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.community_building')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.community_building')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.pr_services')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.pr_services')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.ama_events')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.ama_events')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.roadshow')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.roadshow')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.media_coverage')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.media_coverage')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.influencer_marketing')}>{t('RWAForm.sections.tokenMarket.fields.marketingSupport.fields.marketingSupport.options.influencer_marketing')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.tokenMarket.fields.marketingBudget.label')} name="marketingBudget">
                  <Select placeholder={t('RWAForm.sections.tokenMarket.fields.marketingBudget.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.under_50')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.under_50')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.50_100')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.50_100')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.100_200')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.100_200')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.200_500')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.200_500')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.over_500')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.over_500')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.flexible')}>{t('RWAForm.sections.tokenMarket.fields.marketingBudget.options.flexible')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.label')} name="marketingTimeline">
                  <Select placeholder={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.pre_launch')}>{t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.pre_launch')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.launch_period')}>{t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.launch_period')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.post_launch')}>{t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.post_launch')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.long_term')}>{t('RWAForm.sections.tokenMarket.fields.marketingTimeline.options.long_term')}</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </>
        );

      case 5:
        // 合规与法律要求
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.compliance.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-800">
              <strong>{t('RWAForm.sections.compliance.important')}</strong>
            </div>

            {/* 司法管辖与合规要求 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.compliance.fields.jurisdictions.title')}</h3>
              <Form.Item
                label={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.label')}
                name="jurisdictions"
                rules={[{ required: true, message: t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.required') }]}
              >
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.china_mainland')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.china_mainland')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.hongkong')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.hongkong')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.singapore')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.singapore')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.usa')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.usa')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.eu')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.eu')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.japan')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.japan')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.south_korea')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.south_korea')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.other')}>{t('RWAForm.sections.compliance.fields.jurisdictions.fields.jurisdictions.options.other')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.compliance.fields.legalStructure.label')} name="legalStructure">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.spv')}>{t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.spv')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.trust')}>{t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.trust')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.fund')}>{t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.fund')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.company')}>{t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.company')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.uncertain')}>{t('RWAForm.sections.compliance.fields.legalStructure.fields.legalStructure.options.uncertain')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* 现有法律与合规准备 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.compliance.fields.complianceExperience.title')}</h3>
              <Form.Item label={t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.label')} name="complianceExperience">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.expert')}>{t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.expert')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.some')}>{t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.some')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.limited')}>{t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.limited')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.none')}>{t('RWAForm.sections.compliance.fields.complianceExperience.fields.complianceExperience.options.none')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.compliance.fields.legalSupport.label')} name="legalSupport">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.have_lawyers')}>{t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.have_lawyers')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.partial_support')}>{t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.partial_support')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.need_lawyers')}>{t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.need_lawyers')}</Radio>
                    <Radio value={t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.unsure')}>{t('RWAForm.sections.compliance.fields.legalSupport.fields.legalSupport.options.unsure')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.compliance.fields.existingLicenses.label')} name="existingLicenses">
                <Input.TextArea
                  placeholder={t('RWAForm.sections.compliance.fields.existingLicenses.placeholder')}
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>
            </div>

            {/* 风险评估与声明 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.compliance.fields.riskAcknowledgment.title')}</h3>
              <Form.Item
                label={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.label')}
                name="riskAcknowledgments"
                rules={[{ required: true, message: t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.required') }]}
              >
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.policy_risk')}>{t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.policy_risk')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.market_risk')}>{t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.market_risk')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.technical_risk')}>{t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.technical_risk')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.compliance_risk')}>{t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.compliance_risk')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.responsibility')}>{t('RWAForm.sections.compliance.fields.riskAcknowledgment.fields.riskAcknowledgment.options.responsibility')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </>
        );

      case 6:
        // 链上资产管理与持续服务需求
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.ongoingService.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
              <strong>{t('RWAForm.sections.ongoingService.description')}</strong>
            </div>

            {/* 链上资产管理需求 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.ongoingService.fields.onchainServices.title')}</h3>
              <Form.Item label={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.label')} name="onchainServices">
                <Checkbox.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.asset_monitoring')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.asset_monitoring')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.automated_distribution')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.automated_distribution')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.compliance_monitoring')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.compliance_monitoring')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.platform_maintenance')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.platform_maintenance')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.security_updates')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.security_updates')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.investor_relations')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.investor_relations')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.community_management')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.community_management')}</Checkbox>
                  <Checkbox value={t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.reporting_services')}>{t('RWAForm.sections.ongoingService.fields.onchainServices.fields.onchainServices.options.reporting_services')}</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.ongoingService.fields.serviceLevel.label')} name="serviceLevel">
                  <Select placeholder={t('RWAForm.sections.ongoingService.fields.serviceLevel.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceLevel.options.basic')}>{t('RWAForm.sections.ongoingService.fields.serviceLevel.options.basic')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceLevel.options.standard')}>{t('RWAForm.sections.ongoingService.fields.serviceLevel.options.standard')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceLevel.options.premium')}>{t('RWAForm.sections.ongoingService.fields.serviceLevel.options.premium')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceLevel.options.enterprise')}>{t('RWAForm.sections.ongoingService.fields.serviceLevel.options.enterprise')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.ongoingService.fields.serviceDuration.label')} name="serviceDuration">
                  <Select placeholder={t('RWAForm.sections.ongoingService.fields.serviceDuration.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceDuration.options.1_year')}>{t('RWAForm.sections.ongoingService.fields.serviceDuration.options.1_year')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceDuration.options.2_years')}>{t('RWAForm.sections.ongoingService.fields.serviceDuration.options.2_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceDuration.options.3_years')}>{t('RWAForm.sections.ongoingService.fields.serviceDuration.options.3_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceDuration.options.5_years')}>{t('RWAForm.sections.ongoingService.fields.serviceDuration.options.5_years')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.ongoingService.fields.serviceDuration.options.long_term')}>{t('RWAForm.sections.ongoingService.fields.serviceDuration.options.long_term')}</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </>
        );

      case 7:
        // 预算与时间安排
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 pb-2.5 text-2xl text-black font-semibold">
              {t('RWAForm.sections.budget.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="mt-4 rounded-lg bg-yellow-50 p-4 text-yellow-800">
              <strong>{t('RWAForm.sections.budget.note')}</strong>
            </div>

            {/* 预算安排 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.budget.fields.totalBudget.title')}</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.label')} name="totalBudget">
                  <Select placeholder={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.50_100')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.50_100')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.100_150')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.100_150')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.150_200')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.150_200')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.200_300')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.200_300')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.over_300')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.over_300')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.flexible')}>{t('RWAForm.sections.budget.fields.totalBudget.fields.totalBudget.options.flexible')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={t('RWAForm.sections.budget.fields.thirdPartyBudget.label')}
                  name="thirdPartyBudget"
                  extra={t('RWAForm.sections.budget.fields.thirdPartyBudget.description')}
                >
                  <Input type="number" />
                </Form.Item>
              </div>

              <Form.Item label={t('RWAForm.sections.budget.fields.paymentPreference.label')} name="paymentPreference">
                <Radio.Group>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Radio value={t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.milestone')}>{t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.milestone')}</Radio>
                    <Radio value={t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.stage')}>{t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.stage')}</Radio>
                    <Radio value={t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.monthly')}>{t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.monthly')}</Radio>
                    <Radio value={t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.custom')}>{t('RWAForm.sections.budget.fields.paymentPreference.fields.paymentPreference.options.custom')}</Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* 时间安排 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl text-black font-semibold">{t('RWAForm.sections.budget.fields.projectTimeline.title')}</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.label')} name="projectTimeline">
                  <Select placeholder={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.3_months')}>{t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.3_months')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.4_months')}>{t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.4_months')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.6_months')}>{t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.6_months')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.12_months')}>{t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.12_months')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.flexible')}>{t('RWAForm.sections.budget.fields.projectTimeline.fields.projectTimeline.options.flexible')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.budget.fields.urgency.label')} name="urgency">
                  <Radio.Group>
                    <Radio value={t('RWAForm.sections.budget.fields.urgency.options.normal')}>{t('RWAForm.sections.budget.fields.urgency.options.normal')}</Radio>
                    <Radio value={t('RWAForm.sections.budget.fields.urgency.options.urgent')}>{t('RWAForm.sections.budget.fields.urgency.options.urgent')}</Radio>
                    <Radio value={t('RWAForm.sections.budget.fields.urgency.options.very_urgent')}>{t('RWAForm.sections.budget.fields.urgency.options.very_urgent')}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.budget.fields.preferredStartDate.label')} name="preferredStartDate">
                  <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.budget.fields.targetLaunchDate.label')} name="targetLaunchDate">
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>
            </div>
          </>
        );

      case 8:
        // 补充信息
        return (
          <>
            <h2 className="mb-5 flex items-center gap-2.5 border-b-3 border-[#667eea] pb-2.5 text-2xl text-[#1e3c72] font-semibold">
              {t('RWAForm.sections.additional.title')}
            </h2>
            <div className="border-t border-[#130F30]"></div>

            <div className="rounded-lg bg-white p-4">
              <Form.Item label={t('RWAForm.sections.additional.fields.specialRequirements.label')} name="specialRequirements">
                <Input.TextArea
                  placeholder={t('RWAForm.sections.additional.fields.specialRequirements.placeholder')}
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>

              <Form.Item label={t('RWAForm.sections.additional.fields.concernsQuestions.label')} name="concernsQuestions">
                <Input.TextArea
                  placeholder={t('RWAForm.sections.additional.fields.concernsQuestions.placeholder')}
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Form.Item label={t('RWAForm.sections.additional.fields.hearAboutUs.label')} name="hearAboutUsId">
                  <Select placeholder={t('RWAForm.sections.additional.fields.hearAboutUs.placeholder')}>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.referral')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.referral')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.search_engine')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.search_engine')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.social_media')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.social_media')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.industry_event')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.industry_event')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.media_report')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.media_report')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.business_partner')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.business_partner')}</Select.Option>
                    <Select.Option value={t('RWAForm.sections.additional.fields.hearAboutUs.options.other')}>{t('RWAForm.sections.additional.fields.hearAboutUs.options.other')}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={t('RWAForm.sections.additional.fields.existingProjects.label')} name="existingProjectsId">
                  <Radio.Group>
                    <Radio value={t('RWAForm.sections.additional.fields.existingProjects.fields.existingProjects.options.yes')}>{t('RWAForm.sections.additional.fields.existingProjects.fields.existingProjects.options.yes')}</Radio>
                    <Radio value={t('RWAForm.sections.additional.fields.existingProjects.fields.existingProjects.options.no')}>{t('RWAForm.sections.additional.fields.existingProjects.fields.existingProjects.options.no')}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <Form.Item label={t('RWAForm.sections.additional.fields.additionalInfo.label')} name="additionalInfo">
                <Input.TextArea
                  placeholder={t('RWAForm.sections.additional.fields.additionalInfo.placeholder')}
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[20px] shadow-lg">
        {/* Header */}
        <div className="relative p-10 text-center text-white">
          {/* <div className="absolute right-5 top-2.5 text-xs opacity-70">{t('RWAForm.logo')}</div> */}
          <h1 className="mb-2.5 text-4xl font-bold">{t('RWAForm.title')}</h1>
          <p className="text-lg opacity-90">{t('RWAForm.subtitle')}</p>
          <div className="mt-5 rounded-lg bg-white/20 p-4 text-sm">
            <strong>{t('RWAForm.processTitle')}</strong>
            {t('RWAForm.processDescription')}
          </div>
        </div>

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="p-10 space-y-8"
          scrollToFirstError
        >
          {/* 委托方基本信息 */}
          <div className="border-2 border-[#C931F7] rounded-[15px] p-4 transition-all hover:shadow-md">
            <div className="bg-white px-20 py-10 bg-no-repeat" style={{ backgroundImage: `url(${titlebgImg})` }}>
              {renderStepContent()}

              <div className="mt-10 flex">
                <span className="w-15">
                  {t('stepValidation.progress')}
                  :
                </span>
                <Progress showInfo={false} percent={percent} strokeColor="#D900FF" trailColor="rgba(217,0,255,0.1)" />
              </div>
            </div>
            <div className="mt-5 text-right">
              {currentStep === 0
                ? ''
                : (
                    <Button
                      type="primary"
                      onClick={() => prevStep()}
                      className="mr-10 h-auto bg-[#FFFFFF] px-10 py-4 text-xl text-black font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      上一步
                    </Button>
                  )}
              {currentStep === 8
                ? (
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitLoad}
                      className="h-auto bg-[#D502FE] px-10 py-4 text-xl text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      {t('RWAForm.submit.button')}
                    </Button>
                  )
                : (
                    <Button
                      type="primary"
                      onClick={() => nextStep()}
                      className="h-auto bg-[#D502FE] px-10 py-4 text-xl text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      下一步
                    </Button>
                  )}
            </div>
          </div>

          <div className="mb-8 rounded-lg bg-blue-50 p-4 text-blue-800">
            <strong>{t('RWAForm.securityNote')}</strong>
          </div>

          {/* Submit Section */}
          <div className="p-10 text-center from-[#667eea] to-[#764ba2] bg-gradient-to-r -mx-10 -mb-10">
            {/* {currentStep === 8
              ? (
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitLoad}
                    className="h-auto rounded-full bg-white px-10 py-4 text-xl text-[#1e3c72] font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    {t('RWAForm.submit.button')}
                  </Button>
                )
              : ''} */}
            <p className="mt-4 text-white opacity-90">
              {t('RWAForm.submit.description')}
            </p>
            <p className="mt-2.5 text-sm text-white opacity-80">
              {t('RWAForm.submit.contact')}
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
