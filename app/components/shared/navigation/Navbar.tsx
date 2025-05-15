"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName = 'Hans' }) => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="flex items-center justify-between py-4 px-8 md:px-16 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <h1 className="text-2xl font-bold">
          Mind<span className="text-[var(--primary-text-color)]">Nest</span>
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-12">
        <NavLink href="/" active={isActive('/')}>Home</NavLink>
        <NavLink href="/favorite" active={isActive('/favorite')}>Favorite</NavLink>
        <NavLink href="/bookings" active={isActive('/bookings')}>Reservations</NavLink>
      </div>

      {/* User Profile */}
      <div className="flex items-center">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="font-medium">Hi {userName}</span>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">{userName.charAt(0)}</span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button (hidden on desktop) */}
      <div className="md:hidden">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <Link 
      href={href} 
      className={`relative py-2 px-1 font-medium text-lg ${
        active 
        ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[var(--primary-text-color)]' 
        : 'text-gray-600 hover:text-black'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;