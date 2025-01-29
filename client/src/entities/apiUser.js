import { axiosInstance } from '../shared/lib/axiosInstance';

export default class apiUser {
  static async reg({ username, email, password }) {
    const result = await axiosInstance.post('/auth/reg', {
      username,
      email,
      password,
    });
    console.log('APIUSER>>>>>', result);
    return result;
  }
}
