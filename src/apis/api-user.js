/**
 * 用户相关接口
 */
import http, { BASE_NAME } from './index.js';

/**
 * 登录
 */
export async function userLoginApi(value) {
  try {
    const data = await http.post(`${BASE_NAME}/login`, value);

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
    const data = await http.get(`${BASE_NAME}/v1/rwa/mail/send`, { params });

    return data;
  } catch (error) {
    console.error(error);
  }
}
