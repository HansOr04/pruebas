'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginService } from '@/src/services/api/Auth/loginService';

// Definimos una interfaz para el tipo de error que esperamos
interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

// Componente FormInput integrado
interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ id, label, type, value, onChange }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-bold mb-2 text-white">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-2 py-1 border-b-4 border-white bg-transparent text-white focus:outline-none focus:ring-0"
      />
    </div>
  );
}

// Componente RegisterPrompt integrado
function RegisterPrompt() {
  return (
    <p className="text-sm text-center mt-4 text-white font-bold">
      ¿No tienes cuenta?{' '}
      <Link
        href="/register"
        className="text-[var(--primary-text-color)] hover:underline"
      >
        Regístrate
      </Link>
    </p>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { login } = loginService();
      await login(formData.email, formData.password);

      // Redirigir al dashboard después de iniciar sesión
      router.push('/dashboard');
    } catch (error: unknown) {
      // Tratamos el error como ApiError en lugar de any
      const apiError = error as ApiError;
      setError(
        apiError.response?.data?.message ||
          apiError.message ||
          'Error al iniciar sesión. Por favor, verifica tus credenciales.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Iniciar sesión
      </h2>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <FormInput
          id="email"
          label="Correo electrónico"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormInput
          id="password"
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-3/6 py-2 bg-[var(--primary-text-color)] text-white rounded-full font-bold hover:bg-opacity-90 disabled:opacity-50"
          >
            {isLoading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </div>
      </form>
      <RegisterPrompt />
    </>
  );
}
