export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        totalPages: number;
        totalCount: number;
    };
}

export interface ApiError {
    message: string;
    code?: string;
    errors?: Record<string, string[]>;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

export interface SearchParams extends PaginationParams {
    search?: string;
}