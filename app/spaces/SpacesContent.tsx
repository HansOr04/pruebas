// app/spaces/SpacesContent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/app/components/shared/navigation/Footer';
import { consultoriesMockData } from '@/src/mocks/consultories/consultory.mock';
import ConsultoryCard from '@/app/home/components/ConsultoryCard';

export default function SpacesContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConsultories, setFilteredConsultories] =
    useState(consultoriesMockData);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Check for search parameters
    const query = searchParams.get('search');
    if (query) {
      setSearchTerm(query);
    }

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [searchParams]);

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = consultoriesMockData.filter(
        (consultory) =>
          consultory.name.toLowerCase().includes(term) ||
          consultory.address.toLowerCase().includes(term) ||
          consultory.city.toLowerCase().includes(term)
      );
      setFilteredConsultories(filtered);
    } else {
      setFilteredConsultories(consultoriesMockData);
    }
  }, [searchTerm]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/spaces?search=${encodeURIComponent(searchTerm)}`);
  };

  // Handle toggle favorite
  const handleToggleFavorite = (id: string) => {
    setFilteredConsultories((prev) =>
      prev.map((consultory) =>
        consultory.id === id
          ? { ...consultory, isFavorite: !consultory.isFavorite }
          : consultory
      )
    );
  };

  // Show nothing during SSR to prevent hydration issues
  if (!isClient) {
    return null;
  }

  // Mobile version of the page
  if (isMobile) {
    return (
      <>
        <div className="pt-4 px-4">
          <div className="text-2xl font-bold mb-6">
            Mind<span className="text-[var(--primary-text-color)]">Nest</span>
          </div>

          {/* Search box */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex w-full mb-6"
          >
            <input
              type="text"
              placeholder="Encuentra tu lugar de trabajo"
              className="w-full py-3 px-4 pr-12 bg-green-100/60 rounded-full text-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
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
        </div>

        {/* Spaces List with padding for bottom nav */}
        <div className="px-4 pb-20">
          <h2 className="text-xl font-bold mb-4">
            {searchTerm
              ? `Resultados para "${searchTerm}"`
              : 'Todos los espacios'}
          </h2>

          {filteredConsultories.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredConsultories.map((consultory) => (
                <div key={consultory.id} className="h-52 mb-4">
                  <ConsultoryCard
                    consultory={consultory}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto py-8 max-w-6xl">
        {/* Search section */}
        <div className="mb-8">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Busca por nombre o ubicación"
                className="flex-grow p-4 border-2 border-r-0 border-gray-300 rounded-l-full focus:outline-none focus:border-[var(--primary-text-color)]"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[var(--primary-text-color)] text-white font-bold rounded-r-full hover:bg-[var(--primary-hover)] transition-colors"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>

        {/* Spaces List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {searchTerm
              ? `Resultados para "${searchTerm}"`
              : 'Todos los espacios'}
          </h2>

          {filteredConsultories.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredConsultories.map((consultory) => (
                <div key={consultory.id} className="h-52">
                  <ConsultoryCard
                    consultory={consultory}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
