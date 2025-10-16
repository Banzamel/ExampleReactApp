// Client
export { apiClient } from "./client/axios.ts";

// Interceptors
export { setupAuthInterceptor } from "./interceptors/authInterceptor.ts";
export { setupErrorInterceptor } from "./interceptors/errorInterceptor.ts";

// Services
export { userService } from "./services/users/userService.ts";

// Types
export * from "./types/common.types.ts";
export * from "./services/users/user.types.ts";