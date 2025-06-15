"use client";

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Navbar from "../app/components/shared/navigation/Navbar";
import MobileBottomNav from "../app/components/shared/navigation/mobile/MobileBottomNav";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  // Determinar si es página de auth basado en la ruta
  const isAuthPage = pathname?.includes('/login') || 
                     pathname?.includes('/register') || 
                     pathname?.includes('/forgot-password');
  
  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Mostrar un layout simple durante la hidratación
  if (!isClient) {
    return (
      <main className="min-h-screen">
        {children}
      </main>
    );
  }
  
  return (
    <>
      {/* Solo mostrar Navbar en desktop y no en páginas de auth */}
      {!isMobile && !isAuthPage && <Navbar />}
      
      {/* Ajustar padding basado en el tipo de dispositivo */}
      <main className={`min-h-screen ${
        !isMobile 
          ? 'px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl' 
          : 'px-0'
      }`}>
        {children}
      </main>
      
      {/* Mostrar navegación móvil solo en mobile y no en páginas de auth */}
      {isMobile && !isAuthPage && <MobileBottomNav />}
    </>
  );
}