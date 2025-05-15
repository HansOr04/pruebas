// app/(pages)/home/components/ConsultoryCard.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Consultory } from '@/app/shared/utils/mockData';

interface ConsultoryCardProps {
  consultory: Consultory;
  onToggleFavorite?: (id: string) => void;
}

const ConsultoryCard: React.FC<ConsultoryCardProps> = ({
  consultory,
  onToggleFavorite
}) => {
  const [isFavorite, setIsFavorite] = useState(consultory.isFavorite || false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (onToggleFavorite) {
      onToggleFavorite(consultory.id);
    }
  };

  return (
    <div className="relative h-full">
      {/* Hacemos que todo el card sea clickeable y navegue a la página de detalles */}
      <Link href={`/spaces/${consultory.id}`} className="block h-full">
        <div className="consultory-card">
          {/* Background Image */}
          <Image
            src={consultory.imageUrl}
            alt={consultory.name}
            fill
            className="object-cover"
            priority
          />

          {/* Content with text over the image */}
          <div className="card-content">
            <div className="card-text">
              <h3 className="text-xl font-bold mb-1">{consultory.name}</h3>
              <p className="text-sm text-white/90">
                {consultory.address}, {consultory.city} {consultory.zipCode}
              </p>
            </div>

            {/* Rating */}
            <div className="card-rating">
              <span className="text-sm font-medium mr-1">{consultory.rating}</span>
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* L-shaped white corner */}
          <div className="card-corner"></div>
        </div>
      </Link>

      {/* Heart Favorite Button */}
      <button
        onClick={toggleFavorite}
        className="card-favorite"
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
  );
};

export default ConsultoryCard;