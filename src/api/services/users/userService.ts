import {
    apiClient,
    CreateUserRequest,
    PaginatedResponse,
    PaginationParams,
    UpdateUserRequest,
    User,
    UserFilters
} from "@api";

class UserService {
    private readonly endpoint = "/users";

    async getAll(params?: PaginationParams & UserFilters): Promise<PaginatedResponse<User>> {
        const response = await apiClient.get<PaginatedResponse<User>>(this.endpoint, { params });
        return response.data;
    }

    async getById(id: number): Promise<User> {
        const response = await apiClient.get<User>(`${this.endpoint}/${id}`);
        return response.data;
    }

    async create(data: CreateUserRequest): Promise<User> {
        const response = await apiClient.post<User>(this.endpoint, data);
        return response.data;
    }

    async update(id: number, data: UpdateUserRequest): Promise<User> {
        const response = await apiClient.put<User>(`${this.endpoint}/${id}`, data);
        return response.data;
    }

    async delete(id: number): Promise<void> {
        await apiClient.delete(`${this.endpoint}/${id}`);
    }

    async bulkDelete(ids: number[]): Promise<void> {
        await apiClient.post(`${this.endpoint}/bulk-delete`, { ids });
    }
}

export const userService = new UserService();