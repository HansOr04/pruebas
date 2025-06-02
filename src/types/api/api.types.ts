// Tipos para respuestas de API
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ErrorResponse {
  message: string;
  code: string;
  details?: unknown;
}

// Re-exportar tipos de auth para APIs
export type { LoginResponse, User } from '../auth/auth.types';
