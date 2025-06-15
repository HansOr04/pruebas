"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getSpaceById, toggleSpaceFavorite } from '@/src/mocks/spaces/space.mock';
import { Space } from '@/src/types/spaces/space.types';
import Footer from '@/app/components/shared/navigation/Footer';

export default function SpaceDetailsContent() {
  const params = useParams();
  const [space, setSpace] = useState<Space | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos en el cliente para evitar problemas de hidratación
    setIsClient(true);

    // Find the space by ID
    const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);
    const found = getSpaceById(id);

    if (found) {
      setSpace(found);
      setIsFavorite(found.isFavorite || false);
    }
  }, [params]);

  // Mostrar loader durante la hidratación inicial
  if (!isClient || !space) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" 
             style={{ borderColor: 'var(--color-primary-text)' }}>
        </div>
      </div>
    );
  }

  // Para la demo, usamos la misma imagen varias veces
  const images = [space.image, space.image, space.image];

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleSpaceFavorite(space.id);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Mobile: Header con botón de regreso */}
      <div className="md:hidden flex items-center justify-between p-4">
        <Link href="/spaces" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-xl font-bold">
            Mind<span style={{ color: 'var(--color-primary-text)' }}>Nest</span>
          </span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Galería de imágenes - Responsive */}
          <div className="w-full lg:w-2/3">
            <div className="relative rounded-xl overflow-hidden h-72 md:h-96">
              <Image
                src={images[currentImageIndex]}
                alt={space.name}
                fill
                className="object-cover photo-fade"
                priority
              />

              {/* Navegación de puntos - Responsive */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: Título y favorito */}
            <div className="md:hidden flex justify-between items-start mt-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">{space.name}</h1>
                <p className="text-gray-600 text-sm">Ubicación disponible</p>
              </div>
              <button
                onClick={handleToggleFavorite}
                className="p-2 flex-shrink-0 transition-transform active:scale-110"
                aria-label={
                  isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'
                }
              >
                {isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ff0000"
                    stroke="#ff0000"
                    strokeWidth="1"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Descripción */}
            <div className="mt-6 md:mt-8">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Descripción</h2>
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                Espacio profesional ideal para terapeutas y profesionales de
                la salud mental. Ambiente tranquilo y acogedor que promueve la
                relajación y el bienestar.
              </p>
            </div>

            {/* Disponibilidad */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Disponibilidad</h2>
              <div className="bg-gray-50 p-3 md:p-5 rounded-lg md:rounded-xl">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">
                      Días disponibles:
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Lunes, Martes, Miércoles, Jueves, Viernes
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">
                      Horario:
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenidades */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                <span className="md:hidden">Detalles</span>
                <span className="hidden md:inline">Amenidades</span>
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:gap-4">
                {[
                  'WiFi',
                  'Aire acondicionado',
                  'Sala de espera',
                  'Estacionamiento',
                  'Recepción',
                  'Seguridad',
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 md:mr-3 flex-shrink-0"
                      style={{ color: 'var(--color-primary-text)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Mapa */}
            <div className="md:hidden bg-gray-200 rounded-lg h-36 mb-6 flex items-center justify-center">
              <span className="text-gray-500">Mapa</span>
            </div>

            {/* Mobile: Precio y reserva */}
            <div className="md:hidden flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-2xl font-bold">$35</p>
                <p className="text-sm text-gray-500">Por hora</p>
              </div>
              <button 
                className="px-6 py-3 text-white font-bold rounded-full transition-colors"
                style={{ 
                  backgroundColor: 'var(--color-primary-text)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-text)';
                }}
              >
                Reservar
              </button>
            </div>

            {/* Reseñas */}
            <div className="mb-8">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Reseñas</h2>
              <div className="space-y-6">
                <div className="p-4 md:p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 font-medium">L</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">Lucia Andrade</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4 ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Excelente espacio para trabajar, muy tranquilo y con todos los
                        servicios que necesito para mis sesiones con pacientes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 font-medium">M</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">Marco Jiménez</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        La ubicación es perfecta y el ambiente es muy profesional. Mis
                        clientes quedan muy satisfechos con las instalaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Sidebar */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{space.name}</h1>
                    <p className="text-gray-600 text-sm">
                      Ubicación disponible
                    </p>
                  </div>
                  <button
                    onClick={handleToggleFavorite}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label={
                      isFavorite
                        ? 'Quitar de favoritos'
                        : 'Añadir a favoritos'
                    }
                  >
                    {isFavorite ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ff0000"
                        stroke="#ff0000"
                        strokeWidth="1"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    )}
                  </button>
                </div>

                {/* Calificación */}
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.5 · 12 reseñas
                  </span>
                </div>

                {/* Detalles rápidos */}
                <div className="border-t border-b border-gray-100 py-6 mb-6">
                  <h2 className="text-lg font-bold mb-3">Detalles</h2>
                  <div className="space-y-3">
                    {['WiFi', 'Aire acondicionado', 'Sala de espera'].map(
                      (amenity, index) => (
                        <div key={index} className="flex items-center">
                          <svg
                            className="h-5 w-5 mr-3 flex-shrink-0"
                            style={{ color: 'var(--color-primary-text)' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mapa */}
                <div className="relative bg-gray-200 rounded-lg h-40 mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Mapa</span>
                </div>

                {/* Precio y reserva */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-3xl font-bold">$35</p>
                      <p className="text-sm text-gray-500">Por hora</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        style={{ color: 'var(--color-primary-text)' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        Disponible ahora
                      </span>
                    </div>
                  </div>
                  <button 
                    className="w-full py-3 text-white font-bold rounded-full transition-colors"
                    style={{ 
                      backgroundColor: 'var(--color-primary-text)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-text)';
                    }}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Solo en desktop */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile: Padding para bottom nav */}
      <div className="md:hidden pb-20"></div>
    </>
  );
}