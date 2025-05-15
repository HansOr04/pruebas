"use client";

import { useEffect, useState } from "react";
import Navbar from "../app/components/shared/navigation/Navbar";
import MobileBottomNav from "../app/components/shared/navigation/mobile/MobileBottomNav";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Check if current page is an auth page
    const pathname = window.location.pathname;
    setIsAuthPage(pathname.includes('/login') || pathname.includes('/register'));
    
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
  
  return (
    <>
      {/* Only show Navbar on desktop and not on auth pages */}
      {isClient && !isMobile && !isAuthPage && <Navbar />}
      
      {/* Adjust padding based on device type */}
      <main className={`min-h-screen ${!isMobile ? 'px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl' : 'px-0'}`}>
        {children}
      </main>
      
      {/* Show mobile bottom nav only on mobile and not on auth pages */}
      {isClient && isMobile && !isAuthPage && <MobileBottomNav />}
    </>
  );
}