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
    return result.data;
  }

  static async login({ email, password }) {
    // try {
    const result = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    // console.log(result);
    return result.data;
    // } catch (error) {
    //   console.log('APIUSER CATCH', error.response);
    //   return error;
    // }
  }

  static async logout() {
    const result = await axiosInstance.get('/auth/logout');
    return result;
  }
}
