import Link from "next/link";

export default function RegisterPrompt() {
  return (
    <p className="text-sm text-center mt-4 text-white font-bold">
      ¿No tienes cuenta?{" "}
      <Link
        href="/register"
        className="text-[var(--primary-text-color)] hover:underline"
      >
        Regístrate
      </Link>
    </p>
  );
}
