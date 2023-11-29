import axios, { AxiosInstance } from "axios";
import qs from "qs";
import { ApiUrl } from "../utils/utils";

export const api: AxiosInstance = axios.create({
  baseURL: ApiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Authorization,Content-Type, Accept, X-Requested-With, remember-me",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "3600",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
});
