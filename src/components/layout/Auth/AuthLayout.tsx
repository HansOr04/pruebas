import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-20 relative">
      <Image
        src="https://images.pexels.com/photos/4769492/pexels-photo-4769492.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10"
        style={{ zIndex: -1 }}
      />

      <div className="relative" style={{ zIndex: 10 }}>
        <h1 className="text-4xl text-white font-bold">
          Mind<span className="text-[var(--primary-text-color)]">Nest</span>
        </h1>
      </div>

      <div
        className="w-80 p-6 bg-black bg-opacity-80 rounded-2xl shadow-md relative"
        style={{ zIndex: 10 }}
      >
        {children}
      </div>
    </div>
  );
}
