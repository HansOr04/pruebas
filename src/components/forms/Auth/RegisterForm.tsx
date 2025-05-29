'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

// Tipos para el formulario
interface FormData {
  username: string;
  password: string;
  email: string;
  tel: string;
  experience: string;
  profession: string;
  qualification: File | null;
}

interface FormErrors {
  [key: string]: string;
}

// Componente FormInput integrado y optimizado
interface FormInputProps {
  id: keyof FormData;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

function FormInput({
  id,
  label,
  type,
  value,
  onChange,
  error,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-bold mb-2 text-white">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-2 py-1 border-b-4 bg-transparent text-white focus:outline-none focus:ring-0 ${
          error ? 'border-red-400' : 'border-white'
        }`}
      />
      {error && (
        <span className="text-red-400 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
}

export default function RegisterForm() {
  // Estado del formulario
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    tel: '',
    experience: '',
    profession: '',
    qualification: null,
  });

  // Estado de errores
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Manejo de cambios en inputs de texto
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Manejo de cambios en select
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Manejo de archivo
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      qualification: file,
    }));

    if (errors.qualification) {
      setErrors((prev) => ({
        ...prev,
        qualification: '',
      }));
    }
  };

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'El usuario es requerido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.tel.trim()) {
      newErrors.tel = 'El teléfono es requerido';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Los años de experiencia son requeridos';
    }

    if (!formData.profession) {
      newErrors.profession = 'La profesión es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Aquí iría la lógica de registro
      console.log('Datos del formulario:', formData);

      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset del formulario en caso de éxito
      setFormData({
        username: '',
        password: '',
        email: '',
        tel: '',
        experience: '',
        profession: '',
        qualification: null,
      });

      alert('Registro exitoso!');
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Registro
      </h2>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <FormInput
          id="username"
          label="Usuario"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          error={errors.username}
          required
        />

        <FormInput
          id="password"
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          required
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
        />

        <FormInput
          id="tel"
          label="Teléfono"
          type="tel"
          value={formData.tel}
          onChange={handleInputChange}
          error={errors.tel}
          required
        />

        <FormInput
          id="experience"
          label="Años de experiencia"
          type="number"
          value={formData.experience}
          onChange={handleInputChange}
          error={errors.experience}
          required
        />

        {/* Select de profesión */}
        <div>
          <label
            htmlFor="profession"
            className="block text-lg font-bold mb-2 text-white"
          >
            Profesión <span className="text-red-400">*</span>
          </label>
          <select
            name="profession"
            id="profession"
            value={formData.profession}
            onChange={handleSelectChange}
            required
            className={`w-full rounded-lg p-3 focus:outline-none bg-white/[0.17] text-white ${
              errors.profession ? 'border border-red-400' : ''
            }`}
          >
            <option value="" disabled>
              Selecciona una profesión
            </option>
            <option value="profesion1">Profesion 1</option>
          </select>
          {errors.profession && (
            <span className="text-red-400 text-sm mt-1 block">
              {errors.profession}
            </span>
          )}
        </div>

        {/* Upload de archivo */}
        <div>
          <label
            htmlFor="qualification"
            className="block text-lg font-bold mb-2 text-white"
          >
            Título Certificado
          </label>
          <div className="relative flex items-center justify-center">
            <input
              type="file"
              id="qualification"
              name="qualification"
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 z-50 cursor-pointer"
            />
            <div
              className={`flex flex-col items-center justify-center w-[241px] h-[127px] border-2 border-dashed rounded-lg ${
                errors.qualification ? 'border-red-400' : 'border-white'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 8H19a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"
                />
              </svg>
              <span className="mt-2 text-white font-bold text-center">
                {formData.qualification
                  ? formData.qualification.name
                  : 'Arrastra y suelta tu archivo'}
              </span>
            </div>
          </div>
          {errors.qualification && (
            <span className="text-red-400 text-sm mt-1 block">
              {errors.qualification}
            </span>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-3/6 py-2 bg-[var(--primary-text-color)] text-white rounded-full font-bold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isLoading ? 'Registrando...' : 'Registrar'}
          </button>
        </div>
      </form>
    </>
  );
}
