import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null; // 是否还有下一页
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17101569852946699bf88f549ad4a063", // the authentication of rawg.io -> https://rawg.io/@slienfore/apikey
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config) // config 方便进行携带query参数
      .then((res) => res.data);

  // Get Single
  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
