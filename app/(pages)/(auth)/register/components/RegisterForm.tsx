'use client';

import FormInput from './FormInput';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Registro
      </h2>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <FormInput id="username" label="Usuario" type="text" />
        <FormInput id="password" label="Contraseña" type="password" />
        <FormInput id="email" label="Email" type="email" />
        <FormInput id="tel" label="Teléfono" type="tel" />
        <FormInput id="number" label="Años de experiencia" type="number" />
        <label
          htmlFor="profession"
          className="block text-lg font-bold mb-2 text-white"
        >
          Profesión
        </label>
        <select
          name="profession"
          id="profession"
          className="rounded-lg p-3 focus:outline-none bg-white/[0.17]"
        >
          <option value="profession1">Profesión 1</option>
          <option value="profession2">Profesión 2</option>
        </select>

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
            accept=".png, .jpg, .pdf"
            className="absolute inset-0 opacity-0 z-50 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center w-[241px] h-[127px] border-2 border-dashed border-white rounded-lg">
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
            <span className="mt-2 text-white font-bold">
              Drag and drop your files
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-3/6 py-2 bg-[var(--primary-text-color)] text-white rounded-full font-bold hover:bg-opacity-90"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  );
}
