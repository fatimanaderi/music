import axios, { AxiosRequestConfig } from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://musicbrainz.org/ws/2",
  headers: {
    "Content-Type": "text/plain",
  },
  paramsSerializer: function paramsSerializer(params) {
    return (
      "query=" +
      Object.entries(Object.assign({}, params))
        .map(([key, value]) => {
          if (value != "") {
            if (key == "limit" || key == "offset" || key == "fmt")
              return `${key}=${value}`;
            return `${key}:${value}`;
          }
          return `${key}`;
        })
        .join("&")
    );
  },
});
export interface Response<T> {
  [x: string]: T[];
}
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig, listname: string) =>
    axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data[listname]);
  get = (id: string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}
export default APIClient;
