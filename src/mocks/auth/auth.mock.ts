// Mock data para autenticación
import { User, LoginResponse } from '@/src/types/auth/auth.types';

export const usersMockData: User[] = [
  {
    id: '1',
    name: 'Dr. Juan Pérez',
    email: 'juan.perez@example.com',
  },
  {
    id: '2',
    name: 'Dra. María González',
    email: 'maria.gonzalez@example.com',
  },
  {
    id: '3',
    name: 'Dr. Carlos Rodríguez',
    email: 'carlos.rodriguez@example.com',
  },
];

export const loginResponseMock: LoginResponse = {
  user: usersMockData[0],
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.token',
};

// Funciones utilitarias para auth mock
export const getUserById = (id: string): User | undefined => {
  return usersMockData.find((user) => user.id === id);
};

export const getUserByEmail = (email: string): User | undefined => {
  return usersMockData.find((user) => user.email === email);
};
