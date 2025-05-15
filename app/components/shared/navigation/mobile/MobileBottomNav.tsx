"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  
  // Determine if a route is active
  const isActive = (route: string) => {
    return pathname === route;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--primary-color)] py-3 px-4 flex justify-around items-center shadow-lg z-50">
      <Link href="/spaces" className={`flex flex-col items-center ${isActive('/spaces') ? 'text-[var(--primary-hover)]' : 'text-gray-700'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-xs mt-1">Search</span>
      </Link>
      
      <Link href="/favorite" className={`flex flex-col items-center ${isActive('/favorite') ? 'text-[var(--primary-hover)]' : 'text-gray-700'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="text-xs mt-1">Favorites</span>
      </Link>
      
      <Link href="/bookings" className={`flex flex-col items-center ${isActive('/bookings') ? 'text-[var(--primary-hover)]' : 'text-gray-700'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3z" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
        <span className="text-xs mt-1">Cart</span>
      </Link>
      
      <Link href="/dashboard" className={`flex flex-col items-center ${isActive('/dashboard') ? 'text-[var(--primary-hover)]' : 'text-gray-700'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  );
};

export default MobileBottomNav;