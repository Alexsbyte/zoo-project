import { axiosInstance } from '../shared/lib/axiosInstance';

export default class apiAnimal {
  static async getAnimalsAndPhotos() {
    const result = await axiosInstance.get('/api/animals');
    return result;
  }
}