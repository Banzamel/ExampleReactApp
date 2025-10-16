export interface User {
    id: number;
    email: string;
    name: string;
    role: "admin" | "user" | "manager";
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateUserRequest {
    email: string;
    name: string;
    password: string;
    role: "admin" | "user" | "manager";
}

export interface UpdateUserRequest {
    name?: string;
    email?: string;
    role?: "admin" | "user" | "manager";
    isActive?: boolean;
}

export interface UserFilters {
    role?: string;
    isActive?: boolean;
    search?: string;
}