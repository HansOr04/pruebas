"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ 
  className = '',
  placeholder = 'Choose the place' 
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
      className={`flex w-full max-w-xl ${className}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="flex-grow p-4 border-2 border-r-0 border-gray-300 rounded-l-full focus:outline-none focus:border-[var(--primary-text-color)]"
      />
      <button
        type="submit"
        className="px-8 py-4 bg-[var(--primary-text-color)] text-white font-bold rounded-r-full hover:bg-[var(--primary-hover)] transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;