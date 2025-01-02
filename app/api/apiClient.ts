import { QueryParams } from "../../types/api-client";
export default class ApiClient {
  static baseURL: string = "https://rickandmortyapi.com/api/";

  static buildUrl(endpoint: string, queryParams?: QueryParams): string {
    endpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
    let url = `${ApiClient.baseURL}${endpoint}`;

    if (queryParams) {
      url += "?";
      for (const key in queryParams) {
        if (Array.isArray(queryParams[key])) {
          for (const value of queryParams[key] as string[]) {
            url += `${key}=${value}&`;
          }
        } else {
          url += `${key}=${queryParams[key]}&`;
        }
      }
    }

    return url;
  }

  static async get<T>(
    endpoint: string,
    queryParams: QueryParams = {},
    returnJson = true
  ): Promise<T | { error: string }> {
    const url = ApiClient.buildUrl(endpoint, queryParams);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (!returnJson) {
        return response;
      }
      const json = await response.json();
      return json;
    } catch (error: any) {
      return { error: error.message || "Unknown error occurred" };
    }
  }
}
