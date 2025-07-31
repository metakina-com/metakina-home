/*
 * @Author: D.YW
 */
/**
 * 用户相关接口
 */
import http, { BASE_NAME, BASE_USER } from './index.js';

/**
 * 发送验证码
 */
export async function postSendCode(value) {
  try {
    const data = await http.post(`${BASE_USER}/v1/user/visitor/sendCode`, value);

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * 注册用户
 */
export async function postVisitorRegister(value) {
  try {
    const data = await http.post(`${BASE_USER}/v1/user/visitor/register`, value);

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 *  登录用户
 */
export async function postVisitorLogin(value) {
  try {
    const data = await http.post(`${BASE_USER}/v1/user/visitor/login`, value);

    return data;
  } catch (error) {
    console.error(error);
  }
}

// 提交表单
export async function updateFormApi(value) {
  try {
    const data = await http.post(`${BASE_NAME}/platform-system/platform/projects`, value);

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * 提交联系表单
 * @param params 表单数据
 * @returns 提交结果
 */
export async function submitContactForm(params) {
  try {
    const data = await http.post(`${BASE_NAME}/platform-system/platform/mail/send`, params);

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * 提交合作伙伴表单
 * @param params 表单数据
 * @returns 提交结果
 */
export async function submitPartnerForm(params) {
  try {
    const data = await http.post(`${BASE_NAME}/partnerService/v1/partner/create`, params);

    return data;
  } catch (error) {
    console.error(error);
  }
}
