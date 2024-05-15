import axios from "axios";

export const DOMAIN = `${process.env.NEXT_PUBLIC_API}`;

export const http = axios.create({
  baseURL: DOMAIN,
  headers: {
    "content-type": "application/json",
  },
  timeout: 10000,
});

http.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 400 || error.response?.status === 404) {
      console.log(error.response.message);
      console.log(error);
      console.log("Status 400 during HTTP request.");
      return Promise.resolve(error.response);
    }

    if (error.response?.status === 401 || error.response?.status === 403) {
      console.log(error.response.message);
    }

    return Promise.reject(error);
  }
);
