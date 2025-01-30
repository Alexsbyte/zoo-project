import { axiosInstance } from '../shared/lib/axiosInstance';

export default class apiUser {
  static async refreshTokens() {
    const result = await axiosInstance.get('/auth/refreshTokens');
    return result.data;
  }

  static async reg({ username, email, password }) {
    const result = await axiosInstance.post('/auth/reg', {
      username,
      email,
      password,
    });
    console.log('APIUSER-REG>>>>>', result);
    return result;
  }

  static async login({ email, password }) {
    const result = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    console.log('APIUSER-LOGIN>>>>>', result);
    return result;
  }

  static async logout() {
    const result = await axiosInstance.get('/auth/logout');
    console.log('APIUSER-LOGOUT>>>>>', result);
    return result;
  }
}
