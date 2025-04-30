import Image from 'next/image';
import logoMainPage from '../../../../statics/logo-main.png';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-20 ">
      <Image
        src="https://images.pexels.com/photos/4769492/pexels-photo-4769492.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      <Image
        className=""
        src={logoMainPage}
        width={250}
        height={50}
        alt="logo MainNest"
      />

      <div className="w-80 p-6 bg-black bg-opacity-80 rounded-2xl shadow-md">
        {children}
      </div>
    </div>
  );
}
