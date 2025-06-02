"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MobileSearchBoxProps {
  className?: string;
  placeholder?: string;
}

const MobileSearchBox: React.FC<MobileSearchBoxProps> = ({ 
  className = '',
  placeholder = 'Encuentra tu lugar de trabajo' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/spaces?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`relative flex w-full ${className}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3 px-4 pr-12 bg-green-100/60 rounded-full text-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
        aria-label="Search"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </button>
    </form>
  );
};

export default MobileSearchBox;