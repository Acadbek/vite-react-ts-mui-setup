import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { stage } from "@config";
import { endpoints } from "../endpoints";
import { getLocalStorage } from "@libs";

export class Instance {
  instance: AxiosInstance;
  baseURL: string = "";

  constructor({
    baseUrl = endpoints.base,
    headers,
    timeout = 65000,
  }: {
    baseUrl?: string;
    headers?: any;
    timeout?: number;
  }) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
      headers: headers,
    });
    this.instance.interceptors.request.use(this.handleRequest);
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleResponseError
    );
    this.baseURL = baseUrl;
  }

  handleResponse = (response: AxiosResponse) => response;

  handleResponseError = (error: any) => {
    if (error.response?.status === 401) {
      console.log(error);
    }
    throw error;
  };

  handleRequest = async ({ headers, ...restConfig }: AxiosRequestConfig) => {
    const accessToken = getLocalStorage("access-token");
    return {
      headers: {
        ...headers,
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
      ...restConfig,
    };
  };

  async send(
    method: "get" | "post" | "put" | "delete",
    url: string,
    params: any,
    config: AxiosRequestConfig
  ) {
    const { data } = await this.instance[method](url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }

  async get(url: string, params: any) {
    const { data } = await this.instance.get(url, {
      ...params,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }

  async post(url: string, params: any, config: any): Promise<any> {
    const { data } = await this.instance.post(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }

  async delete(url: string, config: any) {
    const { data } = await this.instance.delete(url, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }

  async put(url: string, params: any, config: any): Promise<any> {
    const { data } = await this.instance.put(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }

  async patch(url: string, params: any, config: any): Promise<any> {
    const { data } = await this.instance.patch(url, params, {
      ...config,
      baseURL: `${stage.apiUrl}${this.baseURL}`,
    });
    return data;
  }
}
