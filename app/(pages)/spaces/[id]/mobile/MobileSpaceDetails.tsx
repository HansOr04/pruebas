// app/spaces/[id]/mobile/MobileSpaceDetails.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Consultory, toggleFavorite } from '@/app/shared/utils/mockData';

interface MobileSpaceDetailsProps {
  consultory: Consultory;
}

const MobileSpaceDetails: React.FC<MobileSpaceDetailsProps> = ({ consultory }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(consultory.isFavorite || false);
  
  // Para la demo, usamos la misma imagen varias veces
  const images = [consultory.imageUrl, consultory.imageUrl, consultory.imageUrl];
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // En una aplicación real, aquí se realizaría una actualización en el servidor
    toggleFavorite(consultory.id);
  };
  
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="pb-20">
      {/* Header con botón de regreso */}
      <div className="flex items-center justify-between p-4">
        <Link href="/spaces" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xl font-bold">
            Mind<span className="text-[var(--primary-text-color)]">Nest</span>
          </span>
        </Link>
      </div>
      
      {/* Galería de imágenes */}
      <div className="relative h-72 w-full">
        <Image 
          src={images[currentImageIndex]} 
          alt={consultory.name} 
          fill 
          className="object-cover photo-fade"
        />
        
        {/* Puntos de navegación de imágenes */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentImageIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        {/* Título y ubicación */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">{consultory.name}</h1>
            <p className="text-gray-600 text-sm">
              {consultory.address}, {consultory.city} {consultory.zipCode}
            </p>
          </div>
          <button 
            onClick={handleToggleFavorite}
            className="p-2 flex-shrink-0"
            aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            {isFavorite ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" strokeWidth="1">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-700 text-sm mb-6">
          {consultory.description}
        </p>
        
        {/* Disponibilidad */}
        {consultory.availability && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Disponibilidad</h2>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Días:</span> {consultory.availability.days.join(", ")}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Horario:</span> {consultory.availability.hours.join(", ")}
              </p>
            </div>
          </div>
        )}
        
        {/* Amenidades */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Detalles</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {consultory.amenities && consultory.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <svg className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mapa (placeholder) */}
        <div className="bg-gray-200 rounded-lg h-36 mb-6 flex items-center justify-center">
          <span className="text-gray-500">Mapa</span>
        </div>
        
        {/* Precio y reserva */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-2xl font-bold">${consultory.pricePerHour}</p>
            <p className="text-sm text-gray-500">Por hora</p>
          </div>
          <button
            className="px-6 py-3 bg-[var(--primary-text-color)] text-white font-bold rounded-full hover:bg-[var(--primary-hover)] transition-colors"
          >
            Reservar
          </button>
        </div>
        
        {/* Reseñas */}
        <div>
          <h2 className="text-lg font-bold mb-4">Reseñas</h2>
          <div className="space-y-6">
            <div className="pb-4 border-b border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-500 font-medium">L</span>
                </div>
                <div>
                  <h4 className="font-medium">Lucia Andrade</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Excelente espacio para trabajar, muy tranquilo y con todos los servicios que necesito para mis sesiones con pacientes.</p>
            </div>
            
            <div className="pb-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-500 font-medium">M</span>
                </div>
                <div>
                  <h4 className="font-medium">Marco Jiménez</h4>
                  <div className="flex items-center">
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
                </div>
              </div>
              <p className="text-gray-600 text-sm">La ubicación es perfecta y el ambiente es muy profesional. Mis clientes quedan muy satisfechos con las instalaciones.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MobileSpaceDetails;