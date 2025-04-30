import axiosInstance from '../../../../shared/services/axiosConfig';

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  accessToken: string;
}

export const loginService = () => {
  return {
    login: async (email: string, password: string) => {
      try {
        const response = await axiosInstance.post<LoginResponse>(
          '/auth/login',
          {
            email,
            password,
          }
        );

        // Guardar el token en localStorage para usarlo en futuras peticiones
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        return response.data;
      } catch (error) {
        console.error('Error en el login:', error);
        throw error;
      }
    },
  };
};
