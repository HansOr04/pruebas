// Tipos para autenticación
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  password: string;
  email: string;
  tel: string;
  experience: string;
  profession: string;
  qualification: File | null;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

// Tipos para componentes de formularios de auth
export interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}
