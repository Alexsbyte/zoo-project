import { axiosInstance } from "../shared/lib/axiosInstance";

export default class apiTaxes {
  static async getAllTaxes() {
    const result = await axiosInstance.get("/api/taxes");
    return result.data;
  }

  static async updateTax({ Adult, Child, weekendAdult, weekendChild }) {
    const result = await axiosInstance.put("/api/taxes", {
      Adult,
      Child,
      weekendAdult,
      weekendChild,
    });
    return result.data;
  }
}
