import axios from "axios";
import { API_BASE_URL } from "./constants";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL
})

export const axiosFetcher = (url: string) => axiosInstance.get(url).then(res => res.data)