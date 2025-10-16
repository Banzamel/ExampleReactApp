import axios, {AxiosInstance} from "axios";

const createApiClient = (): AxiosInstance => {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
        timeout: 30000,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const apiClient = createApiClient();