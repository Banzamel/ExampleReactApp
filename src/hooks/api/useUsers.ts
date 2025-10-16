import { useState, useCallback } from "react";
import {PaginationParams, User, UserFilters, userService} from "src/api";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = useCallback(async (params?: PaginationParams & UserFilters) => {
        try {
            setLoading(true);
            setError(null);
            const response = await userService.getAll(params);
            setUsers(response.data);
            return response;
        } catch (err) {
            setError("Błąd pobierania użytkowników");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const createUser = useCallback(async (data: any) => {
        try {
            setLoading(true);
            const newUser = await userService.create(data);
            setUsers(prev => [...prev, newUser]);
            return newUser;
        } catch (err) {
            setError("Błąd tworzenia użytkownika");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        users,
        loading,
        error,
        fetchUsers,
        createUser,
    };
};