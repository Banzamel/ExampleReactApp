import { AxiosInstance, AxiosError } from "axios";

export const setupErrorInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                localStorage.removeItem("authToken");
                window.location.href = "/login";
            }

            return Promise.reject(error);
        }
    );
};