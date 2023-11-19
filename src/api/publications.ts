import { ENV } from "@/utils/constants";
import { Publication } from "@/utils/types";

export class Publications {
  async getPublications(): Promise<Publication[]>{
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PUBLICATIONS}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result
    } catch (error) {
      throw error;
    }
  }
}
