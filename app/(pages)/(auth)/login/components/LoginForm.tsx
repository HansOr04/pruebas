"use client";

import FormInput from "./FormInput";
import RegisterPrompt from "./RegisterPrompt";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Iniciar sesión
      </h2>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <FormInput id="username" label="Usuario" type="text" />
        <FormInput id="password" label="Contraseña" type="password" />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-3/6 py-2 bg-[var(--primary-text-color)] text-white rounded-full font-bold hover:bg-opacity-90"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <RegisterPrompt />
    </>
  );
}
